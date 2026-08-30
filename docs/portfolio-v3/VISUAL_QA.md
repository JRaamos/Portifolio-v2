# Portfolio V3 — Visual QA

Validation date: 2026-08-30

Scope: home, mobile navigation, professional work, architecture map, case routes, localization, accessibility, and responsive behavior

## Outcome

The final V3 composition was rendered and inspected as a product experience rather than accepted from source review alone. The selected **Execution Trace** direction remains coherent from the hero through the system map and case studies: graphite and bone surfaces, one functional signal color, large editorial typography, code-native diagrams, and no structural glassmorphism or card wall.

The production fixture was also exercised automatically at `390`, `430`, `768`, `1366`, `1440`, and `1920` CSS pixels. No tested viewport has horizontal document overflow.

## Final visual evidence

| Surface           | Evidence                                                                       | What was checked                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Mobile hero       | [390 px hero](../../public/qa/home-390-hero.png)                               | First-screen hierarchy, readable copy, CTA wrapping, trace crop, and safe horizontal bounds                           |
| Mobile navigation | [390 px menu](../../public/qa/home-390-menu.png)                               | Full-screen navigation, language controls, close affordance, focusable links, and 44 px targets                       |
| Desktop hero      | [1440 px hero](../../public/qa/home-1440-hero.png)                             | Name/positioning hierarchy, signal path, proof labels, CTA prominence, and first-fold balance                         |
| Wide desktop hero | [1920 px hero](../../public/qa/home-1920-hero.png)                             | Maximum requested width, controlled line length, grid expansion, and absence of over-stretching                       |
| Professional work | [Professional chapter](../../public/qa/home-1440-professional.png)             | Professional work precedes independent products, contribution language, evidence labels, and confidentiality boundary |
| System map        | [Architecture map](../../public/qa/home-1440-system.png)                       | Sticky composition, semantic fallback, readable layer labels, and stable inactive state                               |
| Active system map | [Activated architecture map](../../public/qa/home-1440-system-active.png)      | Scroll-linked state change, active-layer contrast, and explanatory content alignment                                  |
| Mobile case       | [Magventure case at 390 px](../../public/qa/case-magventure-390.png)           | Direct route, back navigation, chapter order, architecture labels, and mobile text measure                            |
| Desktop case      | [Magventure case at 1440 px](../../public/qa/case-magventure-1440-settled.png) | Settled post-transition state, content rhythm, sanitized diagram, evidence/limits, and next-work path                 |

The screenshots are QA artifacts from the local portfolio itself. Professional interfaces were not copied into them; the professional cases use sanitized, conceptual system diagrams.

## Interaction and accessibility checks

- English is the default language; switching to Portuguese updates the content, document language, title, metadata, and case navigation, then survives navigation and refresh.
- Every external link opens with `noopener`/`noreferrer` protection.
- Every visible anchor and button measured at least `44 × 44` CSS pixels on the mobile fixture.
- The mobile menu exposes expanded state and closes after navigation.
- Case routes work when entered directly and after refresh under the GitHub Pages subpath.
- Reduced-motion mode exposes all content and collapses decorative animation and transition durations.
- Automated axe analysis found no WCAG 2 A, AA, or 2.1 AA violation on the tested home page.
- Keyboard focus remains visibly styled; semantic headings, regions, navigation labels, and text alternatives were preserved.

## Reviewer perspectives

### Recruiter

The first fold now answers role, location/availability context, engineering range, and next action quickly. Professional work appears before independent products, with Magventure and Meu Auto + CRM carrying the strongest evidence. Claims avoid invented adoption, revenue, scale, or performance metrics.

### Engineering lead

Cases expose system boundaries, role, decisions, verification level, tradeoffs, and proof gaps. The capability map connects Web, Mobile, Backend, Data, AI, and Delivery to named work instead of displaying a logo wall. Private client implementation is explained through sanitized diagrams rather than internal screens or endpoints.

### Product leader or founder

The narrative emphasizes end-to-end ownership: framing a requirement, shaping product states, connecting services, constraining AI, and proving delivery. Independent products remain live evidence of initiative, but no longer displace professional work.

## Corrections made during rendered QA

- Repositioned the AI node in the system visualization after detecting edge clipping.
- Increased small controls and links to the 44 px mobile target floor.
- Darkened signal-colored text on light backgrounds to satisfy text contrast.
- Removed entrance opacity from the LCP headline so its accessible contrast is stable at the first analysis frame.
- Added a static route title and route-specific HTML shells so deep links have meaningful pre-hydration metadata.
- Kept Anajustra out of the published experience because no auditable local evidence was available.
- Corrected product boundaries: Crypto AI is not a trading bot, TimeBubble's overlay is Android-specific, and Manual dos Achados does not claim unaudited backend automation.

## Remaining limits

- Automated accessibility checks cannot replace assistive-technology testing by regular users.
- Professional diagrams are intentionally conceptual and do not document private production topology.
- Lab screenshots and tests prove this build and environment; they do not establish ongoing availability of third-party product links.
