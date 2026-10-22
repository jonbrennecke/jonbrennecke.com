import site from './site.json';

type Entity = { '@id': string; '@type': string; [property: string]: unknown };

export function getStructuredData(path: keyof typeof site.pages) {
  const seo = site.pages[path];
  const url = new URL(path, site.origin).href;
  const personId = `${site.origin}/#person`;
  const websiteId = `${site.origin}/#website`;
  const page: Entity = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': websiteId },
    inLanguage: 'en',
  };
  const graph: Entity[] = [
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Jon Brennecke',
      url: `${site.origin}/`,
      sameAs: ['https://github.com/jonbrennecke'],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${site.origin}/`,
      name: 'Jon Brennecke',
      creator: { '@id': personId },
    },
    page,
  ];
  if (path === '/') page.about = { '@id': personId };

  const headlines: Partial<Record<keyof typeof site.pages, string>> = {
    '/case-studies/ultrasound-ai':
      'Ultrasound AI: From Ultrasound to Baby Portraits',
    '/case-studies/curative':
      'Curative: COVID-19 Testing and Vaccination Software',
  };
  const headline = headlines[path];
  if (headline) {
    const articleId = `${url}#article`;
    page.mainEntity = { '@id': articleId };
    graph.push({
      '@type': 'Article',
      '@id': articleId,
      url,
      headline,
      description: seo.description,
      image: new URL(seo.socialImage, site.origin).href,
      author: { '@id': personId },
      mainEntityOfPage: { '@id': page['@id'] },
      inLanguage: 'en',
    });
  }

  if (path === '/case-studies/collage-creator') {
    const appId = `${url}#application`;
    page.mainEntity = { '@id': appId };
    graph.push({
      '@type': 'MobileApplication',
      '@id': appId,
      name: 'Collage Creator',
      url,
      description: seo.description,
      operatingSystem: 'iOS',
      applicationCategory: 'MultimediaApplication',
      installUrl:
        'https://apps.apple.com/us/app/collage-creator-photo-grids/id1603000308',
      image: new URL(seo.socialImage, site.origin).href,
      creator: { '@id': personId },
      mainEntityOfPage: { '@id': page['@id'] },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

// Keep JSON inside its script element even if future content contains HTML.
export function serializeStructuredData(
  data: ReturnType<typeof getStructuredData>
) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
