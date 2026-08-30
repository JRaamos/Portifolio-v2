# Jonathan Febraio — Portfolio V3.1

An English-first software engineering portfolio designed as a working system rather than a résumé page. The experience follows product decisions through web, mobile, API, backend, AI, data, integrations and delivery.

## Live site

<https://jraamos.github.io/Portifolio-v2/>

Selected, refresh-safe case routes include:

- `/work/learning-intelligence-platform/`
- `/work/automotive-crm-platform/`
- `/work/operations-platform/`
- `/work/febraio-tech/`
- `/work/manual-dos-achados/`
- `/work/crypto-ai/`
- `/work/buildbalance/`

The three professional cases are intentionally anonymized. Independent products link to public source or live surfaces only when those links are supported by the evidence model.

## Experience architecture

- React 19, TypeScript and Vite 8.
- GSAP, ScrollTrigger and MotionPath as one motion system.
- A hero request path, a pinned professional architecture morph, interactive engineering modes and evolving case-study diagrams.
- English by default with complete Portuguese copy and a locally persisted preference.
- BrowserRouter plus generated static shells for GitHub Pages deep links.
- Self-hosted Manrope and IBM Plex Mono fonts.
- AVIF/WebP assets with PNG fallbacks.
- Per-route title, description, canonical, Open Graph and Twitter metadata.
- Reduced-motion behavior and automated privacy, unit, responsive and accessibility checks.

## Local development

Requirements: Node.js and npm.

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm test
npm run build
npm run test:e2e
npm audit
```

`npm run build` generates the production bundle, creates static HTML shells for every selected case, and fails if a restricted professional identity is found anywhere in `dist/`.

`npm run preview:pages` serves the built output under `/Portifolio-v2/`, matching the GitHub Pages path.

## Content and privacy rules

- Professional projects describe verified contribution, never implied sole authorship.
- Client identities, private screens, credentials, internal URLs, customer records, provider payloads, prompts and commercial metrics are not published.
- “Verified in source,” “tested locally,” “publicly accessible” and “externally validated” remain separate claims.
- Crypto AI is a read-only research/simulation system, not a trading bot.
- Product claims are limited to the evidence recorded during the portfolio audit.

## Deployment

`.github/workflows/pages.yml` installs dependencies, verifies the project, builds the static route shells and publishes `dist/` to GitHub Pages on pushes to `main`.
