const fs = require('fs');
const path = require('path');
const { origin, pages } = require('../src/seo/site.json');
const output = path.resolve(__dirname, '../build');
const escapeXml = (text) =>
  text.replace(
    /[<>&'"]/g,
    (char) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;',
      }[char])
  );

// Fail rather than advertising a route that was not exported.
for (const route of Object.keys(pages)) {
  const filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  if (!fs.existsSync(path.join(output, filename))) {
    throw new Error(`Missing exported page: ${filename}`);
  }
}
const urls = Object.keys(pages).map(
  (route) => `  <url><loc>${escapeXml(new URL(route, origin).href)}</loc></url>`
);
fs.writeFileSync(
  path.join(output, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`
);
fs.writeFileSync(
  path.join(output, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`
);
console.log(`Generated sitemap and robots.txt for ${urls.length} pages`);
