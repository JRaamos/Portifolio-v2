# Jonathan Febraio — Selected Engineering Work

Evidence-based engineering portfolio for [Jonathan Febraio](https://www.linkedin.com/in/jonathan-febraio/), a Full Stack Software Engineer working primarily with TypeScript, Node.js, React, and React Native.

The portfolio presents a focused set of real products and the engineering decisions behind them. It intentionally excludes unverified metrics, fictional employers, skill percentages, and claims that cannot be traced to code, documentation, tests, deployments, or working product surfaces.

## Selected work

- **FebraioTech:** live Next.js and Medusa v2 commerce product.
- **Manual dos Achados:** live editorial comparison platform with Next.js and Strapi workflows.
- **Crypto AI:** private read-only market-research copilot with deterministic analysis and an explicit AI review boundary.
- **BuildBalance:** NestJS and React financial-management system with server-authoritative calculations and project authorization.
- **Converse com Amor:** collaborative Next.js and Supabase application with Realtime, row-level security, and multi-user verification.

## Architecture

- React 19 and TypeScript application built with Vite.
- `styled-components` design system with centralized tokens and responsive layouts.
- English-first static content designed for international recruiting and technical review.
- Local, versioned screenshots replace decorative or fabricated project imagery.
- Accessible case-study dialog with explicit evidence, limitations, and external links.
- Static deployment through GitHub Pages; no backend or analytics are required.

## Development

Requirements: Node.js and npm.

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

The production build is emitted to `dist/`. Open Graph metadata references the GitHub Pages deployment and a 1200 × 630 social preview.

## Content and privacy

- Private repositories are identified as private rather than linked.
- Screenshots use public pages or clearly labeled demonstration data.
- No client names, credentials, private endpoints, financial outcomes, user counts, or business metrics are published.
- X-Apps product and client details remain anonymized.

## Deployment

The workflow in `.github/workflows/pages.yml` builds and publishes the static site to GitHub Pages after changes reach `main`.

Expected public URL: <https://jraamos.github.io/Portifolio-v2/>
