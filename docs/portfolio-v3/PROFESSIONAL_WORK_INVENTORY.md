# Portfolio V3 — Professional Work Inventory

Audit date: 2026-08-30

Audience: portfolio implementation team

Status: evidence-backed working inventory, not a client-facing delivery report

## Purpose and evidence standard

This inventory separates Jonathan Febraio's professional work from his independent products. It is based on local source trees, version-control authorship, architecture documents, automated-test surfaces, delivery configuration, and existing validation reports. It deliberately does not treat a dependency, route name, build script, or old report as proof that a current production flow is working.

Claims use four confidence levels:

- **High:** Jonathan-authored history plus implementation and verification artifacts are present.
- **Medium:** Jonathan-authored implementation is present, but production or current runtime proof is incomplete.
- **Low:** only a scaffold, small contribution, or narrative reference is available.
- **Blocked:** the named work could not be traced to a local repository or other auditable evidence.

No secret values, credentials, private API hosts, customer records, production metrics, commercial amounts, or provider payloads are included here.

## Recommended portfolio hierarchy

| Priority | Work                                             | Recommended treatment                                       | Confidence  |
| -------- | ------------------------------------------------ | ----------------------------------------------------------- | ----------- |
| 1        | MagVenture Universe and Competitive Intelligence | Flagship professional case                                  | High        |
| 2        | Meu Auto App and CRM ecosystem                   | Flagship professional case                                  | High        |
| 3        | SoftLave operations platform                     | Compact professional case or supporting chapter             | Medium-high |
| 4        | Ginga mobile community platform                  | Delivery sprint / product-build snapshot                    | Medium      |
| Hold     | Anajustra                                        | Do not publish until evidence is supplied                   | Blocked     |
| Hold     | AssemblyFlow and other local templates           | Mention only after stronger contribution and privacy review | Low         |

The first two cases give the clearest end-to-end story: web, backend, mobile, data, integrations, testing, and delivery. SoftLave broadens the business-operations and device/payment story. Ginga demonstrates a fast domain implementation on an existing company scaffold, but should not be presented as a production launch.

## Case 01 — MagVenture Universe and Competitive Intelligence

### Product and domain

A multi-surface learning, content, engagement, and competitive-intelligence platform. The audited system includes a React portal, a Strapi 5 application boundary, an Expo/React Native app, and a private Python data service used through the Strapi authorization layer.

### Verified contribution scope

Jonathan-authored history is present across all four repositories. The strongest evidence supports contribution to:

- learning paths, course and resource experiences, scoped portal access, invitations, favorites, notifications, certificates, surveys, approvals, and engagement flows;
- AI-assisted search and retrieval, keyword/query handling, vector indexing, product-reference search, evaluation tooling, and guarded reindex operations;
- a competitive-intelligence workspace spanning research, market intelligence, assistants, editorial overview, filters, details, and staff-triggered refresh controls;
- a private read-only intelligence service and collection pipeline, including authenticated service-to-service access, dataset validation, atomic publication, health checks, rollback-aware releases, and scheduled collection;
- analytics, CRM/account-engagement synchronization, contact/event workflows, support media, and protected downloads;
- responsive portal work, accessibility corrections, production-oriented mobile integration, and release preparation.

This was collaborative work. The repository history contains multiple contributors, so the public case must say **contributed across** or **owned delivery of selected flows**, never that Jonathan built the entire platform alone.

### Architecture and integrations verified in source

```text
React portal / Expo mobile
          ↓
Strapi 5 BFF, authorization, content and workflows
          ├── relational data and object storage
          ├── CRM / account-engagement workflows
          ├── vector search and server-side AI boundary
          └── private read-only FastAPI intelligence service
                         ↓
                  validated SQLite dataset
                         ↑
              scheduled collection pipeline
```

