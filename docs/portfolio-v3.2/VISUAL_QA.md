# Portfolio V3.2 — visual QA

## Required viewport matrix

Hero/header screenshots were captured and inspected at:

- 390 × 844
- 430 × 932
- 768 × 1024
- 1366 × 768
- 1440 × 900
- 1920 × 1080

The corresponding Playwright test measured document width at each breakpoint and found no horizontal overflow.

## Reviewed states

- Header at top: full lockup on desktop/tablet, mark-only at narrow mobile.
- Header after scroll: compact lockup, structural border and active signal.
- Logo normal and hover: route remains white; the local blue signal appears without turning the mark into a gradient.
- Mobile menu: safe-area layout, numbered routes, visible focus and contact route.
- Hero initial and pointer state: copy remains fixed; only nearby graph routes/nodes respond.
- System Lab WEB and AI: node count, position, routes, copy and technologies all change.
- Case header: compact JF Signal, contextual Back to work, language and contact.
- Reduced motion: complete logo and architecture shown without path draw, particles or hidden content.

## Motion recordings

- `01-logo-intro.webm`
- `02-logo-hover.webm`
- `03-header-scroll.webm`
- `04-signal-field-pointer.webm`
- `05-system-lab-modes.webm`

All five outputs are non-empty WebM files generated from the built site. They are stored in `artifacts/v3.2/visual-qa/motion-recordings/`.

## Visual observations

- The mark keeps its J curve, spine and two F exits at 16–64 px in the comparison sheet.
- The 390 px hero retains readable copy and target sizes; architecture is deliberately lower contrast behind it.
- The 768 px lockup keeps the full professional title without colliding with language/menu controls.
- At 1920 px the architecture fills the right system area without stretching the text column.
- The System Lab gives the Canvas more area than its copy and keeps labels legible in both horizontal and branched scenes.
- No glow is applied to the header container; signal glow remains local to route packets and active nodes.

## Evidence directories

- `artifacts/v3.2/brand/`
- `artifacts/v3.2/header/`
- `artifacts/v3.2/signal-field/`
- `artifacts/v3.2/visual-qa/screenshots/`
- `artifacts/v3.2/visual-qa/motion-recordings/`

## Browser boundary

Rendered review covered the in-app Chromium browser and Playwright Chromium. Exported dark, light, monochrome and favicon assets were inspected, but a native Safari tab and printed physical sample were not available; those remain explicit manual brand checks.
