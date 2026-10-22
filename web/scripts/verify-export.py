"""Check the actual static export, optionally through Netlify Dev HTTP."""
from html.parser import HTMLParser
from pathlib import Path
import argparse
import json
import struct
import subprocess
import tempfile
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / 'build'
SITE = json.loads((ROOT / 'src/seo/site.json').read_text())
PRIMARY = ['/', '/case-studies/ultrasound-ai', '/case-studies/collage-creator', '/case-studies/curative']


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.title = ''
        self.h1 = []
        self.scripts = []
        self.in_title = self.in_h1 = self.in_json = False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == 'title': self.in_title = True
        if tag == 'h1': self.in_h1 = True; self.h1.append('')
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_json = True
            self.scripts.append('')

    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'h1': self.in_h1 = False
        if tag == 'script': self.in_json = False

    def handle_data(self, text):
        if self.in_title: self.title += text
        if self.in_h1: self.h1[-1] += text
        if self.in_json: self.scripts[-1] += text

    def find(self, tag, **attrs):
        return [a for t, a in self.tags if t == tag and all(a.get(k) == v for k, v in attrs.items())]


def assert_graph_references(value, ids):
    if isinstance(value, dict):
        if set(value) == {'@id'}: assert value['@id'] in ids, value
        for item in value.values(): assert_graph_references(item, ids)
    elif isinstance(value, list):
        for item in value: assert_graph_references(item, ids)


def verify_export():
    sitemap = ET.parse(BUILD / 'sitemap.xml')
    namespace = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    locations = [node.text for node in sitemap.findall('s:url/s:loc', namespace)]
    expected = [SITE['origin'] + path for path in SITE['pages']]
    assert sorted(locations) == sorted(expected)
    assert not sitemap.findall('s:url/s:lastmod', namespace), 'Do not invent lastmod dates'
    robots = (BUILD / 'robots.txt').read_text()
    assert 'User-agent: *' in robots
    assert f"Sitemap: {SITE['origin']}/sitemap.xml" in robots
    titles = set()

    for route, seo in SITE['pages'].items():
        filename = 'index.html' if route == '/' else route[1:] + '.html'
        document = Document((BUILD / filename).read_text())
        url = SITE['origin'] + route
        assert document.find('html', lang='en'), route
        assert document.title == seo['title'], route
        assert document.title not in titles, route
        titles.add(document.title)
        assert len(document.find('title')) == 1, route
        assert document.find('meta', name='description') == [{'name': 'description', 'content': seo['description']}], route
        canonicals = document.find('link', rel='canonical')
        assert len(canonicals) == 1 and canonicals[0]['href'] == url, route
        assert not document.find('meta', name='robots', content='noindex'), route
        for key, content in {'og:title': seo['title'], 'og:description': seo['description'], 'og:url': url, 'og:image': SITE['origin'] + seo['socialImage'], 'og:type': seo['socialType']}.items():
            tags = document.find('meta', property=key)
            assert len(tags) == 1 and tags[0]['content'] == content, (route, key)
        assert document.find('meta', name='twitter:card', content='summary_large_image'), route
        assert document.find('meta', name='twitter:image', content=SITE['origin'] + seo['socialImage']), route
        assert len(document.scripts) == 1, route
        data = json.loads(document.scripts[0])
        graph = data['@graph']
        ids = {entity['@id'] for entity in graph}
        assert len(ids) == len(graph), route
        assert_graph_references(graph, ids)
        assert any(e['@type'] == 'Person' and e['name'] == 'Jon Brennecke' for e in graph), route
        assert not any(e['@type'] in ['Organization', 'Product'] for e in graph), route
        if route in ['/case-studies/ultrasound-ai', '/case-studies/curative']:
            articles = [e for e in graph if e['@type'] == 'Article']
            assert len(articles) == 1 and articles[0]['headline'] == document.h1[0], route
            assert 'datePublished' not in articles[0] and 'dateModified' not in articles[0], route
        if route == '/case-studies/collage-creator':
            apps = [e for e in graph if e['@type'] == 'MobileApplication']
            assert len(apps) == 1 and apps[0]['operatingSystem'] == 'iOS'
            assert 'id1603000308' in apps[0]['installUrl']
            assert not any(key in apps[0] for key in ['offers', 'aggregateRating', 'review'])
        if route in PRIMARY:
            assert len(document.h1) == 1 and document.h1[0].strip(), route
            assert all('alt' in image for image in document.find('img')), route
            if route != '/':
                links = {a.get('href') for a in document.find('a')}
                assert set(PRIMARY[1:]) - {route} <= links, route
        image = (BUILD / seo['socialImage'][1:]).read_bytes()
        assert image[:8] == b'\x89PNG\r\n\x1a\n'
        assert struct.unpack('>II', image[16:24]) == (1200, 630)
    missing = Document((BUILD / '404.html').read_text())
    assert missing.find('meta', name='robots', content='noindex')
    assert missing.h1 == ['Page not found']

    # Verify the generator refuses to publish URLs absent from the export.
    with tempfile.TemporaryDirectory() as directory:
        fixture = Path(directory)
        (fixture / 'scripts').mkdir()
        (fixture / 'src/seo').mkdir(parents=True)
        (fixture / 'build').mkdir()
        (fixture / 'scripts/generate-seo-files.js').write_text((ROOT / 'scripts/generate-seo-files.js').read_text())
        (fixture / 'src/seo/site.json').write_text(json.dumps(SITE))
        result = subprocess.run(['node', str(fixture / 'scripts/generate-seo-files.js')], capture_output=True, text=True)
        assert result.returncode != 0 and 'Missing exported page' in result.stderr
    print('PASS: 9 exported routes, metadata, headings, alternatives, graph references, social PNGs, sitemap, robots, 404, and generator failure path')


