# Jonathan Febraio — Portfolio V3

An evidence-backed, English-first software engineering portfolio built around one idea: **software that moves between layers**.

The experience presents Jonathan's professional work separately from independent products, then traces how product decisions connect to web, mobile, backend, AI, data, quality, and delivery. Every project claim has a documented evidence boundary; private client data and unverified metrics are intentionally excluded.

## Live site

<https://jraamos.github.io/Portifolio-v2/>

Selected case studies have stable, refresh-safe routes such as:

- `/work/magventure-platform/`
- `/work/meu-auto-crm/`
- `/work/febraio-tech/`
- `/work/crypto-ai/`
- `/work/time-bubble/`

## Experience architecture

- React 19, TypeScript, and Vite 8.
- Motion for React with one shared motion language and complete reduced-motion behavior.
- BrowserRouter with generated static route shells for GitHub Pages deep links.
- English by default, complete Portuguese copy, and locally persisted language preference.
- Self-hosted Manrope and IBM Plex Mono fonts.
- AVIF/WebP project and portrait assets with PNG fallbacks.
- Per-route title, description, canonical, Open Graph, and Twitter metadata.
- `Person` and `WebSite` structured data, sitemap, and robots policy.

## Local development

Requirements: Node.js and npm.

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
npm audit
```

`npm run build` creates the production bundle and generates static HTML shells for every `/work/:slug/` route plus the GitHub Pages `404.html` fallback.

`npm run preview:pages` serves the built output under `/Portifolio-v2/`, matching the public GitHub Pages path instead of Vite's root-only preview behavior.

## Portfolio V3 documentation

The research and validation record lives in [`docs/portfolio-v3`](./docs/portfolio-v3):

- V2 audit and reference research;
- professional-work inventory and privacy review;
- three brand directions and the chosen visual thesis;
- information architecture, content matrix, and motion system;
- responsive visual QA and performance results;
- final implementation and publication report.

## Content and privacy rules

- Professional projects describe verified contribution, not sole authorship.
- Private screens, credentials, internal URLs, customer records, provider payloads, prompts, and commercial metrics are not published.
- “Verified in source,” “tested locally,” “publicly accessible,” and “externally validated” remain separate claims.
- Anajustra is not presented because no auditable local evidence was found during the V3 inventory.
- Crypto AI is a read-only/simulation research system, not a trading bot.
- TimeBubble's cross-app overlay is Android-specific.
- Manual dos Achados does not claim backend automations absent from the audited checkout.

## Deployment

`.github/workflows/pages.yml` installs dependencies, verifies the project, builds the static route shells, and publishes `dist/` to GitHub Pages on pushes to `main`.
