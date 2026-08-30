import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const contentPath = resolve(projectRoot, 'src/content/portfolio.ts');
const distPath = resolve(projectRoot, 'dist');
const rootUrl = 'https://jraamos.github.io/Portifolio-v2/';

const metadata = {
  'learning-intelligence-platform': {
    title: 'Learning & Intelligence Platform — Engineering Case · Jonathan Febraio',
    description:
      'An anonymized engineering case across web, mobile, backend, search, data services and delivery safeguards.',
  },
  'automotive-crm-platform': {
    title: 'Automotive Marketplace and CRM Ecosystem — Engineering Case · Jonathan Febraio',
    description:
      'An anonymized automotive and CRM case spanning web, mobile, APIs, provider boundaries and operational workflows.',
  },
  'operations-platform': {
    title: 'Multi-Surface Operations Platform — Engineering Case · Jonathan Febraio',
    description:
      'An anonymized operations-platform case across administration, point of sale, self-service mobile and TypeScript services.',
  },
  'febraio-tech': {
    title: 'FebraioTech — Commerce Architecture · Jonathan Febraio',
    description:
      'A commerce system where inventory, credit, orders and delivery rules remain explicit in the backend.',
    image: 'projects/febraio-tech.png',
  },
  'manual-dos-achados': {
    title: 'Manual dos Achados — Editorial Platform · Jonathan Febraio',
    description:
      'A reusable editorial platform for structured rankings, comparisons and search-oriented content.',
    image: 'projects/manual-dos-achados.png',
  },
  'crypto-ai': {
    title: 'Crypto AI — Bounded AI Research · Jonathan Febraio',
    description:
      'A read-only research system where deterministic analysis remains authoritative and AI operates inside a review boundary.',
    image: 'projects/crypto-ai.png',
  },
  buildbalance: {
    title: 'BuildBalance — Financial Domain Architecture · Jonathan Febraio',
    description:
      'Server-authoritative financial calculations, project authorization and auditable domain events.',
    image: 'projects/buildbalance.png',
  },
};

function replaceMeta(html, slug) {
  const item = metadata[slug] ?? {
    title: 'Software Engineering Case Study · Jonathan Febraio',
    description: 'Evidence-backed software engineering case study.',
  };
  const canonical = `${rootUrl}work/${slug}/`;
  const image = `${rootUrl}${item.image ?? 'og-cover.png'}`;

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${item.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${item.description}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${item.title}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${item.description}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${image}" />`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${item.title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${item.description}" />`,
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${image}" />`,
    );
}

const [source, indexHtml] = await Promise.all([
  readFile(contentPath, 'utf8'),
  readFile(resolve(distPath, 'index.html'), 'utf8'),
]);

const slugs = [...source.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);

await Promise.all(
  slugs.map(async (slug) => {
    const routeDirectory = resolve(distPath, 'work', slug);
    await mkdir(routeDirectory, { recursive: true });
    await writeFile(resolve(routeDirectory, 'index.html'), replaceMeta(indexHtml, slug));
  }),
);

await writeFile(resolve(distPath, '404.html'), indexHtml);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${rootUrl}</loc><priority>1.0</priority></url>
${slugs.map((slug) => `  <url><loc>${rootUrl}work/${slug}/</loc><priority>0.8</priority></url>`).join('\n')}
</urlset>
`;

await writeFile(resolve(distPath, 'sitemap.xml'), sitemap);
