# Portfolio V3 — Performance Report

Measurement date: 2026-08-30

Build: optimized production output served under `/Portifolio-v2/` with compression enabled

Method: Lighthouse 13.4.1 local lab runs, plus production-bundle inspection

## Lighthouse results

| Profile | Performance | Accessibility | Best practices | SEO |   FCP |   LCP |   CLS |   TBT | Speed Index |
| ------- | ----------: | ------------: | -------------: | --: | ----: | ----: | ----: | ----: | ----------: |
| Mobile  |          98 |           100 |            100 | 100 | 1.8 s | 2.0 s | 0.004 | 10 ms |       1.8 s |
| Desktop |         100 |           100 |            100 | 100 | 0.4 s | 0.4 s | 0.003 |  0 ms |       0.5 s |

Transferred resources in the mobile lab fixture were approximately `172 KiB`.

## Budget result

- Performance target `>= 90`: passed on mobile and desktop.
- Accessibility, Best Practices, and SEO target `>= 95`: passed.
- LCP target `< 2.5 s`: passed in both lab profiles.
- CLS target `< 0.1`: passed with substantial margin.
- TBT remained near zero in the measured runs.

INP is a field responsiveness metric and is not available from a one-page Lighthouse lab trace. This report therefore does **not** claim an INP result. TBT is recorded as a laboratory diagnostic, not presented as an INP substitute. Real-user monitoring would be required for a production INP assessment.

## Performance decisions

- Replaced the large remote-font and PNG-heavy path with bundled fonts and AVIF/WebP sources plus PNG fallbacks.
- Gave images explicit dimensions and responsive sizing to reserve layout space.
- Used SVG and CSS for the execution trace instead of adding a WebGL runtime.
- Standardized animation on Motion for React and disabled non-essential motion when the user requests reduced motion.
- Kept the hero headline visible before animation so the LCP element does not wait for an opacity sequence.
- Generated static HTML shells for all case routes, allowing meaningful titles and descriptions before hydration.
- Served the local audit fixture with the same `/Portifolio-v2/` path shape and compressed transfer behavior expected from GitHub Pages.

## Reproduction

```bash
npm ci
npm run build
npm run preview:pages
```

Then run Lighthouse against:

```text
http://127.0.0.1:4173/Portifolio-v2/
```

The ignored raw reports are generated as `docs/portfolio-v3/lighthouse-mobile.json` and `docs/portfolio-v3/lighthouse-desktop.json`; this checked-in summary is the stable review artifact.

## Interpretation limits

- Lighthouse is controlled lab evidence, not real-user field data.
- Network, hardware, browser version, cache state, and GitHub Pages edge behavior can change public measurements.
- A successful local run does not prove that every external project link or third-party service remains available.