Verified technical surfaces include React 18, React Native/Expo, Strapi 5, MySQL, Socket.IO, AWS S3 integration, Qdrant, OpenAI-compatible server integrations, FastAPI, SQLite, GitHub Actions, GitLab CI, Cypress, Jest, and Node's test runner. Provider and deployment details should remain generalized in the public case.

### Quality and delivery evidence

- The API contains focused tests for search, indexing, competitive intelligence, access control, analytics, engagement, certificates, content, surveys, CRM synchronization, and deployment contracts.
- The portal contains Cypress coverage and responsive visual artifacts for key authenticated workspaces.
- The mobile project contains Jest coverage and a dated launch-validation report that distinguishes simulator/runtime proof from unsigned native-build and store gaps.
- The intelligence service contains unit tests for internal contracts, data collection, scheduling, runtime boundaries, health, and dataset release behavior.
- Versioned deployment and rollback scripts exist for the API and private intelligence reader.

These artifacts prove an engineering and verification surface. They were not all re-run during this inventory.

### Safe English portfolio narrative

> I contributed across a multi-surface learning and market-intelligence platform, working on the React portal, Strapi service boundary, Expo mobile app, and a private data pipeline. My work connected access-controlled content, search and retrieval, engagement analytics, external business workflows, and competitive-intelligence experiences while keeping provider credentials and private data behind backend boundaries. I also strengthened automated verification, responsive behavior, and deployment safeguards across the system.

### Safe case-study chapters

1. **One product, four delivery surfaces** — show how portal, mobile, Strapi, and the intelligence reader divide responsibility.
2. **Authorization before intelligence** — explain why clients call Strapi and never the private reader directly.
3. **From collection to reviewable data** — visualize scheduled collection, validation, atomic dataset publication, and read-only serving.
4. **Search with operational safeguards** — discuss indexing, evaluation, and guarded reindexing without sharing prompts, customer queries, or provider configuration.
5. **Release evidence, not launch theatre** — show tests and release gates while preserving signed-build/store gaps.

### Evidence map

Private local repositories; use for fact checking, not as public links:

- `magventure-api/docs/mag-chat-rag.md`
- `magventure-api/docs/ai-search-partners-staff-implementation-report.md`
- `magventure-api/docs/engagement-analytics-foundation.md`
- `magventure-api/docs/salesforce-account-sync.md`
- `magventure-api/tests/`
- `magventure-frontend/src/screens/AuthenticatedArea/CompetitiveIntelligence*`
- `magventure-frontend/cypress/integration/`
- `magventure-frontend/reports/2026-08-10-competitive-intelligence-visual-parity.md`
- `magventure-universe-mobile/MOBILE_LAUNCH_VALIDATION.md`
- `magventure-hub/README.md`
- `magventure-hub/tests/`
- `magventure-hub/.github/workflows/`

### Proof gaps and publication boundaries

- Do not claim current production health from the dated validation artifacts.
- Do not claim a mobile store launch: signed builds, physical-device proof, and store acceptance were explicitly pending in the latest audit.
- The mobile working tree was modified during this inventory; screenshots and release claims must come from a known commit or a new verified build.
- Do not publish exact intelligence record counts, customer search terms, competitor datasets, private prompts, transcripts, internal hostnames, or service credentials.
- Product naming was requested by the portfolio owner, but client-brand imagery and direct product screenshots should still pass the privacy gate.

## Case 02 — Meu Auto App and CRM ecosystem

### Product and domain

An automotive product ecosystem spanning a public marketplace and service experience, dealer inventory and subscriptions, vehicle consultations, financing/payment journeys, customer chat, and a connected sales CRM.

The audited implementation is split across five applications: Strapi API, React web application, Expo mobile application, CRM Strapi API, and CRM React workspace.

### Verified contribution scope

Jonathan-authored history and implementation support contribution to:

