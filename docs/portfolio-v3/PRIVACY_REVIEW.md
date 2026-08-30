# Portfolio V3 — Privacy and Confidentiality Review

Audit date: 2026-08-30

Scope: professional-work cases, screenshots, diagrams, links, and claims

## Publication decision

The professional-work section can be built safely, but raw client repositories and existing production evidence are **not publication-ready assets**. The default must be sanitized reconstruction: fixture-backed screenshots, abstract architecture diagrams, generalized provider categories, and evidence-calibrated copy.

Product names were explicitly requested by the portfolio owner. That supports naming them in the draft, but it does not independently establish a client's approval for logos, private interfaces, internal data, or detailed architecture. Use the brand name only with high-level engineering descriptions unless a separate approval exists.

## Non-negotiable exclusions

Never copy, embed, commit, or expose:

- `.env`, `.env.production`, `.env.staging`, local environment exports, CI variables, or secret-manager values;
- tokens, cookies, passwords, invitation links, API keys, private certificates, signing keys, keystores, service-account files, or OAuth configuration;
- private API hosts, SSH targets, database addresses, internal ports, S2S secrets, webhook secrets, or provider account identifiers;
- SQL dumps, SQLite datasets, backups, private uploads, object-storage keys, application logs, crash dumps, or generated API documentation containing live examples;
- customer, employee, learner, patient, buyer, seller, tenant, or contact names, emails, phone numbers, addresses, document identifiers, profile photos, chat content, search queries, support tickets, or uploaded files;
- production financial amounts, pipeline values, payment records, subscription details, vehicle/customer combinations, account balances, or business metrics;
- raw provider request/response payloads, proprietary scoring rules, internal prompts, competitor datasets, transcripts, market-research records, or unreleased product roadmaps;
- direct links to private repositories, CI jobs, admin panels, dashboards, storage buckets, or internal evidence folders.

This includes values accidentally visible in browser chrome, terminal tabs, bookmarks, notification centers, filenames, URL query strings, and image metadata.

## Repository-specific boundaries

### MagVenture

Safe to discuss at a high level:

- a React portal, Strapi authorization/content boundary, Expo mobile app, and private read-only intelligence service;
- access-controlled learning/content flows, search and retrieval, engagement analytics, and competitive-intelligence UX;
- a scheduled collection, validation, and atomic dataset-publication pattern;
- automated tests, release health checks, and rollback-aware delivery.

Do not publish:

- exact intelligence record counts, named customer searches, unpublished competitor data, evaluation sets, transcripts, private documents, or source PDFs;
- S2S routes or secret configuration, production hostnames, deployment accounts, collection-provider URLs, schedules that expose operational timing, or environment-specific commands;
- raw screenshots from authenticated analytics, account, staff, approval, support, or intelligence screens without written approval and full redaction;
- CRM/contact records, event submissions, certificate owners, or learner activity.

Brand use: product name in copy is owner-requested; logo and direct UI captures require an explicit asset review.

### Meu Auto App and CRM

Safe to discuss at a high level:

- the marketplace-to-CRM architecture, signed/retryable integration events, server-authoritative rules, provider adapters, web/mobile delivery, role/tenant boundaries, and automated verification;
- provider categories such as automotive data, financing, payment, marketplace import, email, and business messaging;
- sanitized lifecycle states using invented fixture IDs and values.

Do not publish:

- the raw production audit, its URLs, people, emails, phone numbers, vehicles, amounts, record counts, screenshots, role assignments, or pipeline/CI identifiers;
- customer chats, WhatsApp messages or phone numbers, media, webhook payloads, Meta account identifiers, or connection status artifacts;
- financing applications, document numbers, consultation reports, payment links, creditor/debt data, eligibility responses, or provider error payloads;
- production legal documents, company records, tenant IDs, internal permissions, or cross-system signatures.

Brand use: use one approved logo per product at most. Prefer a fixture-based visual sequence over production screenshots.

### SoftLave

Safe to discuss at a high level:

- the admin, POS, self-service terminal, and TypeScript service architecture;
- orders, machines, inventory, finance, subscriptions, and payment handoff as domain categories;
- authorization, multi-surface delivery, and automated-test strategy.

Do not publish:

- terminal identifiers, payment-device configuration, merchant/store accounts, authorization material, transaction details, or provider-specific security behavior;
- branch/company/customer/employee data, machine serials, schedules, payroll, fiscal records, routes, invoices, or operational metrics;
- the modified production environment file or any value derived from it;
- internal roadmaps, unresolved integration reports, or client presentation manuals.

Brand use: a sanitized local fixture is required before screenshots are approved.

### Ginga

Safe to discuss at a high level:

- implementation on top of the Cyrax company scaffold;
- product-specific mobile screens and Strapi domain models for community, events, content, chat, and wallet-oriented flows.

Do not publish:

- real profiles, connections, conversations, reports, events, wallet values, or moderation records;
- API endpoints, environment configuration, or any live mobile account;
- a claim of production availability, store release, or completed backend integration without new proof.

Brand use: fixture screens must be labeled as a product implementation sprint.

### Anajustra

