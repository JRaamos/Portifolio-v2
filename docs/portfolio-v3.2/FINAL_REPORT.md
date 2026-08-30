# Portfolio V3.2 — final delivery report

Reference before this phase: `240711c` (the completed V3.1 content and project-proof pass). V3.2 is a controlled brand, navigation and interaction evolution; the case structure, internationalization, privacy model and core professional narrative were preserved.

## 1. Chosen logo concept

Proposal A, **Signal Spine**, became the production mark. It is a compact continuous route: the lower-left input curves into a J, rises through a shared spine, and exits through two precise F branches. A small blue input segment is the only signal accent; the main route remains a strong single-colour silhouette.

The geometry is meaningful rather than decorative: input becomes processing, branching and delivery. That makes it consistent with Jonathan's positioning as a software engineer working across interfaces, APIs, backend, data and product delivery. It remains identifiable without animation, gradient or wordmark at 16, 24, 32, 48 and 64 px.

## 2. Alternatives reviewed and rejected

- **Proposal B — Routed Fork:** compact and architectural, but the J became ambiguous at favicon scale.
- **Proposal C — Open Relay:** expressive in motion, but its detached input read more like decoration than part of one unmistakable route.

All three were implemented as real SVGs and reviewed in dark/light contexts, multiple sizes, header placements and animated/static states. The evidence is in `artifacts/v3.2/brand/` and `prototypes/v3.2/brand-comparison.html`.

## 3. Header changes

`HeaderV32` replaces the placeholder-like V3.1 bar with three responsive states:

- **Top:** transparent 88 px composition with the full JF Signal lockup.
- **Scrolled:** compact lockup, controlled blur, structural divider and no generic floating pill.
- **Case study:** compact brand, contextual **Back to work**, language switch and contact action.

Desktop navigation uses one moving signal line/dot that follows hover and returns to the actual section tracked by `IntersectionObserver`. Mobile uses an accessible full-screen system index with 44 px targets, focus trap, Escape close, body scroll lock, safe-area padding and focus return. The CTA remains quiet and routes to contact.

## 4. Signal Field architecture

The new interaction is a bespoke Canvas 2D system split across `src/engine/signal/` and a lifecycle-managed React wrapper. It uses named nodes and connections, local pointer falloff, velocity smoothing, exponential damping, routed packets, bounded node bursts and fixed reusable particle pools. It does not update React state per frame.

Runtime limits are deliberate:

- 72 particles in the hero, 96 in System Lab and 44 for coarse-pointer demos;
- DPR caps of 1.5, 1.75 and 1.25 respectively;
- `ResizeObserver`, `IntersectionObserver`, `document.hidden` and unmount cleanup;
- a single 2.2-second demonstration for coarse pointers;
- immediate complete static state under reduced motion.

The hero reacts only on its architecture side. System Lab provides five real scene topologies — WEB, MOBILE, BACKEND, AI and PLATFORM — with changed nodes, routes, descriptions and evidence-based technologies. The Canvas is decorative and `aria-hidden`; equivalent information remains semantic DOM content.

## 5. Difference from the Remix reference

The official `remix-run/remix-website` implementation was inspected at commit `4a5d665` for interaction principles: local influence, smoothed velocity, damping, bounded frame time, reusable state, disposal and reduced-motion treatment.

No Remix code, shader, asset, path, colour system or identity was copied. JF Signal uses sparse named software-architecture routes in Canvas 2D instead of the reference's WebGL/GPGPU field. It also adds explicit intersection and tab-visibility pause gates, a coarse-pointer one-shot mode, semantic System Lab tabs and the portfolio's existing graphite/blue architectural language.

## 6. Brand and product assets

Production exports include:

- `public/brand/jf-signal.svg`
- `public/brand/jf-signal-light.svg`
- `public/brand/jf-signal-dark.svg`
- `public/brand/jf-signal-monochrome.svg`
- `public/brand/jf-signal-wordmark.svg`
- `public/favicon.svg`, 16 px, 32 px and Apple touch icons
- refreshed SVG, PNG, WebP and AVIF Open Graph covers

The React brand component supports `size`, `variant`, `animated`, `reducedMotion`, `showWordmark` and `compact`. Intro draw lasts 720 ms, hover replays the routed signal once, click compresses to 0.96, and reduced motion renders the finished mark immediately.

## 7. Principal files changed

- Brand and header: `src/components/v32/BrandMark.tsx`, `src/components/v32/HeaderV32.tsx`, brand exports and `index.html`.
- Interaction: `src/components/v32/SignalCanvas.tsx`, `InteractiveSystemLab.tsx`, `signalScenes.ts`, `src/engine/signal/*` and lifecycle hooks.
- Integration: V3.1 hero/home/case/not-found pages, `src/styles/v31.css`, tests and setup.
- Tooling: brand generation, motion measurement and visual-QA capture scripts plus package commands.
- Evidence: `artifacts/v3.2/` and the complete `docs/portfolio-v3.2/` report set.
- Removed as superseded: the old V3.1 header, engineering-modes component and obsolete `jf-mark.svg`; all remain recoverable in Git history.

