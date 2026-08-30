# Portfolio V3 — Information Architecture

Status: implementation blueprint based on the V2 source, a clean production build, the current GitHub Pages workflow, and verified product repositories as of 2026-08-30.

## 1. Architecture decision

Keep the portfolio as a static React application built by Vite, but replace the single-page/modal architecture with typed, route-addressable case studies. This preserves the existing GitHub Pages deployment while making the work linkable, testable, and understandable to recruiters and engineers.

The V3 must have two distinct content systems:

1. **Professional Work** — evidence-backed, privacy-reviewed work performed through X-Apps or another verified employer/client context.
2. **Independent Products** — products Jonathan owns or can safely present with direct repository/product evidence.

Professional and independent work must never be merged into the same visual list or described with ambiguous ownership.

Recommended implementation stack:

- React + TypeScript + Vite.
- `react-router-dom` for route state and stable case URLs.
- one motion dependency for the whole site; the motion review should choose and document it before implementation.
- `i18next`/`react-i18next` retained only if the content parity checks are automated; otherwise a small typed locale layer is preferable.
- Vitest + Testing Library for data, component, and accessibility contracts.
- Playwright for navigation, locale, responsive, reduced-motion, and deep-link verification.
- a post-build static-route generator for GitHub Pages route shells and route-specific metadata.

## 2. V2 baseline and migration risks

The current repository is clean and `npm run build` passes. The production bundle observed during this audit is one JavaScript file of approximately 328 kB (approximately 100 kB gzip), before any V3 motion or routing dependency is added.

| Area              | V2 state                                                | V3 consequence                                                                                      |
| ----------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Navigation        | Buttons scroll within one page                          | Add real URLs while preserving section navigation on the home route.                                |
| Cases             | A dialog renders every project                          | Move each case to `/work/:slug`; retain only a compact preview on the home route.                   |
| Localization      | Only `en-US` is registered                              | Add complete EN/PT resources and route parity; remove the unused three-language selector contract.  |
| Content           | One translation JSON mixes copy and case evidence       | Separate stable technical facts, locale copy, media, evidence, and privacy state.                   |
| Professional work | Only an anonymized X-Apps experience paragraph          | Add a separate professional-work section after inventory/privacy approval.                          |
| Testing           | No test files or test scripts                           | Add data-contract, component, and browser suites before the refactor is considered complete.        |
| SEO               | Root-only static metadata and `Person` JSON-LD          | Generate canonical/OG/schema for every indexable route and locale.                                  |
| GitHub Pages      | `base: './'`; no `404.html`                             | Use a repository-aware absolute base and generate deep-route fallbacks/static shells.               |
| Motion            | CSS transitions only                                    | Introduce one documented motion system and an explicit reduced-motion rendering path.               |
| Media             | PNGs only; hero and portrait exceed 1 MB each           | Produce AVIF/WebP variants, intrinsic dimensions, responsive sources, and deliberate preload rules. |
| Dependency policy | Several runtime packages use `latest` in `package.json` | Pin intentional versions so CI and local builds resolve the same architecture.                      |

Accessibility debt to resolve during migration:

- the project dialog closes on Escape but does not implement a complete focus trap, initial focus, focus return, or background inertness;
- menu and section buttons do not create shareable browser history;
- case content is inaccessible without opening a client-rendered dialog;
- the current mobile menu needs browser-level focus/order verification;
- external links should consistently announce their destination and new-window behavior where useful.

## 3. Route map

English is the default and canonical experience for a first visit. Portuguese has its own indexable route prefix rather than being only a client-side text toggle.

```text
/
├── #professional-work
├── #independent-products
├── #capabilities
├── #experience
├── #about
└── #contact

/work/
├── febraio-tech/
├── manual-dos-achados/
├── crypto-ai/
├── build-balance/
├── time-bubble/
├── converse-com-amor/
└── <approved-professional-slug>/

/pt/
├── #trabalho-profissional
├── #produtos-independentes
└── ...same information hierarchy...

/pt/work/
└── <same stable slugs as English>/

/404.html
```

Rules:

