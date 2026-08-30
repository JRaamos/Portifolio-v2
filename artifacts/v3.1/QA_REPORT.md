# Portfolio V3.1 — QA and publication evidence

Date: 2026-08-30

## Outcome

The portfolio now behaves as one software system: a request moves through the hero, the same architectural language morphs across three anonymized professional domains, engineering-mode controls reorganize real nodes and connections, and each case evolves its diagram while the narrative advances.

Direction A — **Signal Grid** — was selected after comparing three 1440 × 900 prototypes. It combines a deep graphite canvas, restrained cool signal color, strong type, architectural lines and a single connected motion language.

## Public privacy gate

- The three professional cases use functional, domain-level names.
- The previous evidence documents were copied to a private local archive before being removed from the public repository tree.
- The production build scans every generated file, including route HTML, JavaScript, metadata, sitemap and copied assets.
- Result: **0 restricted client identities found in `dist/`**.
- Private screens, records, credentials, endpoints, provider payloads and commercial metrics are not published.

## Automated verification

| Check | Result |
| --- | --- |
| ESLint | Pass, zero warnings |
| Vitest | 7 / 7 passed |
| Playwright E2E | 6 / 6 passed |
| Viewports | 390, 430, 768, 1366, 1440 and 1920 px; no horizontal overflow |
| Accessibility | axe WCAG A / AA / 2.1 AA: zero detected violations |
| Reduced motion | Pass; content remains visible without long transitions |
| Static route refresh | Pass |
| Production build | Pass |
| Dependency audit | 0 vulnerabilities |
| Public privacy scan | Pass, zero occurrences |

## Lighthouse production-build results

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 97 | 100 | 100 | 100 | 2.2 s | 70 ms | 0 |
| Desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 ms | 0 |

These results were recorded against the locally served production build under the same `/Portifolio-v2/` base path used by GitHub Pages.

Raw reports:

- [Mobile Lighthouse](./lighthouse-mobile.json)
- [Desktop Lighthouse](./lighthouse-desktop.json)

## Motion recordings

- [Hero request path](./motion-recordings/01-hero-request-path.webm)
- [Professional architecture morph](./motion-recordings/02-professional-architecture-morph.webm)
- [Engineering modes](./motion-recordings/03-engineering-modes.webm)
- [Case architecture story](./motion-recordings/04-case-architecture-story.webm)

## Reviewed frames

- [Hero — initial state](./qa-frames/hero-start-1440.png)
- [Hero — delivery state](./qa-frames/hero-delivery-1440.png)
- [Professional domain 01](./qa-frames/professional-learning-1440.png)
- [Professional domain 02](./qa-frames/professional-automotive-1440.png)
- [Professional domain 03](./qa-frames/professional-operations-1440.png)
- [WEB mode](./qa-frames/mode-web-1440.png)
- [AI mode](./qa-frames/mode-ai-1440.png)
- [PLATFORM mode](./qa-frames/mode-platform-1440.png)
- [FebraioTech chapter](./qa-frames/product-febraio-tech-1440.png)
- [Case hero](./qa-frames/case-hero-1440.png)
- [Case system state](./qa-frames/case-system-1440.png)
- [Mobile hero](./qa-frames/hero-mobile-390.png)
- [Mobile menu](./qa-frames/menu-mobile-390.png)
- [Mobile professional story](./qa-frames/professional-mobile-390.png)

## Direct production routes

The home page and all seven selected case routes returned HTTP 200 from the production fixture, each with route-specific metadata:

- Learning & Intelligence Platform
- Automotive Marketplace & CRM Ecosystem
- Multi-Surface Operations Platform
- FebraioTech
- Manual dos Achados
- Crypto AI
- BuildBalance

## Visual review notes

- Hero: name, role and value proposition are readable in the first fold; the highlighted request reaches SHIPPED without decorative particles.
- Professional work: all three scenes have a stable reading interval, a matching architecture state and an active case link.
- Modes: WEB, MOBILE, BACKEND, AI and PLATFORM change node position, visibility, edge topology and supporting copy.
- Products: four priority products appear as large chapters with real project imagery and system flows, not a card grid.
- Cases: the sticky architecture progresses with Context, Contribution, System and Quality chapters.
- Mobile: the architecture becomes a short sticky progressive surface; navigation closes after selection and all visible interactive targets meet the 44 px target check.