## 8. Automated verification

Final local verification:

- ESLint: pass with zero warnings.
- Vitest: 3 files, 12 tests passed.
- Production build: pass; 63 modules; privacy scan found zero restricted identities.
- Playwright: 11/11 passed, including six required viewport widths, EN/PT persistence, deep case refresh, mobile focus/scroll behaviour, link safety, pointer response, active navigation, System Lab morphing, reduced motion, off-viewport pause, coarse-pointer settling and axe checks.
- Repeated CI-flake regression: localized keyboard case navigation passed 4/4 consecutive runs.
- axe WCAG A/AA: zero automatically detectable violations.
- `npm audit --omit=dev --audit-level=high`: zero vulnerabilities.

## 9. Performance before and after

All measurements used the built GitHub Pages fixture.

| Metric | Baseline desktop | V3.2 desktop | Baseline mobile | V3.2 mobile |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse Performance | 100 | 100 | 97 | 98 |
| Accessibility | 100 | 100 | 100 | 100 |
| Best Practices | 100 | 100 | 100 | 100 |
| SEO | 100 | 100 | 100 | 100 |
| LCP | 485 ms | 505 ms | 2,253 ms | 2,157 ms |
| TBT | 0 ms | 0 ms | 86 ms | 43 ms |
| CLS | 0 | 0 | 0 | 0 |
| Transfer | 205,678 B | 203,493 B | 205,678 B | 203,493 B |

JavaScript fell from 151.34 to 147.69 kB gzip. CSS rose from 12.07 to 14.61 kB gzip for the new brand/header/lab states. In the three-second pointer stress benchmark, cadence moved from 72.76 to 74.84 sampled FPS, no long tasks appeared, layout work fell to zero and the Canvas added 36.9 ms of main-thread task time over three seconds. This measured cost is approximately 1.2 percentage points of one core, not presented as free.

## 10. Visual evidence

The required 390×844, 430×932, 768×1024, 1366×768, 1440×900 and 1920×1080 outputs were captured and inspected. Additional states cover header scroll, logo normal/hover, mobile menu, pointer response, WEB/AI System Lab, case header and reduced motion.

Five real WebM recordings exist:

- `01-logo-intro.webm`
- `02-logo-hover.webm`
- `03-header-scroll.webm`
- `04-signal-field-pointer.webm`
- `05-system-lab-modes.webm`

## 11. Publication evidence

- Site: <https://jraamos.github.io/Portifolio-v2/>
- Deep case route: <https://jraamos.github.io/Portifolio-v2/work/crypto-ai/>
- Repository: <https://github.com/JRaamos/Portifolio-v2>
- Validated V3.2 code workflow: <https://github.com/JRaamos/Portifolio-v2/actions/runs/33340627470> — build and deploy completed successfully for `6888e4d`.

Public validation returned HTTP 200 for the home page, the direct Crypto AI case route, the JF Signal SVG, favicon and Open Graph image. Both HTML entry points served `index-C9ZZrDI3.js` and `index-BTnr2JuX.css`. Rendered desktop and 390 px mobile review confirmed the JF Signal header and two Canvas instances; the public System navigation activated the scrolled header and AI tab, whose topology/copy changed to **Intelligence stays inside a bounded role.** The direct case route rendered the contextual header and preserved its page title. No production browser errors were recorded in the reviewed home/mobile/case tabs.

## 12. Real limitations

- Native Safari, VoiceOver and physical print review were not available in the current environment; Chromium, Playwright Chromium, dark/light assets and screenshots were verified instead.
- Lab tools cannot supply field INP without real production traffic. TBT, pointer timing, zero-long-task evidence and functional interaction checks are reported; a synthetic INP number is not invented.
- Canvas is progressive enhancement. Reduced-motion and unavailable-interaction cases intentionally receive the complete semantic/static system rather than equivalent motion.

## 13. Organized commit series

- `c30906c` — `feat(brand): create JF Signal identity system`
- `0a82018` — `feat(header): rebuild portfolio navigation`
- `8381d67` — `feat(motion): add interactive Signal Field`
- `05209ca` — `feat(system): add interactive engineering lab`
- `208474d` — `test(portfolio): cover brand and pointer interactions`
- `543c3f0` — `perf(motion): add lifecycle metrics and QA capture`
- `b133e40` — `docs(portfolio): record v3.2 research and visual QA`
- `6888e4d` — `test(portfolio): stabilize localized case navigation`

This report is the final documentation-only commit. Its Pages run republishes the same verified application assets; the resulting commit and workflow are reported in the delivery response because a commit cannot embed its own final SHA.