- inventory, listings, vehicle presentation, seller/dealer operations, leads, subscriptions, and public/editorial home experiences;
- vehicle-data consultation flows, generated reports, provider normalization, eligibility/state handling, and payment handoff boundaries;
- financing and automotive-equity journeys, provider adapters, draft/application state, webhook validation, and proposal workspaces;
- customer chat with authenticated socket access and activity tracking;
- a signed, retryable integration/outbox boundary between the marketplace and CRM;
- CRM contacts, opportunities, pipeline stages, activities, tasks, appointments, reports, notifications, role-based access, tenant scoping, and private document/media handling;
- messaging inbox workflows and server-side business-messaging integration boundaries;
- responsive web/mobile delivery, contextual skeletons, accessibility, and presentation-oriented product polish.

The ecosystem predates some of Jonathan's work and contains other contributors. The portfolio should emphasize end-to-end contribution and integration ownership, not sole authorship.

### Architecture and integrations verified in source

```text
React web + Expo mobile
          ↓
Marketplace Strapi API
          ├── inventory / listings / consultations / financing / payments
          ├── authenticated chat and events
          └── signed integration outbox
                         ⇅
                    CRM Strapi API
                         ↓
              React sales and messaging workspace
```

Verified technical surfaces include React, React Native/Expo, Strapi 5, MySQL, Socket.IO, REST APIs, signed webhooks, integration outboxes/receipts, Cypress, Jest, Maestro flows, GitLab CI, and multiple third-party automotive, financing, payment, marketplace-import, email, and business-messaging adapters.

The public case should describe provider categories rather than reproduce private provider contracts or production topology.

### Quality and delivery evidence

- The marketplace API contains focused suites for authorization, consultations, financing, payment state, inventory, listing publication, subscription/outbox behavior, provider adapters, webhooks, security, and content.
- The web app contains Cypress coverage for marketplace, consultations, dealer leads, financing, and service journeys.
- The mobile app contains Jest tests plus read-only and controlled Maestro flows for navigation, consultations, financing, chat, and payment handoff.
- The CRM API contains unit, integration, and scale-oriented test entrypoints for tenant scoping, conversations, messaging, analytics, outbox handling, media, sockets, and recovery flows.
- The CRM frontend contains an E2E smoke suite and a detailed internal production audit with explicit remaining proof gaps.

The internal production audit includes real operational evidence, but its raw data, URLs, people, amounts, and screenshots must not be copied into the public portfolio.

### Safe English portfolio narrative

> I worked across an automotive marketplace and its connected CRM, contributing to the web, mobile, backend, data, and integration layers. The system links inventory and customer journeys to financing, vehicle-data, payment, chat, and sales workflows through authenticated APIs and retryable integration events. My focus included server-authoritative business rules, provider normalization, tenant-aware CRM operations, responsive product states, and automated tests around the highest-risk boundaries.

### Safe case-study chapters

1. **Customer intent becomes sales context** — illustrate the sanitized Marketplace → outbox → CRM flow.
2. **The same domain across web and mobile** — show shared journeys while explaining platform-specific interaction decisions.
3. **External providers behind one service boundary** — describe adapters, validation, webhooks, idempotency, and failure states generically.
4. **CRM authorization and data isolation** — explain role and tenant boundaries without exposing organizational data.
5. **Evidence with honest limits** — distinguish code/integration proof from messaging-provider, second-tenant production, legal, and infrastructure gaps.

### Evidence map

Private local repositories; use for fact checking, not as public links:

- `meu-auto-app-api/src/api/`
- `meu-auto-app-api/src/integrations/`
- `meu-auto-app-api/tests/`
- `meu-auto-app-frontend/src/screens/`
- `meu-auto-app-frontend/cypress/e2e/`
- `meu-auto-app-mobile/src/screens/`
- `meu-auto-app-mobile/src/**/__tests__/`
- `meu-auto-app-mobile/.maestro/`
- `meu-auto-app-crm-api/src/api/`
- `meu-auto-app-crm-api/tests/`
- `meu-auto-app-crm-frontend/src/screens/`
- `meu-auto-app-crm-frontend/cypress/e2e/crm-smoke.cy.js`
- `meu-auto-app-crm-frontend/PRODUCTION_E2E_AUDIT.md`