- Slugs remain stable and language-neutral; only the locale prefix changes.
- `/work/` can be a compact all-work index or redirect to the corresponding home section, but it must not become another generic card grid.
- Professional case slugs are added only after `PROFESSIONAL_WORK_INVENTORY.md` and `PRIVACY_REVIEW.md` mark them publishable.
- Unknown case slugs render a genuine not-found page with a route back to selected work.
- Every route must work by direct address, browser refresh, back/forward navigation, and GitHub Pages deployment.

## 4. Home-page narrative

The home page is not a compressed resume. It is a guided explanation of how Jonathan turns a product need into a shipped system.

### 4.1 Hero — system builder

Purpose: establish name, role, location/availability, and the end-to-end proposition in one viewport.

Required information:

- Jonathan Febraio.
- Software Engineer — Full Stack & AI.
- Brazil, UTC−3; open to remote international roles.
- a concise end-to-end promise spanning product, web, backend, mobile, data/AI, testing, and delivery.
- one primary CTA to professional work and one quiet link to GitHub or contact.

The hero motion should reveal the system relationship, not decorate the name. The visual should connect interfaces to services, data, intelligence, and delivery.

### 4.2 Capability system map

Purpose: make the breadth legible without a logo wall.

```text
Product need
    ↓
Web / Mobile interface
    ↓
API / domain rules / integrations
    ↓
Data / AI boundary
    ↓
Testing / observability / deployment
```

Each node links to one or more evidence-backed cases. Technologies appear as supporting evidence, never as the headline.

### 4.3 Professional Work

Purpose: show production-context engineering separately from owned products.

Each item needs:

- sanitized product/domain label;
- verified employment/engagement context;
- Jonathan's verified contribution;
- architecture/integration surface;
- delivery or quality evidence;
- explicit privacy boundary;
- optional case link only when approved.

Do not publish employer or client metrics, internal URLs, screenshots, diagrams, names, credentials, or implementation details merely because they exist locally.

### 4.4 Independent Products

Purpose: show product judgment and technical ownership.

Priority order:

1. FebraioTech.
2. Manual dos Achados.
3. Crypto AI.
4. BuildBalance.
5. TimeBubble.
6. Converse com Amor.

Use an editorial sequence: one dominant case, two supporting cases, then a compact product index. Do not render six visually identical cards.

### 4.5 Experience and operating principles

Purpose: connect the evidence to the professional timeline.

- X-Apps: production web, mobile, backend, integrations, messaging/CRM, and AI-enabled work, with client details sanitized.
- Independent: product ownership across the approved independent cases.
- Trybe: technical instruction and mentoring.

Operating principles should be evidence-derived: server-authoritative business rules, secure integration boundaries, explicit failure states, testable delivery, and no fabricated outcomes.

### 4.6 Contact

Purpose: give a recruiter or engineering lead one obvious next action.

- email;
- LinkedIn;
- GitHub;
- role/contract availability and timezone;
- downloadable resume only if the file is current and privacy-reviewed.

## 5. Case-study information architecture

Every `/work/:slug` route uses the same conceptual contract but can have a distinct composition.

1. **Case hero** — name, domain, one-line product definition, ownership/context, status, primary visual.
2. **Problem** — the real product or engineering constraint, without invented urgency or scale.
3. **Contribution** — what Jonathan actually owned or implemented.
4. **System view** — architecture, boundaries, data flow, and integrations.
5. **Key decisions** — two to four decisions with tradeoffs, not a feature list.
6. **Quality and delivery** — tests, CI, accessibility, deployment, observability, or runbooks that are present in evidence.
7. **Outcome/evidence** — public product, repository, screenshots, health surface, or documentation. Never replace missing business metrics with fictional impact.
8. **Boundaries** — what is private, simulated, local-only, incomplete, externally blocked, or not claimed.
9. **Next case** — a contextual transition based on a related capability, not an arbitrary carousel.

## 6. Typed content model

Technical facts and privacy state must not be duplicated in translation files.

