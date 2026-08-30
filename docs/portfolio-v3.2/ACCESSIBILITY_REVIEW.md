# Portfolio V3.2 — accessibility review

## Result

- Lighthouse accessibility: 100 desktop and 100 mobile.
- axe-core WCAG 2 A/AA/2.1 AA scan: zero automatically detectable violations.
- Required responsive E2E matrix: no horizontal overflow and no visible interactive target below 44 × 44 px on 390, 430, 768, 1366, 1440 or 1920 px widths.

## Brand and header

- The home link has the explicit label “Jonathan Febraio — home”.
- The inline mark has the accessible name “JF Signal”; static exported SVGs contain titles.
- Active navigation is exposed with `aria-current="location"`, not color alone.
- The desktop header uses semantic `header` and `nav` elements.
- Language controls retain pressed state.
- Focus remains visible on links, tabs and menu controls.

## Mobile menu

- The menu control exposes `aria-expanded` and `aria-controls`.
- Closed menu content is removed from the DOM, so invisible routes cannot receive focus.
- Opening locks body scroll and focuses the first route.
- Tab/Shift+Tab are trapped inside the panel.
- Escape closes the panel and returns focus to the trigger.
- Selecting any route closes the panel.
- Safe-area padding is applied on all four edges.

These behaviors are covered by unit and Playwright tests.

## System Lab and Canvas

- Mode controls follow the tab pattern with `role="tablist"`, one selected tab, roving `tabIndex`, arrow keys, Home and End.
- Each active mode owns a labelled tab panel.
- The technical path and technology list exist in DOM for every selected mode.
- Both Canvas fields are `aria-hidden="true"`; they never contain unique information.
- No custom cursor is installed.

## Motion

- Reduced motion skips logo drawing, particles, pointer listeners, long morphing and all Canvas frame loops.
- The final logo and selected architecture render immediately.
- Content visibility is independent of GSAP or Canvas execution.
- Coarse pointers receive one short automatic demonstration rather than a simulated cursor.

## Remaining manual coverage

Chromium keyboard behavior and automated semantics were verified. A separate Safari + VoiceOver session was not available in this environment, so screen-reader pronunciation and Safari tab-favicon appearance remain manual cross-browser checks rather than claimed completion.