### Proof gaps and publication boundaries

- Do not publish production people, vehicles, amounts, counts, tenant names, pipeline values, credentials, or raw E2E screenshots.
- Do not claim end-to-end real-world business-message delivery unless a new external-provider validation is performed.
- Local tenant-isolation tests exist; the latest internal audit did not prove cross-tenant isolation with two independent authenticated production organizations.
- Legal copy, outbound-email delivery, and host/database observability had documented gaps.
- Do not imply that a payment, financing approval, vehicle debt settlement, or sale was completed unless a specific sanitized proof exists.
- Avoid current availability claims until the public routes are rechecked in a controlled authenticated session.

## Case 03 — SoftLave operations platform

### Product and domain

A multi-surface laundry-operations system with an administrative workspace, point-of-sale application, self-service terminal app, and TypeScript backend.

### Verified contribution scope

Jonathan-authored history supports work across:

- an Express/TypeScript backend with Prisma/PostgreSQL domain services for companies, branches, customers, orders, machines, inventory, finance, employees, subscriptions, promotions, logistics, reporting, and messaging;
- a Next.js/React administrative workspace and a React/Vite point-of-sale experience;
- an Expo/React Native self-service terminal for authentication, machine cycles, and payment initiation;
- payment-terminal authorization and configuration safeguards, self-service administration, CRM provisioning, integration consolidation, financial pagination, UI preferences, and delivery configuration.

This is collaborative work and contains legacy plus migrated paths. Public copy must describe selected contributions, not claim that the entire platform or all listed modules are complete.

### Architecture and evidence

```text
Admin web / POS web / self-service mobile terminal
                       ↓
            Express + TypeScript services
                       ↓
              Prisma + PostgreSQL
                       ├── payment and terminal adapters
                       ├── machine / order workflows
                       └── CRM and communication boundaries
```

Evidence surfaces:

- `softlave-backend/src/routes/`, `src/services/`, and `src/services/__tests__/`
- `softlave-backend/.github/workflows/deploy-production.yml`
- `softlave-admin/src/views/`, `src/services/`, and `e2e/admin-ux.spec.ts`
- `softlave-pdv/src/components/pdv/` and `src/services/`
- `softLave-self-service/src/screens/`
- `softLave-self-service/docs/destaxa-android-integration-analysis.md`

### Safe English portfolio narrative

> I contributed to a multi-surface operations platform spanning an administrative workspace, point of sale, self-service terminal, and TypeScript backend. My work focused on turning operational domains—orders, machines, inventory, finance, subscriptions, and payment handoffs—into explicit service boundaries, while strengthening authorization, integration safety, and repeatable delivery.

### Confidence and proof gaps

Confidence is **medium-high** for implementation scope and **unproven** for current public production behavior. The test files and deployment workflow were inspected but not executed. A user-managed production environment file is modified and must never be read, changed, staged, or represented in the portfolio. Provider configuration, terminal identifiers, financial data, and private operations documentation must remain confidential.

Recommended use: a compact professional case after a sanitized local build is captured with seeded data. Do not lead the portfolio with this case until the rendered experience and safe visual assets are verified.

## Case 04 — Ginga mobile community platform

### Product and domain

A mobile community and events concept with profiles, posts, interactions, connections/matches, conversations, calendar/events, reporting, notifications, and wallet-related domain models.

### Verified contribution scope

The evidence supports a concentrated V2 implementation on top of an existing X-Apps/Cyrax scaffold:

- Strapi domain models, ownership helpers, routes, and a product-specific service layer;
- Expo/React Native screens and navigation for home, create, calendar, chat, conversation, profile, settings, and wallet;
- brand assets and theme/navigation adaptation;
- baseline authentication, support, services, and deployment scaffolding inherited from the company template.