No publishable case exists yet. Do not infer the product, role, stack, client relationship, or results from the name alone.

## Claim calibration

Every material claim should map to one of these labels internally:

| Evidence level            | What it supports                                        | What it does not support                         |
| ------------------------- | ------------------------------------------------------- | ------------------------------------------------ |
| Source present            | Architecture or implementation exists                   | Correct runtime behavior                         |
| Automated test present    | A test surface exists                                   | That it currently passes                         |
| Test run observed         | The tested contract passed in that environment and time | Production behavior                              |
| Rendered local validation | The UI worked with the inspected local fixture          | External integrations or current production      |
| Production observation    | The inspected production flow worked at that time       | Continued availability or all edge cases         |
| Provider/backend evidence | The external boundary returned the observed result      | Business impact, adoption, or future reliability |

Copy rules:

- Prefer "implemented", "contributed to", "designed the boundary", and "validated in a controlled flow".
- Use "shipped" only when deployment plus public or authenticated production behavior is evidenced.
- Use "production" only with a dated observation and an explicit remaining gap.
- Never use "secure", "scalable", "real-time", "AI-powered", or "high performance" as a standalone adjective. Explain the concrete mechanism instead.
- Never claim ownership of an entire collaborative product.
- Never translate a repository's module list into a claim that every module is complete.

## Screenshot sanitization protocol

Use this sequence for every professional-work image:

1. Start from a local environment or isolated fixture whenever possible.
2. Seed only invented names, reserved/example domains, fake phone numbers, and clearly fictional business values.
3. Remove browser chrome and operating-system UI before export.
4. Check every visible surface: URL, breadcrumb, title, avatar, initials, table row, tooltip, chart label, notification, toast, modal, filename, and empty-state message.
5. Replace IDs, timestamps, record counts, amounts, locations, provider statuses, and account names with neutral fixture values.
6. Inspect image metadata and strip location/device metadata.
7. Export a new flattened asset; do not commit the editable original if it contains private layers.
8. Review at 200% zoom and run OCR/text extraction as a second pass.
9. Record source, fixture status, reviewer, and approval date in the visual QA report.
10. If any element cannot be confidently classified, reject the image and create a diagram instead.

Blur is not sufficient for highly sensitive data. Crop or replace the content.

## Architecture diagram protocol

- Use generic labels such as "CRM provider", "payment provider", "object storage", and "private reader" unless the integration is already public and approved.
- Do not show domains, IP addresses, ports, secret names, queue names, bucket names, repository names, CI project IDs, or environment names.
- Do not reproduce private database schemas or content-type field lists.
- Show responsibility and data direction, not infrastructure inventory.
- Add a note when a diagram is a sanitized conceptual representation rather than a production topology.

## Links policy

Allowed by default:

- Jonathan's public GitHub and LinkedIn;
- independent-product public sites and public repositories already selected for the portfolio;
- client public marketing pages only when they reveal no authenticated/internal route and the case does not imply endorsement.

Not allowed by default:

- private Git remotes or commit links;
- production admin/API/CRM/mobile deep links;
- CI/CD pipelines, issue trackers, cloud consoles, object storage, monitoring, or evidence archives;
- signed URLs, invitation links, provider dashboards, or query-string-bearing screenshots.

## Asset disposition from the audited repositories

| Asset source                                  | Default decision               | Reason                                                         |
| --------------------------------------------- | ------------------------------ | -------------------------------------------------------------- |
| Existing authenticated production screenshots | Reject                         | May contain customer, employee, product, or operational data   |
| Existing production E2E evidence              | Reject                         | Created for internal verification, not marketing publication   |
| Existing fixture/demo screenshots             | Review individually            | "Demo" labels do not guarantee sanitization or client approval |
| Mobile store screenshots                      | Review individually            | May contain live content and store-brand restrictions          |
| Client logos and brand guidelines             | Approval required              | Brand usage is distinct from source access                     |
| Architecture documents                        | Use as fact-check sources only | May disclose internal topology, providers, or operations       |
| New local seeded screenshots                  | Preferred                      | Content and framing can be controlled                          |
| New abstract diagrams                         | Preferred                      | Best option when private interfaces cannot be shown            |

## Final publication gate

Before any professional case reaches `public/` or a deployable content file, confirm all items:

- [ ] The project and Jonathan's role are supported by authorship plus implementation evidence.
- [ ] Collaborative work is described without sole-authorship language.
- [ ] The copy contains no invented metric, business outcome, user count, uptime, or scale claim.
- [ ] Product naming and brand assets have an explicit decision.
- [ ] Every screenshot uses fixtures or has written approval and full redaction.
- [ ] OCR and metadata checks found no private text or location/device metadata.
- [ ] No endpoint, token, key, account ID, tenant ID, provider payload, or internal URL is visible.
- [ ] No real person, message, document, vehicle/customer pair, transaction, financial value, or intelligence record is visible.
- [ ] Public links open only approved public pages.
- [ ] Current runtime/deployment claims have a dated, reproducible proof.
- [ ] Remaining proof gaps appear in the case instead of being silently removed.

If any checkbox fails, publish a sanitized architecture narrative without the disputed asset or claim.