```ts
type Locale = 'en' | 'pt-BR';
type WorkKind = 'professional' | 'independent';
type EvidenceLevel = 'public-live' | 'public-source' | 'private-source' | 'local-only';
type PublishState = 'approved' | 'needs-review' | 'withheld';

interface WorkCase {
  slug: string;
  kind: WorkKind;
  priority: number;
  capabilities: Array<'web' | 'backend' | 'mobile' | 'ai' | 'data' | 'cloud' | 'quality'>;
  stack: string[];
  links: {
    live?: string;
    source?: string;
  };
  media: CaseMedia[];
  evidence: EvidenceReference[];
  privacy: {
    state: PublishState;
    allowedClaims: string[];
    forbiddenClaims: string[];
  };
  copy: Record<Locale, CaseCopy>;
}

interface CaseMedia {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
  kind: 'product' | 'architecture' | 'detail' | 'social';
  source: 'public-product' | 'demo-fixture' | 'repository-asset';
}
```

Data invariants:

- one unique slug per case;
- every case has complete EN and PT copy before publication;
- every image has intrinsic dimensions, locale-aware alt text, and an evidence-safe source;
- private cases never expose a source URL;
- `needs-review` and `withheld` cases cannot enter production navigation;
- metrics require an evidence reference and a privacy approval;
- links are explicit HTTPS URLs or `mailto:` and are checked in CI;
- no locale resource may contain secrets, local filesystem paths, internal hostnames, or raw client identifiers.

## 7. Suggested source structure

```text
src/
├── app/
│   ├── App.tsx
│   ├── providers/
│   └── router.tsx
├── components/
│   ├── navigation/
│   ├── motion/
│   ├── system-map/
│   └── work/
├── content/
│   ├── schema.ts
│   ├── site.ts
│   ├── locales/
│   │   ├── en.ts
│   │   └── pt-BR.ts
│   └── work/
│       ├── febraio-tech.ts
│       ├── manual-dos-achados.ts
│       ├── crypto-ai.ts
│       ├── build-balance.ts
│       ├── time-bubble.ts
│       └── converse-com-amor.ts
├── features/
│   ├── home/
│   ├── case-study/
│   └── locale/
├── pages/
│   ├── HomePage/
│   ├── WorkIndexPage/
│   ├── WorkCasePage/
│   └── NotFoundPage/
├── seo/
│   ├── metadata.ts
│   └── structuredData.ts
├── styles/
└── test/
    ├── content-contract.test.ts
    └── setup.ts

scripts/
├── generate-route-shells.mjs
├── validate-content.mjs
└── validate-built-routes.mjs

tests/e2e/
├── navigation.spec.ts
├── locale.spec.ts
├── cases.spec.ts
├── responsive.spec.ts
├── reduced-motion.spec.ts
└── external-links.spec.ts
```

## 8. Localization contract

- New sessions start in English at `/`.
- `/pt/` is the canonical Portuguese home.
- The language control maps to the equivalent route without losing the current case or section.
- A saved preference can influence the visible suggestion, but must not force-redirect search engines or override an explicitly entered URL.
- `<html lang>`, title, description, canonical, Open Graph text, image alt text, and structured data match the route locale.
- Each route publishes `hreflang="en"`, `hreflang="pt-BR"`, and `hreflang="x-default"` equivalents.
- Automated parity tests fail if a published case is missing a locale or required field.

## 9. GitHub Pages routing and build contract

The current `base: './'` works for a root-only SPA but is unsafe for clean nested routes: an asset path resolved from `/work/febraio-tech/` can point under the case directory, and a direct refresh has no matching static file.

Recommended production contract:

1. Set the production Vite base to `/Portifolio-v2/`; keep `/` for local development.
2. Set the router basename from `import.meta.env.BASE_URL`, normalizing the trailing slash.
3. Generate an `index.html` shell for every English and Portuguese route during `postbuild`:

   ```text
   dist/index.html
   dist/pt/index.html
   dist/work/febraio-tech/index.html
   dist/pt/work/febraio-tech/index.html
   ...
   ```

