import type { ExperienceEntry, LocalizedText, WorkCase } from '../types/v3';

export const copy = (en: string, pt: string): LocalizedText => ({ en, pt });

export const siteCopy = {
  nav: {
    work: copy('Work', 'Projetos'),
    system: copy('System', 'Sistema'),
    about: copy('About', 'Sobre'),
    contact: copy('Contact', 'Contato'),
    menu: copy('Open menu', 'Abrir menu'),
    close: copy('Close menu', 'Fechar menu'),
  },
  hero: {
    eyebrow: copy(
      'Jonathan Febraio · Software Engineer',
      'Jonathan Febraio · Engenheiro de Software',
    ),
    title: copy('Software that moves between layers.', 'Software que se move entre camadas.'),
    intro: copy(
      'I design and ship web, mobile, backend and AI-enabled systems — following the work from product decision to production evidence.',
      'Eu projeto e entrego sistemas web, mobile, backend e com IA — acompanhando o trabalho da decisão de produto à evidência em produção.',
    ),
    primary: copy('Explore selected systems', 'Explorar sistemas selecionados'),
    secondary: copy('Open LinkedIn', 'Abrir LinkedIn'),
    location: copy('Brazil · UTC−3 · Remote worldwide', 'Brasil · UTC−3 · Remoto global'),
    scroll: copy('Trace the system', 'Percorra o sistema'),
  },
  statement: copy(
    'The interface is only one surface. I work through the API, data, mobile, automation and delivery layers that make a product hold together.',
    'A interface é apenas uma superfície. Eu atravesso API, dados, mobile, automação e entrega para fazer o produto funcionar como um sistema.',
  ),
  professional: {
    index: copy('01 / Professional work', '01 / Trabalho profissional'),
    title: copy(
      'Systems delivered inside real product teams.',
      'Sistemas entregues dentro de times de produto reais.',
    ),
    intro: copy(
      'Selected work is described at architecture and responsibility level. Client data, internal screens, credentials and private business details stay private.',
      'O trabalho selecionado é apresentado no nível de arquitetura e responsabilidade. Dados de clientes, telas internas, credenciais e detalhes privados permanecem protegidos.',
    ),
  },
  system: {
    index: copy('02 / Operating range', '02 / Campo de atuação'),
    title: copy('One product. Six connected layers.', 'Um produto. Seis camadas conectadas.'),
    intro: copy(
      'My strongest contribution happens where boundaries meet: a UI state depends on an API contract, the contract depends on data rules, and delivery needs proof.',
      'Minha contribuição mais forte acontece nos encontros: uma interface depende de um contrato de API, o contrato depende das regras de dados e a entrega precisa de evidência.',
    ),
    layers: [
      {
        id: 'product',
        label: copy('Product', 'Produto'),
        title: copy('Frame the decision', 'Enquadrar a decisão'),
        body: copy(
          'Translate ambiguous needs into a testable product and technical boundary.',
          'Transformar necessidades ambíguas em limites de produto e tecnologia que possam ser testados.',
        ),
      },
      {
        id: 'web',
        label: copy('Web', 'Web'),
        title: copy('Design the states', 'Projetar os estados'),
        body: copy(
          'Responsive React interfaces with explicit loading, error, empty and success behavior.',
          'Interfaces React responsivas com estados explícitos de carregamento, erro, vazio e sucesso.',
        ),
      },
      {
        id: 'mobile',
        label: copy('Mobile', 'Mobile'),
        title: copy('Carry the flow', 'Levar o fluxo adiante'),
        body: copy(
          'Cross-platform mobile journeys backed by shared services and platform-aware UX.',
          'Jornadas mobile multiplataforma apoiadas por serviços compartilhados e UX consciente da plataforma.',
        ),
      },
      {
        id: 'backend',
        label: copy('Backend', 'Backend'),
        title: copy('Enforce the rules', 'Garantir as regras'),
        body: copy(
          'Typed APIs, authorization, integrations and business logic at the right boundary.',
          'APIs tipadas, autorização, integrações e regras de negócio na fronteira correta.',
        ),
      },
      {
        id: 'ai',
        label: copy('AI', 'IA'),
        title: copy('Make intelligence bounded', 'Dar limites à inteligência'),
        body: copy(
          'AI-assisted workflows with deterministic inputs, validation and observable fallbacks.',
          'Fluxos assistidos por IA com entradas determinísticas, validação e alternativas observáveis.',
        ),
      },
      {
        id: 'delivery',
        label: copy('Cloud + data', 'Cloud + dados'),
        title: copy('Prove the delivery', 'Provar a entrega'),
        body: copy(
          'Data models, automated checks, CI/CD and deployment evidence that others can inspect.',
          'Modelos de dados, verificações automáticas, CI/CD e evidências de deploy que outras pessoas podem inspecionar.',
        ),
      },
    ],
  },
  independent: {
    index: copy('03 / Independent products', '03 / Produtos independentes'),
    title: copy(
      'Built to understand the whole system.',
      'Construídos para entender o sistema inteiro.',
    ),
    intro: copy(
      'Independent products are where I take full responsibility for the model, interface, infrastructure and operating choices.',
      'Nos produtos independentes, assumo responsabilidade completa pelo modelo, interface, infraestrutura e decisões de operação.',
    ),
  },
  experience: {
    index: copy('04 / Experience', '04 / Experiência'),
    title: copy('A path shaped by ownership.', 'Uma trajetória guiada por responsabilidade.'),
  },
  about: {
    index: copy('05 / Working principles', '05 / Princípios de trabalho'),
    title: copy(
      'I like the part where the diagram meets reality.',
      'Eu gosto da parte em que o diagrama encontra a realidade.',
    ),
    body: copy(
      'I am a Brazil-based Software Engineer focused on TypeScript products across backend, web and mobile. I care about legible architecture, secure boundaries, useful interfaces and verification that survives beyond a demo.',
      'Sou Engenheiro de Software no Brasil, focado em produtos TypeScript entre backend, web e mobile. Valorizo arquitetura legível, fronteiras seguras, interfaces úteis e verificações que sobrevivem além da demonstração.',
    ),
    principles: [
      copy('Make the business rule explicit.', 'Tornar a regra de negócio explícita.'),
      copy('Put authority on the server.', 'Colocar a autoridade no servidor.'),
      copy(
        'Design failure states, not only the happy path.',
        'Projetar falhas, não apenas o caminho feliz.',
      ),
      copy('Call evidence by its real name.', 'Chamar a evidência pelo nome correto.'),
    ],
  },
  contact: {
    index: copy('06 / Contact', '06 / Contato'),
    title: copy(
      'Need someone who can follow the work end to end?',
      'Precisa de alguém que acompanhe o trabalho de ponta a ponta?',
    ),
    body: copy(
      'I am open to high-impact remote roles and international product teams working on demanding software.',
      'Estou aberto a posições remotas de alto impacto e times internacionais construindo software exigente.',
    ),
    email: copy('Start a conversation', 'Iniciar uma conversa'),
    github: copy('Inspect the code', 'Ver o código'),
    availability: copy(
      'Available for full-time or contract conversations',
      'Disponível para conversas sobre posições integrais ou contratos',
    ),
  },
  case: {
    back: copy('Back to selected work', 'Voltar aos projetos'),
    role: copy('Role', 'Papel'),
    period: copy('Period', 'Período'),
    stack: copy('Core stack', 'Stack principal'),
    challenge: copy('The challenge', 'O desafio'),
    contribution: copy('My contribution', 'Minha contribuição'),
    architecture: copy('System anatomy', 'Anatomia do sistema'),
    decisions: copy('Engineering decisions', 'Decisões de engenharia'),
    quality: copy('Quality and delivery', 'Qualidade e entrega'),
    evidence: copy('Evidence boundary', 'Limite da evidência'),
    live: copy('Open live product', 'Abrir produto'),
    source: copy('Inspect source', 'Ver código'),
    next: copy('Next case', 'Próximo case'),
  },
  notFound: {
    eyebrow: copy('404 / Route not found', '404 / Rota não encontrada'),
    title: copy('This path is outside the system.', 'Este caminho está fora do sistema.'),
    action: copy('Return home', 'Voltar ao início'),
  },
} as const;

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const workCases: WorkCase[] = [
  {
    slug: 'magventure-platform',
    kind: 'professional',
    title: 'Magventure',
    eyebrow: copy('Multi-product professional ecosystem', 'Ecossistema profissional multiproduto'),
    summary: copy(
      'Web, mobile, backend, search and operational surfaces evolving as one connected product ecosystem.',
      'Superfícies web, mobile, backend, busca e operação evoluindo como um ecossistema de produto conectado.',
    ),
    role: copy(
      'Full-Stack & Mobile Software Engineer',
      'Engenheiro de Software Full Stack & Mobile',
    ),
    period: '2024 — 2026',
    disciplines: [
      copy('Web product', 'Produto web'),
      copy('Mobile', 'Mobile'),
      copy('Backend + integrations', 'Backend + integrações'),
    ],
    stack: ['TypeScript', 'React', 'React Native', 'Strapi 5', 'Qdrant', 'FastAPI', 'CI/CD'],
    challenge: copy(
      'Evolve multiple client and operational surfaces without treating each repository as an isolated product.',
      'Evoluir múltiplas superfícies de cliente e operação sem tratar cada repositório como um produto isolado.',
    ),
    contribution: [
      copy(
        'Delivered features across web, mobile, API and operational tooling boundaries.',
        'Entreguei funcionalidades atravessando web, mobile, API e ferramentas operacionais.',
      ),
      copy(
        'Contributed to search, retrieval and competitive-intelligence flows while keeping authorization at the Strapi boundary.',
        'Contribuí em busca, recuperação e inteligência competitiva mantendo autorização na fronteira do Strapi.',
      ),
      copy(
        'Strengthened responsive behavior, automated verification and release safeguards across independent applications.',
        'Fortaleci comportamento responsivo, verificação automatizada e proteções de release entre aplicações independentes.',
      ),
    ],
    architecture: [
      {
        label: copy('Experiences', 'Experiências'),
        value: copy(
          'Public web · member web · cross-platform mobile',
          'Web público · web de membros · mobile multiplataforma',
        ),
      },
      {
        label: copy('Service boundary', 'Fronteira de serviço'),
        value: copy(
          'Strapi 5 · authorization · content · search',
          'Strapi 5 · autorização · conteúdo · busca',
        ),
      },
      {
        label: copy('Intelligence + delivery', 'Inteligência + entrega'),
        value: copy(
          'Private data service · validated dataset · CI/CD',
          'Serviço privado de dados · dataset validado · CI/CD',
        ),
      },
    ],
    decisions: [
      copy(
        'Keep product boundaries explicit while sharing contracts between surfaces.',
        'Manter limites de produto explícitos compartilhando contratos entre superfícies.',
      ),
      copy(
        'Separate AI-assisted behavior from deterministic product authority.',
        'Separar comportamento assistido por IA da autoridade determinística do produto.',
      ),
      copy(
        'Treat deployment and integration evidence as part of feature completion.',
        'Tratar evidência de deploy e integração como parte da conclusão da funcionalidade.',
      ),
    ],
    quality: [
      copy(
        'Jest, Cypress and service-level tests cover selected access, search, engagement, mobile and data boundaries.',
        'Jest, Cypress e testes de serviço cobrem fronteiras selecionadas de acesso, busca, engajamento, mobile e dados.',
      ),
      copy(
        'Versioned delivery and rollback safeguards exist across the API and private data service.',
        'Proteções versionadas de entrega e rollback existem na API e no serviço privado de dados.',
      ),
    ],
    evidence: [
      copy(
        'Descriptions are limited to architecture and responsibilities evidenced in local project repositories.',
        'As descrições se limitam à arquitetura e responsabilidades evidenciadas nos repositórios locais.',
      ),
      copy(
        'Private screens, customer data, internal endpoints and commercial metrics are intentionally omitted.',
        'Telas privadas, dados de clientes, endpoints internos e métricas comerciais foram omitidos intencionalmente.',
      ),
    ],
    confidentiality: copy(
      'Professional work · sanitized case study',
      'Trabalho profissional · case sanitizado',
    ),
    accent: 'orange',
  },
  {
    slug: 'meu-auto-crm',
    kind: 'professional',
    title: 'Meu Auto + CRM',
    eyebrow: copy('Automotive marketplace and operations', 'Marketplace automotivo e operação'),
    summary: copy(
      'A connected product journey from vehicle discovery and service requests to CRM conversations and operational follow-up.',
      'Uma jornada conectada da descoberta de veículos e solicitações de serviço às conversas no CRM e acompanhamento operacional.',
    ),
    role: copy('Full-Stack Software Engineer', 'Engenheiro de Software Full Stack'),
    period: '2024 — 2026',
    disciplines: [
      copy('Consumer web', 'Web consumidor'),
      copy('CRM', 'CRM'),
      copy('Provider integrations', 'Integrações com provedores'),
    ],
    stack: ['TypeScript', 'React', 'React Native', 'Strapi 5', 'MySQL', 'Socket.IO', 'Cypress'],
    challenge: copy(
      'Keep customer-facing journeys, external providers and CRM operations consistent when work crosses systems and completes asynchronously.',
      'Manter jornadas do cliente, provedores externos e operação do CRM consistentes quando o trabalho atravessa sistemas e termina de forma assíncrona.',
    ),
    contribution: [
      copy(
        'Implemented and reviewed flows spanning consumer UI, backend services and CRM state.',
        'Implementei e revisei fluxos atravessando interface do consumidor, serviços backend e estado do CRM.',
      ),
      copy(
        'Worked on messaging, vehicle-service and payment-provider boundaries with explicit status handling.',
        'Trabalhei em fronteiras de mensageria, serviços veiculares e provedores de pagamento com estados explícitos.',
      ),
      copy(
        'Built responsive operational interfaces and verification paths for high-context workflows.',
        'Construí interfaces operacionais responsivas e caminhos de verificação para fluxos de alto contexto.',
      ),
    ],
    architecture: [
      {
        label: copy('Acquisition', 'Aquisição'),
        value: copy(
          'Marketplace · simulations · service requests',
          'Marketplace · simulações · solicitações de serviço',
        ),
      },
      {
        label: copy('Orchestration', 'Orquestração'),
        value: copy(
          'APIs · provider adapters · event/outbox flows',
          'APIs · adaptadores de provedores · fluxos de evento/outbox',
        ),
      },
      {
        label: copy('Operations', 'Operação'),
        value: copy(
          'CRM · conversations · lead and opportunity context',
          'CRM · conversas · contexto de leads e oportunidades',
        ),
      },
    ],
    decisions: [
      copy(
        'Preserve external request identifiers and provider status instead of flattening failures.',
        'Preservar identificadores e status do provedor em vez de simplificar falhas.',
      ),
      copy(
        'Model cross-system synchronization as eventual and observable.',
        'Modelar sincronização entre sistemas como eventual e observável.',
      ),
      copy(
        'Protect URL-driven deep links while adapting dense operational UI to mobile.',
        'Proteger deep links orientados por URL ao adaptar interfaces operacionais densas para mobile.',
      ),
    ],
    quality: [
      copy(
        'Focused integration diagnostics by route, status, duration and provider response.',
        'Diagnóstico focado de integrações por rota, status, duração e resposta do provedor.',
      ),
      copy(
        'Responsive and no-overflow verification for operational flows.',
        'Verificação responsiva e sem overflow para fluxos operacionais.',
      ),
    ],
    evidence: [
      copy(
        'The case reports engineering behavior verified in local code and test artifacts; it does not claim unobserved provider outcomes.',
        'O case relata comportamento de engenharia verificado em código e testes locais; não afirma resultados de provedores que não foram observados.',
      ),
      copy(
        'Personal data, messages, credentials and internal commercial figures are excluded.',
        'Dados pessoais, mensagens, credenciais e números comerciais internos foram excluídos.',
      ),
    ],
    confidentiality: copy(
      'Professional work · sanitized case study',
      'Trabalho profissional · case sanitizado',
    ),
    accent: 'ink',
  },
  {
    slug: 'softlave-operations',
    kind: 'professional',
    title: 'SoftLave',
    eyebrow: copy('Multi-surface operations platform', 'Plataforma operacional multissuperfície'),
    summary: copy(
      'Administrative, point-of-sale and self-service surfaces connected to a TypeScript operations backend.',
      'Superfícies administrativa, ponto de venda e autoatendimento conectadas a um backend operacional em TypeScript.',
    ),
    role: copy(
      'Full-Stack & Mobile Software Engineer',
      'Engenheiro de Software Full Stack & Mobile',
    ),
    period: '2024 — 2026',
    disciplines: [
      copy('Operations backend', 'Backend operacional'),
      copy('Admin + POS', 'Admin + PDV'),
      copy('Self-service mobile', 'Mobile de autoatendimento'),
    ],
    stack: ['TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Next.js', 'React Native'],
    challenge: copy(
      'Turn a wide operational domain—orders, machines, inventory, finance and payment handoffs—into boundaries that remain legible across three interfaces.',
      'Transformar um domínio operacional amplo—pedidos, máquinas, estoque, finanças e pagamentos—em fronteiras legíveis entre três interfaces.',
    ),
    contribution: [
      copy(
        'Contributed across backend services, administrative workflows, point-of-sale and self-service terminal flows.',
        'Contribuí entre serviços backend, fluxos administrativos, ponto de venda e terminal de autoatendimento.',
      ),
      copy(
        'Worked on authorization, configuration safeguards, operational pagination and integration consolidation.',
        'Trabalhei em autorização, proteções de configuração, paginação operacional e consolidação de integrações.',
      ),
      copy(
        'Supported repeatable delivery while preserving legacy and migrated paths.',
        'Apoiei entrega reproduzível preservando caminhos legados e migrados.',
      ),
    ],
    architecture: [
      {
        label: copy('Surfaces', 'Superfícies'),
        value: copy(
          'Admin web · POS web · self-service terminal',
          'Web administrativo · PDV web · terminal de autoatendimento',
        ),
      },
      {
        label: copy('Services', 'Serviços'),
        value: copy(
          'Express + TypeScript domain services',
          'Serviços de domínio Express + TypeScript',
        ),
      },
      {
        label: copy('Operations', 'Operação'),
        value: copy(
          'Prisma/PostgreSQL · machine and payment adapters',
          'Prisma/PostgreSQL · adaptadores de máquinas e pagamentos',
        ),
      },
    ],
    decisions: [
      copy(
        'Keep operational domains in explicit services instead of coupling them to one interface.',
        'Manter domínios operacionais em serviços explícitos em vez de acoplá-los a uma interface.',
      ),
      copy(
        'Authorize and validate terminal/payment configuration before provider handoff.',
        'Autorizar e validar configuração de terminal/pagamento antes do provedor.',
      ),
      copy(
        'Describe legacy and migrated paths honestly rather than implying one uniform architecture.',
        'Descrever caminhos legados e migrados com honestidade em vez de sugerir uma arquitetura uniforme.',
      ),
    ],
    quality: [
      copy(
        'Backend service tests, an administrative E2E path and deployment workflows exist in source.',
        'Testes de serviços backend, um caminho E2E administrativo e fluxos de deploy existem no código.',
      ),
      copy(
        'Those suites were inventoried for this portfolio but were not re-run as current production proof.',
        'Essas suítes foram inventariadas para o portfólio, mas não reexecutadas como prova atual de produção.',
      ),
    ],
    evidence: [
      copy(
        'Implementation scope is verified in authored history; current public production behavior remains unproven.',
        'O escopo de implementação é verificado no histórico de autoria; o comportamento público atual em produção não foi provado.',
      ),
      copy(
        'Provider configuration, terminal identifiers, financial data and private operations documents are excluded.',
        'Configurações de provedores, identificadores de terminal, dados financeiros e documentos operacionais privados foram excluídos.',
      ),
    ],
    confidentiality: copy(
      'Professional work · compact sanitized case',
      'Trabalho profissional · case compacto e sanitizado',
    ),
    accent: 'sand',
  },
  {
    slug: 'febraio-tech',
    kind: 'independent',
    title: 'FebraioTech',
    eyebrow: copy('Commerce platform', 'Plataforma de comércio'),
    summary: copy(
      'A real commerce system with catalog, inventory, customer credit and operational rules across a documented monorepo.',
      'Um sistema real de comércio com catálogo, estoque, crédito do cliente e regras operacionais em um monorepo documentado.',
    ),
    role: copy(
      'Product owner and full-stack engineer',
      'Responsável pelo produto e engenharia full stack',
    ),
    period: '2025 — 2026',
    image: asset('projects/febraio-tech.png'),
    imageAlt: copy('FebraioTech commerce interface', 'Interface de comércio da FebraioTech'),
    liveUrl: 'https://www.febraiotech.com.br/',
    disciplines: [
      copy('Product architecture', 'Arquitetura de produto'),
      copy('Commerce backend', 'Backend de comércio'),
      copy('Frontend + delivery', 'Frontend + entrega'),
    ],
    stack: ['TypeScript', 'Next.js', 'Medusa v2', 'PostgreSQL', 'Docker', 'Playwright'],
    challenge: copy(
      'Encode inventory, credit and order behavior as dependable domain rules instead of fragile interface assumptions.',
      'Codificar estoque, crédito e pedidos como regras de domínio confiáveis em vez de suposições frágeis da interface.',
    ),
    contribution: [
      copy(
        'Designed the monorepo, commerce model and end-to-end customer journey.',
        'Projetei o monorepo, o modelo de comércio e a jornada completa do cliente.',
      ),
      copy(
        'Implemented storefront, backend customizations, operational rules and deployment.',
        'Implementei loja, customizações de backend, regras operacionais e deploy.',
      ),
    ],
    architecture: [
      {
        label: copy('Storefront', 'Loja'),
        value: copy('Next.js customer experience', 'Experiência do cliente em Next.js'),
      },
      {
        label: copy('Commerce core', 'Núcleo de comércio'),
        value: copy(
          'Medusa v2 modules and domain workflows',
          'Módulos Medusa v2 e fluxos de domínio',
        ),
      },
      {
        label: copy('Delivery', 'Entrega'),
        value: copy(
          'Containerized services and automated verification',
          'Serviços em containers e verificação automatizada',
        ),
      },
    ],
    decisions: [
      copy(
        'Keep stock and credit authority on the server.',
        'Manter autoridade de estoque e crédito no servidor.',
      ),
      copy(
        'Document architecture and operating rules next to the code.',
        'Documentar arquitetura e regras operacionais junto ao código.',
      ),
    ],
    quality: [
      copy(
        'Unit, integration and end-to-end verification cover critical workflows.',
        'Verificações unitárias, integradas e ponta a ponta cobrem fluxos críticos.',
      ),
      copy(
        'Docker supports a repeatable local environment.',
        'Docker oferece um ambiente local reproduzível.',
      ),
    ],
    evidence: [
      copy(
        'The public product and locally versioned implementation support the statements in this case.',
        'O produto público e a implementação local versionada sustentam as afirmações deste case.',
      ),
    ],
    accent: 'orange',
  },
  {
    slug: 'manual-dos-achados',
    kind: 'independent',
    title: 'Manual dos Achados',
    eyebrow: copy('Editorial intelligence platform', 'Plataforma de inteligência editorial'),
    summary: copy(
      'An editorial comparison product with structured content, search workflows and automation behind the publishing surface.',
      'Um produto editorial de comparações com conteúdo estruturado, fluxos de busca e automação por trás da publicação.',
    ),
    role: copy(
      'Product owner and full-stack engineer',
      'Responsável pelo produto e engenharia full stack',
    ),
    period: '2025 — 2026',
    image: asset('projects/manual-dos-achados.png'),
    imageAlt: copy(
      'Manual dos Achados editorial rankings',
      'Rankings editoriais do Manual dos Achados',
    ),
    liveUrl: 'https://www.manualdosachados.com.br/',
    sourceUrl: 'https://github.com/JRaamos/guide-to-findings-front-end',
    disciplines: [
      copy('Editorial UX', 'UX editorial'),
      copy('Structured content', 'Conteúdo estruturado'),
      copy('Search architecture', 'Arquitetura de busca'),
    ],
    stack: ['Next.js', 'React', 'Strapi', 'PostgreSQL', 'SEO workflows'],
    challenge: copy(
      'Turn product research and comparison into reusable, crawlable editorial templates rather than isolated pages.',
      'Transformar pesquisa e comparação de produtos em templates editoriais reutilizáveis e rastreáveis, não páginas isoladas.',
    ),
    contribution: [
      copy(
        'Built the reader-facing Next.js experience and reusable ranking, article, comparison and buying-guide templates.',
        'Construí a experiência do leitor em Next.js e templates reutilizáveis de rankings, artigos, comparações e guias.',
      ),
      copy(
        'Implemented dynamic metadata, canonical handling, structured data, sitemap and route-driven content services.',
        'Implementei metadados dinâmicos, canonical, dados estruturados, sitemap e serviços de conteúdo orientados por rota.',
      ),
    ],
    architecture: [
      {
        label: copy('Experience', 'Experiência'),
        value: copy('Next.js editorial frontend', 'Frontend editorial em Next.js'),
      },
      {
        label: copy('Content boundary', 'Fronteira de conteúdo'),
        value: copy('Structured public API services', 'Serviços estruturados de API pública'),
      },
      {
        label: copy('Discovery', 'Descoberta'),
        value: copy(
          'Metadata · schema · sitemap · reusable templates',
          'Metadados · schema · sitemap · templates reutilizáveis',
        ),
      },
    ],
    decisions: [
      copy(
        'Model reusable comparison content instead of hardcoding a page for every topic.',
        'Modelar conteúdo de comparação reutilizável em vez de fixar uma página para cada tema.',
      ),
      copy(
        'Keep affiliate disclosure and outbound interaction hooks visible in the reader experience.',
        'Manter transparência de afiliados e hooks de interação externa visíveis na experiência do leitor.',
      ),
    ],
    quality: [
      copy(
        'The public source confirms typed templates and SEO utilities; test scaffolding exists, but no passing automated suite is claimed.',
        'O código público confirma templates tipados e utilitários de SEO; há scaffolding de testes, mas nenhuma suíte aprovada é declarada.',
      ),
    ],
    evidence: [
      copy(
        'The live site and public frontend repository are linked. Previously described trend, clustering and ranking-sync automation is deliberately not claimed because the audited backend checkout does not contain it.',
        'O site e o frontend público estão vinculados. Automação de tendências, clustering e sincronização de rankings descrita anteriormente não é declarada porque o backend auditado não a contém.',
      ),
    ],
    accent: 'sand',
  },
  {
    slug: 'crypto-ai',
    kind: 'independent',
    title: 'Crypto AI',
    eyebrow: copy('Bounded AI market research', 'Pesquisa de mercado com IA delimitada'),
    summary: copy(
      'A read-only market research copilot that keeps deterministic analysis separate from contextual AI explanation.',
      'Um copiloto de pesquisa de mercado somente leitura que separa análise determinística de explicação contextual por IA.',
    ),
    role: copy(
      'Product owner and full-stack engineer',
      'Responsável pelo produto e engenharia full stack',
    ),
    period: '2025 — 2026',
    image: asset('projects/crypto-ai.png'),
    imageAlt: copy(
      'Crypto AI controlled research dashboard',
      'Painel controlado de pesquisa do Crypto AI',
    ),
    disciplines: [
      copy('Backend architecture', 'Arquitetura backend'),
      copy('AI boundary', 'Fronteira de IA'),
      copy('Data UX', 'UX de dados'),
    ],
    stack: ['React', 'Express', 'Prisma', 'OpenAI API', 'Zod', 'Vitest'],
    challenge: copy(
      'Use an AI model for explanation without allowing it to invent market state or execute financial actions.',
      'Usar um modelo de IA para explicação sem permitir que invente o estado do mercado ou execute ações financeiras.',
    ),
    contribution: [
      copy(
        'Designed deterministic market analysis, historical evaluation and contextual chat boundaries.',
        'Projetei análise determinística de mercado, avaliação histórica e limites do chat contextual.',
      ),
      copy(
        'Implemented validation, rate limiting, security headers and explicit error handling.',
        'Implementei validação, rate limiting, headers de segurança e tratamento explícito de erros.',
      ),
    ],
    architecture: [
      {
        label: copy('Inputs', 'Entradas'),
        value: copy(
          'Public market data and stored history',
          'Dados públicos de mercado e histórico armazenado',
        ),
      },
      {
        label: copy('Authority', 'Autoridade'),
        value: copy('Deterministic analysis services', 'Serviços de análise determinística'),
      },
      {
        label: copy('Explanation', 'Explicação'),
        value: copy('Context-bounded AI chat', 'Chat de IA limitado ao contexto'),
      },
    ],
    decisions: [
      copy(
        'Never give the model execution authority.',
        'Nunca dar autoridade de execução ao modelo.',
      ),
      copy(
        'Validate every request and keep analysis observable outside the prompt.',
        'Validar toda solicitação e manter a análise observável fora do prompt.',
      ),
    ],
    quality: [
      copy(
        'Vitest coverage, Zod validation, rate limits and security middleware protect the API boundary.',
        'Cobertura Vitest, validação Zod, limites de requisição e middleware de segurança protegem a API.',
      ),
    ],
    evidence: [
      copy(
        'The screenshot uses controlled data and makes no claim about financial returns or live trading.',
        'A captura usa dados controlados e não afirma retornos financeiros ou negociação ao vivo.',
      ),
    ],
    confidentiality: copy(
      'Private source · architecture disclosed safely',
      'Código privado · arquitetura apresentada com segurança',
    ),
    accent: 'ink',
  },
  {
    slug: 'buildbalance',
    kind: 'independent',
    title: 'BuildBalance',
    eyebrow: copy('Financial SaaS architecture', 'Arquitetura SaaS financeira'),
    summary: copy(
      'Project financial management with budgets, expenses, suppliers, permissions, reports and auditable domain events.',
      'Gestão financeira de projetos com orçamentos, despesas, fornecedores, permissões, relatórios e eventos de domínio auditáveis.',
    ),
    role: copy('Full-stack engineer', 'Engenheiro full stack'),
    period: '2024 — 2025',
    image: asset('projects/buildbalance.png'),
    imageAlt: copy(
      'BuildBalance dashboard with demonstration data',
      'Painel BuildBalance com dados de demonstração',
    ),
    sourceUrl: 'https://github.com/JRaamos/BuildBalance',
    disciplines: [
      copy('Domain modeling', 'Modelagem de domínio'),
      copy('Authorization', 'Autorização'),
      copy('Financial UI', 'Interface financeira'),
    ],
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Redux Toolkit', 'Jest'],
    challenge: copy(
      'Keep budgets, expenses and summaries consistent across collaborators and permission levels.',
      'Manter orçamentos, despesas e resumos consistentes entre colaboradores e níveis de permissão.',
    ),
    contribution: [
      copy(
        'Implemented the API, data model, project authorization, audit events and React dashboard.',
        'Implementei API, modelo de dados, autorização por projeto, eventos de auditoria e painel React.',
      ),
    ],
    architecture: [
      {
        label: copy('Client', 'Cliente'),
        value: copy('React · Redux Toolkit · RTK Query', 'React · Redux Toolkit · RTK Query'),
      },
      {
        label: copy('Domain API', 'API de domínio'),
        value: copy(
          'NestJS services and server calculations',
          'Serviços NestJS e cálculos no servidor',
        ),
      },
      {
        label: copy('Data', 'Dados'),
        value: copy(
          'PostgreSQL · Prisma · audit events',
          'PostgreSQL · Prisma · eventos de auditoria',
        ),
      },
    ],
    decisions: [
      copy('Calculate financial totals on the server.', 'Calcular totais financeiros no servidor.'),
      copy(
        'Enforce project role authorization at the API boundary.',
        'Aplicar autorização por papel e projeto na fronteira da API.',
      ),
    ],
    quality: [
      copy(
        'Jest verification and Docker-based infrastructure support repeatable checks.',
        'Verificação Jest e infraestrutura Docker apoiam checagens repetíveis.',
      ),
    ],
    evidence: [
      copy(
        'Demonstration values are not customer data or claimed business metrics.',
        'Valores de demonstração não são dados de clientes nem métricas comerciais declaradas.',
      ),
    ],
    accent: 'orange',
  },
  {
    slug: 'time-bubble',
    kind: 'independent',
    title: 'TimeBubble',
    eyebrow: copy('Android-native utility', 'Utilitário nativo para Android'),
    summary: copy(
      'A React Native control surface coordinating a native floating timer that stays useful beyond the app screen.',
      'Uma interface React Native coordenando um timer flutuante nativo que continua útil fora da tela do app.',
    ),
    role: copy('Mobile product engineer', 'Engenheiro de produto mobile'),
    period: '2025 — 2026',
    sourceUrl: 'https://github.com/JRaamos/time-bubble',
    disciplines: [
      copy('Mobile UX', 'UX mobile'),
      copy('Native boundary', 'Fronteira nativa'),
      copy('Local state', 'Estado local'),
    ],
    stack: ['Expo', 'React Native', 'Reanimated', 'Android native module', 'AsyncStorage'],
    challenge: copy(
      'Keep a timer visible across Android applications while making permission and foreground-service state understandable to the user.',
      'Manter um timer visível sobre apps Android tornando permissões e estado do serviço foreground compreensíveis para o usuário.',
    ),
    contribution: [
      copy(
        'Implemented start, pause, reset and appearance controls in React Native.',
        'Implementei controles de início, pausa, reset e aparência em React Native.',
      ),
      copy(
        'Connected the Expo surface to an Android native foreground overlay service.',
        'Conectei a superfície Expo a um serviço nativo Android de overlay em foreground.',
      ),
      copy(
        'Persisted user preferences and handled the overlay-permission journey explicitly.',
        'Persisiti preferências do usuário e tratei explicitamente a jornada de permissão de overlay.',
      ),
    ],
    architecture: [
      {
        label: copy('Control', 'Controle'),
        value: copy('Expo / React Native interface', 'Interface Expo / React Native'),
      },
      {
        label: copy('Bridge', 'Ponte'),
        value: copy('Android native module', 'Módulo nativo Android'),
      },
      {
        label: copy('Runtime', 'Execução'),
        value: copy(
          'Foreground service + floating overlay',
          'Serviço foreground + overlay flutuante',
        ),
      },
    ],
    decisions: [
      copy(
        'Guard the cross-app overlay capability to Android instead of implying iOS parity.',
        'Limitar o overlay entre apps ao Android em vez de sugerir paridade com iOS.',
      ),
      copy(
        'Keep permission state and local preferences visible to the control surface.',
        'Manter permissões e preferências locais visíveis para a interface de controle.',
      ),
    ],
    quality: [
      copy(
        'Platform guards and build/update scripts exist; no automated test suite was observed.',
        'Há proteções de plataforma e scripts de build/update; nenhuma suíte automatizada foi observada.',
      ),
    ],
    evidence: [
      copy(
        'Source is public. Store publication, current device behavior and background guarantees across Android vendors are not claimed.',
        'O código é público. Publicação em loja, comportamento atual em dispositivo e garantias de background entre fabricantes Android não são declarados.',
      ),
    ],
    accent: 'orange',
  },
  {
    slug: 'converse-com-amor',
    kind: 'independent',
    title: 'Converse com Amor',
    eyebrow: copy('Collaborative real-time product', 'Produto colaborativo em tempo real'),
    summary: copy(
      'Anonymous multi-participant sessions with private role data, shared state and security enforced in the database.',
      'Sessões anônimas com múltiplos participantes, dados privados por papel, estado compartilhado e segurança aplicada no banco.',
    ),
    role: copy(
      'Product owner and full-stack engineer',
      'Responsável pelo produto e engenharia full stack',
    ),
    period: '2026',
    image: asset('projects/converse-com-amor.png'),
    imageAlt: copy(
      'Converse com Amor collaborative experience',
      'Experiência colaborativa Converse com Amor',
    ),
    sourceUrl: 'https://github.com/JRaamos/Converse-com-amor',
    disciplines: [
      copy('Realtime product', 'Produto em tempo real'),
      copy('Database security', 'Segurança no banco'),
      copy('Operations', 'Operação'),
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Playwright'],
    challenge: copy(
      'Synchronize a shared session while protecting each participant’s private information.',
      'Sincronizar uma sessão compartilhada protegendo as informações privadas de cada participante.',
    ),
    contribution: [
      copy(
        'Implemented product flows, database schema, RLS, transactional RPCs, content tooling and operations documentation.',
        'Implementei fluxos de produto, schema, RLS, RPCs transacionais, ferramentas de conteúdo e documentação operacional.',
      ),
    ],
    architecture: [
      {
        label: copy('Experience', 'Experiência'),
        value: copy(
          'Next.js multi-participant application',
          'Aplicação Next.js para múltiplos participantes',
        ),
      },
      {
        label: copy('Authority', 'Autoridade'),
        value: copy(
          'Supabase Auth · PostgreSQL · RLS · RPCs',
          'Supabase Auth · PostgreSQL · RLS · RPCs',
        ),
      },
      {
        label: copy('Synchronization', 'Sincronização'),
        value: copy(
          'Realtime shared state with private boundaries',
          'Estado compartilhado em tempo real com fronteiras privadas',
        ),
      },
    ],
    decisions: [
      copy(
        'Derive authority from authenticated database membership.',
        'Derivar autoridade da associação autenticada no banco.',
      ),
      copy(
        'Use transactional RPCs for critical mutations.',
        'Usar RPCs transacionais para mutações críticas.',
      ),
    ],
    quality: [
      copy(
        'Lint, types, content validation, database tests, Playwright E2E and a client-secret audit form the verification path.',
        'Lint, tipos, validação de conteúdo, testes de banco, E2E Playwright e auditoria de segredos no cliente formam o caminho de verificação.',
      ),
    ],
    evidence: [
      copy(
        'No public adoption, private session content or production usage metric is claimed.',
        'Nenhuma adoção pública, conteúdo privado de sessões ou métrica de uso em produção é declarada.',
      ),
    ],
    accent: 'sand',
  },
];

export const experiences: ExperienceEntry[] = [
  {
    id: 'xapps',
    period: '2024 — Present',
    role: copy('Full-Stack & Mobile Developer', 'Desenvolvedor Full Stack & Mobile'),
    company: 'X-Apps',
    summary: copy(
      'Production product work across web, mobile, backend, integrations, CRM and AI-assisted features.',
      'Trabalho em produtos de produção entre web, mobile, backend, integrações, CRM e funcionalidades assistidas por IA.',
    ),
    stack: ['TypeScript', 'React', 'React Native', 'Node.js', 'CI/CD'],
  },
  {
    id: 'independent',
    period: '2023 — Present',
    role: copy('Independent Software Engineer', 'Engenheiro de Software Independente'),
    company: 'Independent',
    summary: copy(
      'End-to-end product architecture and delivery for commerce, editorial automation, AI research and financial workflows.',
      'Arquitetura e entrega ponta a ponta para comércio, automação editorial, pesquisa com IA e fluxos financeiros.',
    ),
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Playwright'],
  },
  {
    id: 'trybe',
    period: '2023 — 2024',
    role: copy('Front-End Instructor — Summer Program', 'Instrutor Front-End — Summer Program'),
    company: 'Trybe',
    summary: copy(
      'Technical mentoring, synchronous reviews and learning support across web fundamentals, React, Node.js, databases and testing.',
      'Mentoria técnica, revisões síncronas e suporte de aprendizagem em fundamentos web, React, Node.js, bancos de dados e testes.',
    ),
    stack: ['Mentoring', 'JavaScript', 'React', 'Node.js', 'Testing'],
  },
];

export const getWorkCase = (slug: string) => workCases.find((item) => item.slug === slug);

export const professionalCases = workCases.filter((item) => item.kind === 'professional');
export const independentCases = workCases.filter((item) => item.kind === 'independent');