The distinction between inherited scaffold and product-specific work is important. Public copy must not imply that authentication, infrastructure, or the full platform were built from scratch in this sprint.

### Evidence map

- `ginga-plataforma-mobile-backend/CYRAX_BASELINE.md`
- `ginga-plataforma-mobile-backend/ARCHITECTURE.md`
- `ginga-plataforma-mobile-backend/src/api/ginga/`
- `ginga-plataforma-mobile-backend/src/api/{event,post,connection,conversation,wallet}/`
- `ginga-plataforma-mobile-mobile/CYRAX_BASELINE.md`
- `ginga-plataforma-mobile-mobile/src/screens/`
- `ginga-plataforma-mobile-mobile/e2e/auth.e2e.test.js`

### Safe English portfolio narrative

> Working from an established company scaffold, I implemented a product-specific mobile community domain and its Expo experience: social discovery, events, content creation, conversations, profiles, and wallet-oriented flows. The sprint emphasized reuse of proven authentication, navigation, service, and policy foundations while adding only the product-specific models and journeys.

### Confidence and proof gaps

Confidence is **medium** for the authored implementation and **low** for production readiness. The mobile project's own architecture note still describes the experience as static, the available E2E surface is limited, and no current build, backend integration run, signed binary, store release, or production validation was performed during this audit.

Recommended use: a short "delivery sprint" section or timeline entry after a fixture-backed local run. Do not present it as a shipped consumer platform.

## Blocked case — Anajustra

The portfolio brief names Anajustra as professional work, but this audit found no matching local directory, source reference, commit subject, or case documentation under the inspected repositories. The absence of local evidence does not mean the work did not happen; it means the portfolio cannot responsibly describe it yet.

Before publication, provide at least one of:

- a repository or branch containing Jonathan-authored work;
- a sanitized project brief plus screenshots and a written role description;
- an employment artifact that names the product and contribution scope;
- a public product surface that can be tied to specific implementation evidence.

Until then, do not create an Anajustra case, infer a stack, or reuse generic X-Apps responsibilities as project-specific evidence.

## Other local repositories reviewed

| Repository                           | Finding                                                                                                          | Portfolio action                                            |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| AssemblyFlow                         | Small Jonathan-authored history around a form/letter editor and drag interaction; backend largely scaffold-level | Hold until a rendered flow and clearer role evidence exist  |
| Eclesia, NucleoAuto, Propi, Proserve | No Jonathan-authored history found in the inspected Git history                                                  | Do not attribute                                            |
| Kinder                               | One documentation-oriented Jonathan commit found                                                                 | Do not present as implementation work without more evidence |

## Public asset recommendations

Create new portfolio-safe assets instead of copying raw production evidence:

- **MagVenture:** a brand-neutral architecture motion, a redacted/approved portal crop, and a device frame using fixture content. Avoid internal datasets and third-party intelligence records.
- **Meu Auto + CRM:** a diagram of the event/outbox flow plus fixture-based web/mobile/CRM screens. Never use the raw production E2E screenshots.
- **SoftLave:** a seeded local admin/POS/self-service sequence with all account, branch, machine, terminal, and transaction identifiers replaced.
- **Ginga:** local fixture screens labeled as a product implementation sprint, not production.

Every screenshot must pass the checklist in `PRIVACY_REVIEW.md` before entering `public/`.

## Content rules for Portfolio V3

- Use **Professional Work** and **Independent Products** as separate sections.
- In professional cases, use "contributed", "implemented selected flows", or "owned delivery of" where evidence supports it.
- Never convert commit counts into impact metrics.
- Never infer revenue, user count, conversion, adoption, latency, uptime, scale, or business outcome.
- Name technologies only when implementation or project configuration verifies them.
- Label the evidence level: code, automated test, local rendered validation, production observation, or external provider validation.
- Keep every known limitation visible in the case; honest boundaries make the engineering story stronger.