4. Inject route-specific title, description, canonical, Open Graph, Twitter, and JSON-LD into each shell.
5. Generate `dist/404.html` as a last-resort GitHub Pages fallback that preserves the requested route and lets the client router render a controlled not-found state.
6. Use base-aware URLs for the favicon, manifest, scripts, images, and downloadable files. The current root-absolute `/favicon.svg` is incorrect for a project Pages site.
7. Validate every built route through a static HTTP server before deployment.

Static route shells are preferable to a hash router because they preserve the requested `/work/...` URL, support direct refreshes, and provide metadata to link unfurlers that do not run the React application.

## 10. SEO and social contract

Root routes:

- `Person` JSON-LD for Jonathan.
- `WebSite` JSON-LD for the portfolio.
- canonical and locale alternates.
- 1200 × 630 Open Graph image with readable name/role at small preview sizes.

Case routes:

- `CreativeWork` or `SoftwareApplication` structured data only when the selected schema matches the evidence.
- case-specific canonical, description, OG image, alt text, and locale alternates.
- no private repository URL, internal organization name, or unapproved client data in metadata.

The sitemap must include only generated, approved route shells. `robots.txt` must point to the project-site sitemap URL. A data test should fail if an approved case is absent from the generated route manifest.

## 11. Test architecture

### Unit/data contracts

- unique slugs and stable priority order;
- complete EN/PT parity;
- approved evidence and privacy state for every published case;
- required media dimensions and existing files;
- external URL syntax and allowlisted protocols;
- no secret-like values, local absolute paths, internal hostnames, or forbidden claims in production content;
- schema generation for Person, WebSite, and cases;
- GitHub Pages path/base helpers.

### Component/accessibility

- semantic landmark and heading order;
- language control labeling and route mapping;
- mobile navigation keyboard behavior and focus restoration;
- case navigation and next-case transitions;
- external-link behavior;
- no content loss in the reduced-motion rendering path.

### Playwright

- widths: 390 × 844, 430 × 932, 768 × 1024, 1366 × 768, 1440 × 900, and 1920 × 1080;
- home navigation and mobile menu;
- English default and Portuguese equivalent routes;
- every project route, direct refresh, back/forward, and invalid slug;
- live/source links point to the approved target;
- reduced-motion emulation removes non-essential movement and keeps all content visible;
- no horizontal overflow;
- keyboard-only route/menu/contact flow;
- built-site execution under `/Portifolio-v2/`, not only the Vite dev root.

## 12. Performance architecture

- do not preload the 1.3 MB hero PNG or 1.8 MB portrait PNG in their current form;
- create responsive AVIF/WebP sources and keep PNG only as fallback where necessary;
- load case media near its narrative section rather than all project screenshots at startup;
- lazy-load the case route and non-critical motion code;
- prefer CSS transforms/opacity and avoid scroll handlers that trigger layout reads on every frame;
- reserve image dimensions to protect CLS;
- self-host or deliberately preload only the font subsets actually used;
- measure V3 on the built GitHub Pages path after motion and routing are present.

Target gates from the brief remain: LCP below 2.5 s, CLS below 0.1, INP below 200 ms, Lighthouse performance at least 90, and the other Lighthouse categories at least 95 when reasonably reproducible.

## 13. Implementation order

1. Freeze the evidence/privacy matrix.
2. Add the typed content contract and EN/PT parity tests.
3. Add the router, locale prefixes, and GitHub Pages path helpers.
4. Generate route shells and verify direct refresh before building the case UI.
5. Build the home narrative and capability map.
6. Build independent cases in priority order.
7. Add only approved professional cases.
8. Add the motion system and reduced-motion alternative.
9. Generate responsive media and route-specific social images.
10. Run unit, component, E2E, visual, accessibility, performance, and deployed-route verification.

## 14. Definition of done

The information architecture is complete only when:

- professional and independent work are visibly distinct;
- the six approved independent products have real case URLs or an explicit documented reason for omission;
- English and Portuguese routes are complete and share the same factual source;
- every route refreshes successfully on the deployed GitHub Pages base;
- every published claim maps to evidence and privacy approval;
- every case has route-specific metadata and a safe social image;
- navigation, locale, cases, links, mobile menu, and reduced motion are automated;
- no professional/client confidentiality boundary is weakened for visual polish.
