# Portfolio V3.2 — performance report

All measurements use the built GitHub Pages fixture, not the Vite development server. Baseline is commit `240711c`; final is the V3.2 working tree after the Canvas DPR cap and production build.

## Lighthouse

| Metric | Baseline desktop | V3.2 desktop | Baseline mobile | V3.2 mobile |
| --- | ---: | ---: | ---: | ---: |
| Performance | 100 | 100 | 97 | 98 |
| Accessibility | 100 | 100 | 100 | 100 |
| Best Practices | 100 | 100 | 100 | 100 |
| SEO | 100 | 100 | 100 | 100 |
| FCP | 403 ms | 443 ms | 1,802 ms | 1,803 ms |
| LCP | 485 ms | 505 ms | 2,253 ms | 2,157 ms |
| TBT | 0 ms | 0 ms | 86 ms | 43 ms |
| CLS | 0 | 0 | 0 | 0 |
| Transfer | 205,678 B | 203,493 B | 205,678 B | 203,493 B |

V3.2 remains above every target. Mobile LCP improved by 96 ms and TBT fell by 43 ms; desktop keeps perfect category scores with a 20 ms LCP increase.

## Bundle

| Asset | Baseline | V3.2 | Difference |
| --- | ---: | ---: | ---: |
| JavaScript raw | 438.61 kB | 435.31 kB | −3.30 kB |
| JavaScript gzip | 151.34 kB | 147.68 kB | −3.66 kB |
| CSS raw | 43.47 kB | 57.24 kB | +13.77 kB |
| CSS gzip | 12.07 kB | 14.61 kB | +2.54 kB |

Removing the hero MotionPath implementation offsets the new Canvas engine in JavaScript. The brand, header and lab states add 2.54 kB compressed CSS.

## Three-second pointer benchmark

The benchmark moves the pointer across the active hero field for three seconds at 1440 × 900 and reads Chrome Performance metrics. Baseline targets the previous ambient CSS field; V3.2 targets the Canvas field. The headless runner has an approximately 75 Hz cadence, so FPS is comparative rather than a physical 60 Hz claim.

| Metric | Baseline ambient field | V3.2 Signal Field |
| --- | ---: | ---: |
| Sampled FPS | 72.76 | 74.84 |
| Over-budget intervals | 24 | 25 |
| Maximum frame interval | 27.1 ms | 27.2 ms |
| Long tasks | 0 | 0 |
| Main-thread task time | 185.2 ms / 3 s | 222.1 ms / 3 s |
| Script time | 17.2 ms / 3 s | 40.7 ms / 3 s |
| Layout time | 2.3 ms / 3 s | 0 ms / 3 s |
| Recalculate style | 31.2 ms / 3 s | 28.4 ms / 3 s |
| Used JS heap at end | 6.41 MB | 6.31 MB |

The real Canvas interaction costs about 36.9 ms more main-thread task time over the three-second stress path (about 1.2 percentage points of one core), while preserving cadence, producing no long task and eliminating layout work. This is a measured cost, not described as free.

## Runtime limits

- Fixed particle pools: 72 hero, 96 lab, 44 coarse pointer.
- DPR: 1.5 hero, 1.75 lab, 1.25 coarse pointer.
- No React state per frame.
- No Three.js, WebGL shader bundle or new runtime dependency.
- Resize, intersection and visibility pause gates are tested.

## INP boundary

Local Lighthouse does not provide field INP. The interaction benchmark, zero long tasks, Playwright click/keyboard checks and TBT are the available lab evidence. Real-user INP requires production traffic and is not invented here.

Raw evidence:

- `artifacts/v3.2/baseline/lighthouse-desktop.json`
- `artifacts/v3.2/baseline/lighthouse-mobile.json`
- `artifacts/v3.2/baseline/motion-performance.json`
- `artifacts/v3.2/final/lighthouse-desktop.json`
- `artifacts/v3.2/final/lighthouse-mobile.json`
- `artifacts/v3.2/final/motion-performance.json`