def verify_http(base_url):
    def get(path, headers=None):
        request = urllib.request.Request(base_url.rstrip('/') + path, headers=headers or {})
        try: response = urllib.request.urlopen(request, timeout=20)
        except urllib.error.HTTPError as error: response = error
        return response.status, response.headers, response.read()
    for route, seo in SITE['pages'].items():
        status, headers, body = get(route)
        assert status == 200 and 'text/html' in headers['Content-Type'], route
        assert Document(body.decode()).title == seo['title'], route
        status, headers, body = get(seo['socialImage'])
        assert status == 200 and 'image/png' in headers['Content-Type'], seo['socialImage']
    for path, mime in [('/sitemap.xml', 'application/xml'), ('/robots.txt', 'text/plain')]:
        status, headers, body = get(path)
        assert status == 200 and mime in headers['Content-Type'], (path, dict(headers))
        assert not body.lstrip().lower().startswith(b'<!doctype html'), path
    for path in ['/seo-check-does-not-exist', '/missing-asset.png', '/case-studies/does-not-exist']:
        status, headers, body = get(path)
        assert status == 404, (path, status)
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, request, fp, code, msg, headers, new_url):
            return None
    opener = urllib.request.build_opener(NoRedirect())
    for host in ['www.jonbrennecke.com', 'jonbrennecke.com']:
        path = '/case-studies/curative?seo_check=1&source=verification'
        request = urllib.request.Request(base_url.rstrip('/') + path, headers={'Host': host})
        try: response = opener.open(request, timeout=20)
        except urllib.error.HTTPError as error: response = error
        assert response.status == 301, (host, response.status)
        assert response.headers['Location'] == SITE['origin'] + path, (host, response.headers['Location'])
    print('PASS: Netlify HTTP responses for 9 extensionless routes, social assets, crawler MIME types, missing routes/assets, and alias redirects preserving paths/queries')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base-url')
    args = parser.parse_args()
    verify_export()
    if args.base_url: verify_http(args.base_url)
