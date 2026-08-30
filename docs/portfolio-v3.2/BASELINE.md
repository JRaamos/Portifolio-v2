# Portfolio V3.2 — Baseline

Captured on 2026-08-30 before V3.2 brand and interaction changes.

## Repository state

- Published reference commit: `95f78a3b03dec27e82a8c076bbcf4dedb409bf63`.
- Local V3.1 evidence/motion improvement frozen separately as: `240711c`.
- Branch: `main`.
- The published site still showed the older `JF + line` header when this baseline was captured.
- The local baseline already included improved product galleries, selected public repositories and WhatsApp contact.

## Visual evidence

| Surface | Desktop | Mobile |
| --- | --- | --- |
| Local V3.1 | [1440 × 900](../../artifacts/v3.2/baseline/local-desktop-1440x900.png) | [390 × 844](../../artifacts/v3.2/baseline/local-mobile-390x844.png) |
| Published `95f78a3` | [1440 × 900](../../artifacts/v3.2/baseline/published-desktop-1440x900.png) | [390 × 844](../../artifacts/v3.2/baseline/published-mobile-390x844.png) |

## Automated verification

- `npm run lint`: passed.
- `npm test`: 7 tests passed across 2 files.
- `npm run build`: passed; Vite transformed 56 modules.
- Production JS: 438.61 kB raw / 151.34 kB gzip.
- Production CSS: 43.47 kB raw / 12.07 kB gzip.
- Public privacy check: 0 restricted client identities found.
- `npm run test:e2e`: 8 Playwright tests passed.
- E2E viewports: 390 × 844, 430 × 932, 768 × 1024, 1366 × 768, 1440 × 900 and 1920 × 1080.
- `npm audit --omit=dev --audit-level=high`: 0 vulnerabilities.

## Lighthouse baseline

Measured against the built GitHub Pages fixture at `/Portifolio-v2/`, not the Vite development server.

| Metric | Desktop | Mobile |
| --- | ---: | ---: |
| Performance | 100 | 97 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| FCP | 403 ms | 1,802 ms |
| LCP | 485 ms | 2,253 ms |
| TBT | 0 ms | 86 ms |
| CLS | 0 | 0 |
| Transfer weight | 205,678 bytes | 205,678 bytes |

Raw reports:

- [Desktop Lighthouse JSON](../../artifacts/v3.2/baseline/lighthouse-desktop.json)
- [Mobile Lighthouse JSON](../../artifacts/v3.2/baseline/lighthouse-mobile.json)

## Baseline conclusions

1. Content hierarchy, privacy model, route structure and architecture storytelling are already strong and must not be rebuilt.
2. The header is visually competent but behaves as one fixed state and does not establish a memorable identity.
3. The current logo reads as a compact monogram inside a generic container rather than a distinct software-system mark.
4. Performance leaves little justification for WebGL or a large animation dependency. V3.2 should use a bounded Canvas 2D field and retain a mobile score above 90.
