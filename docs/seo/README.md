# Portfolio SEO verification

This change addresses the October 22, 2026 Ahrefs audit in thirteen commits, one per prioritized item. Existing HTTPS enforcement stays enabled. Person and MobileApplication markup describe the actual portfolio/app; no Organization, merchant Product, offer, rating, or publication date has been invented to satisfy a classifier.

## Build and check

The site remains a Next.js 12 static export. The sitemap generator runs after cleanup and export, checks that all nine listed pages exist, and writes sitemap.xml and robots.txt into web/build. Legal routes remain public and indexable. Generated modification dates are deliberately omitted.

The root and web `.nvmrc` files select Node 22 for local and Netlify builds. Next 12's image decoder predates Node's global fetch. Use the same build-only compatibility settings configured in netlify.toml:

```sh
nvm use
yarn install --immutable
NODE_OPTIONS="--no-experimental-fetch --openssl-legacy-provider" yarn build
python3 web/scripts/verify-export.py
```

For Netlify routing/header verification, run:

```sh
npx --yes netlify-cli@27.14.2 dev --offline --filter @portfolio/web --dir "$PWD/web/build" --framework '#static' --port 8899 --no-open --skip-gitignore
```

Then, in a second terminal:

```sh
python3 web/scripts/verify-export.py --base-url http://localhost:8899
```

The verifier checks all nine exports, unique titles/descriptions/canonicals, social tags and 1200x630 PNGs, parsed sitemap XML, robots contents, JSON-LD references, the four portfolio H1s/image alternatives, sibling links, the custom noindex 404, and the generator's failure path. HTTP checks exercise extensionless deep URLs, legal pages, correct crawler MIME types, missing routes/assets, and alias redirects with a path and query.

## Verified results

- Locked dependency installation and production static export completed on Node 22.13.0 with the above compatibility flags.
- Export verifier and Netlify Dev HTTP checks passed for all nine routes.
- Browser checks confirmed both new case-study headings fit at 390px width without horizontal overflow.
- Clicking Curative's related-project link updated Collage Creator's title, description, canonical, Open Graph URL, and application JSON-LD, leaving one instance of each.
- Browser error logs were empty during the checked flow.
- React review: static metadata/schema is derived from route configuration, sibling lists have stable keys, links use the Next 12 anchor-child pattern, image alternatives are explicit, and new navigation has a visible keyboard focus style. Existing styled-components architecture is retained.

The existing dependency tree emits peer-dependency/outdated Browserslist warnings; an old grpc package in the unrelated functions workspace reports a native-build warning. These did not prevent the web build or checks. No dependency versions were changed.

## Visual evidence

| View | Screenshot |
| --- | --- |
| Ultrasound desktop | [Screenshot](screenshots/ultrasound-desktop.jpg) |
| Ultrasound mobile | [Screenshot](screenshots/ultrasound-mobile.jpg) |
| Curative desktop | [Screenshot](screenshots/curative-desktop.jpg) |
| Curative mobile | [Screenshot](screenshots/curative-mobile.jpg) |
| Related-project navigation | [Screenshot](screenshots/related-projects.jpg) |

Social preview PNGs and editable SVG sources are in assets/social. Their URLs are configured in web/src/seo/site.json and copied with the existing asset pipeline.

## After deployment

Netlify Dev confirms the configured domain rules go directly to the final HTTPS non-www URL and preserve the path and query. Netlify's production HTTPS enforcement can run before those rules, so the final production hop count requires an edge check after merge. Do not disable HTTPS to remove a harmless extra hop.

Check the live sitemap/robots MIME types, random-route 404s, and deep URLs; submit the sitemap in Search Console and run a fresh Ahrefs crawl. Organization/Product classifier warnings and expected redirect notices may remain even with correct content modeling. Application schema here does not claim Google software-app rich-result eligibility because unverified pricing and review data are omitted.

## Deployment runtime compatibility

The initial PR preview failed during dependency installation because the old `.nvmrc` selected Node 17.3.0, which rejects `--no-experimental-fetch` in `NODE_OPTIONS`. That stopped npm/Corepack and produced three failed Netlify checks for the same deployment. Both web build runtime pins now select Node 22, matching the major version used for verification; the separate Firebase functions runtime pin is unchanged.
