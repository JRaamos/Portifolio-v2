import type { AdditionalProject, ExperienceEntry, LocalizedText, WorkCase } from '../types/v3';

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
    title: copy('Jonathan Febraio', 'Jonathan Febraio'),
    intro: copy(
      'I build products across web, backend, mobile and AI — from system design to production delivery.',
      'Construo produtos entre web, backend, mobile e IA — do desenho do sistema à entrega em produção.',
    ),
    primary: copy('Explore selected work', 'Explorar trabalho selecionado'),
    secondary: copy('Open LinkedIn', 'Abrir LinkedIn'),
    location: copy('Brazil · UTC−3 · Remote worldwide', 'Brasil · UTC−3 · Remoto global'),
    scroll: copy('Follow the request', 'Acompanhe a requisição'),
  },
  statement: copy(
    'The interface is only one surface. I work through the API, data, mobile, automation and delivery layers that make a product hold together.',
    'A interface é apenas uma superfície. Eu atravesso API, dados, mobile, automação e entrega para fazer o produto funcionar como um sistema.',
  ),
  professional: {
    index: copy('01 / Selected professional work', '01 / Trabalho profissional selecionado'),
    title: copy(
      'Engineering contributions delivered through X-Apps.',
      'Contribuições de engenharia entregues através da X-Apps.',
    ),
    intro: copy(
      'Three product domains. One architecture that changes as the work changes. Client identities and private operations stay private.',
      'Três domínios de produto. Uma arquitetura que muda conforme o trabalho muda. Identidades de clientes e operações privadas permanecem protegidas.',
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
    title: copy('Products I can show in full.', 'Produtos que posso mostrar por inteiro.'),
    intro: copy(
      'Independent products are where I take full responsibility for the model, interface, infrastructure and operating choices.',
      'Nos produtos independentes, assumo responsabilidade completa pelo modelo, interface, infraestrutura e decisões de operação.',
    ),
  },
  additional: {
    index: copy('04 / More public work', '04 / Mais projetos públicos'),
    title: copy('Other systems worth opening.', 'Outros sistemas que vale a pena abrir.'),
    intro: copy(
      'A focused selection from my public repositories — chosen for product depth, technical boundaries and maintained delivery paths.',
      'Uma seleção objetiva dos meus repositórios públicos — escolhida pela profundidade do produto, limites técnicos e caminhos de entrega mantidos.',
    ),
    source: copy('Inspect repository', 'Ver repositório'),
    all: copy('Explore all public repositories', 'Explorar todos os repositórios públicos'),
  },
  experience: {
    index: copy('05 / Experience', '05 / Experiência'),
    title: copy('A path shaped by ownership.', 'Uma trajetória guiada por responsabilidade.'),
  },
  about: {
    index: copy('06 / Working principles', '06 / Princípios de trabalho'),
    title: copy(
      'I like the part where the diagram meets reality.',
      'Eu gosto da parte em que o diagrama encontra a realidade.',
    ),
    body: copy(
      'I am a Brazil-based, JavaScript-first Software Engineer working across backend, web and mobile, using TypeScript where stronger contracts improve the system. I care about legible architecture, secure boundaries, useful interfaces and verification that survives beyond a demo.',
      'Sou Engenheiro de Software no Brasil, com JavaScript como base entre backend, web e mobile, usando TypeScript quando contratos mais fortes melhoram o sistema. Valorizo arquitetura legível, fronteiras seguras, interfaces úteis e verificações que sobrevivem além da demonstração.',
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
    index: copy('07 / Contact', '07 / Contato'),
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
    whatsapp: copy('Talk on WhatsApp', 'Falar no WhatsApp'),
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
    gallery: copy('Product views', 'Visões do produto'),
    galleryNote: copy(
      'Real interfaces and engineering material from the product.',
      'Interfaces reais e material de engenharia do produto.',
    ),
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
    slug: 'learning-intelligence-platform',
    kind: 'professional',
    title: 'Learning & Intelligence Platform',
    eyebrow: copy('Case 01 · Professional system', 'Case 01 · Sistema profissional'),
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
    stack: [
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Strapi 5',
      'Qdrant',
      'FastAPI',
      'CI/CD',
    ],
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
    slug: 'automotive-crm-platform',
    kind: 'professional',
    title: 'Automotive Marketplace & CRM Ecosystem',
    eyebrow: copy('Case 02 · Professional system', 'Case 02 · Sistema profissional'),
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
    slug: 'operations-platform',
    kind: 'professional',
    title: 'Multi-Surface Operations Platform',
    eyebrow: copy('Case 03 · Professional system', 'Case 03 · Sistema profissional'),
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
    image: asset('projects/febraio-tech-home.png'),
    imageAlt: copy('FebraioTech commerce interface', 'Interface de comércio da FebraioTech'),
    gallery: [
      {
        src: asset('projects/febraio-tech-home.png'),
        alt: copy(
          'FebraioTech public storefront home page',
          'Página inicial pública da loja FebraioTech',
        ),
        label: copy('Live storefront', 'Loja pública'),
      },
      {
        src: asset('projects/febraio-tech-catalog.png'),
        alt: copy(
          'FebraioTech product catalog with filters and product cards',
          'Catálogo da FebraioTech com filtros e produtos',
        ),
        label: copy('Product discovery', 'Descoberta de produtos'),
      },
      {
        src: asset('projects/febraio-tech-product.png'),
        alt: copy(
          'FebraioTech product detail with gallery, price and delivery options',
          'Detalhe de produto da FebraioTech com galeria, preço e opções de entrega',
        ),
        label: copy('Purchase detail', 'Detalhe de compra'),
      },
    ],
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
    image: asset('projects/manual-dos-achados-home.png'),
    imageAlt: copy(
      'Manual dos Achados editorial rankings',
      'Rankings editoriais do Manual dos Achados',
    ),
    gallery: [
      {
        src: asset('projects/manual-dos-achados-home.png'),
        alt: copy(
          'Manual dos Achados editorial home page',
          'Página inicial editorial do Manual dos Achados',
        ),
        label: copy('Editorial discovery', 'Descoberta editorial'),
      },
      {
        src: asset('projects/manual-dos-achados-how-it-works.png'),
        alt: copy(
          'Manual dos Achados explanation of its research and recommendation process',
          'Explicação do processo de pesquisa e recomendação do Manual dos Achados',
        ),
        label: copy('Reader trust model', 'Modelo de confiança do leitor'),
      },
    ],
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
    gallery: [
      {
        src: asset('projects/crypto-ai.png'),
        alt: copy(
          'Crypto AI controlled market analysis dashboard',
          'Painel controlado de análise de mercado do Crypto AI',
        ),
        label: copy('Controlled analysis', 'Análise controlada'),
      },
      {
        src: asset('projects/crypto-ai-engineering.png'),
        alt: copy(
          'Crypto AI engineering architecture and safety boundaries',
          'Arquitetura de engenharia e limites de segurança do Crypto AI',
        ),
        label: copy('Architecture and guardrails', 'Arquitetura e proteções'),
      },
    ],
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
    slug: 'timebubble',
    kind: 'independent',
    title: 'TimeBubble',
    eyebrow: copy('Published Android utility', 'Utilitário Android publicado'),
    summary: copy(
      'A published floating timer that stays visible over other Android apps and connects a JavaScript product surface to a native foreground service.',
      'Um cronômetro flutuante publicado que permanece visível sobre outros apps Android e conecta uma superfície em JavaScript a um serviço nativo em primeiro plano.',
    ),
    role: copy('Product owner and mobile engineer', 'Responsável pelo produto e engenharia mobile'),
    period: '2026 — Present',
    image: asset('projects/timebubble-home.webp'),
    imageAlt: copy(
      'TimeBubble floating timer control screen from Google Play',
      'Tela de controle do cronômetro flutuante TimeBubble na Google Play',
    ),
    imageFit: 'contain',
    preview: 'mobile-trio',
    gallery: [
      {
        src: asset('projects/timebubble-home.webp'),
        alt: copy(
          'Published TimeBubble home screen with floating timer controls',
          'Tela inicial publicada do TimeBubble com controles do cronômetro flutuante',
        ),
        label: copy('Published product', 'Produto publicado'),
        fit: 'contain',
      },
      {
        src: asset('projects/timebubble-status.webp'),
        alt: copy(
          'TimeBubble permission, overlay and timer state screen',
          'Tela de permissões, sobreposição e estado do cronômetro do TimeBubble',
        ),
        label: copy('Device state', 'Estado do dispositivo'),
        fit: 'contain',
      },
      {
        src: asset('projects/timebubble-customization.webp'),
        alt: copy(
          'TimeBubble floating card color customization screen',
          'Tela de personalização de cores do card flutuante TimeBubble',
        ),
        label: copy('Native customization', 'Personalização nativa'),
        fit: 'contain',
      },
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=br.com.jonathanfebraio.timebubble',
    sourceUrl: 'https://github.com/JRaamos/time-bubble',
    sourceLabel: copy('Inspect mobile source', 'Ver código mobile'),
    disciplines: [
      copy('Mobile product', 'Produto mobile'),
      copy('React Native + Android', 'React Native + Android'),
      copy('Store delivery', 'Entrega na loja'),
    ],
    stack: [
      'JavaScript',
      'React Native',
      'Expo 54',
      'Kotlin',
      'Android Foreground Service',
      'AsyncStorage',
      'EAS',
    ],
    challenge: copy(
      'Keep a timer visible and controllable across other Android apps without depending on an account or remote backend.',
      'Manter um cronômetro visível e controlável sobre outros apps Android sem depender de conta ou backend remoto.',
    ),
    contribution: [
      copy(
        'Built the React Native control surface, persistent preferences and explicit permission states.',
        'Construí a superfície de controle em React Native, preferências persistentes e estados explícitos de permissão.',
      ),
      copy(
        'Implemented the native Android overlay and foreground-service boundary for background continuity.',
        'Implementei a sobreposição nativa Android e a fronteira de serviço em primeiro plano para continuidade em background.',
      ),
      copy(
        'Prepared production delivery through Expo/EAS and published the Android product through Google Play.',
        'Preparei a entrega de produção com Expo/EAS e publiquei o produto Android na Google Play.',
      ),
    ],
    architecture: [
      {
        label: copy('Product surface', 'Superfície do produto'),
        value: copy('JavaScript + React Native controls', 'Controles em JavaScript + React Native'),
      },
      {
        label: copy('Native boundary', 'Fronteira nativa'),
        value: copy(
          'Kotlin overlay + Android foreground service',
          'Sobreposição Kotlin + serviço Android em primeiro plano',
        ),
      },
      {
        label: copy('Device state', 'Estado do dispositivo'),
        value: copy(
          'Local preferences, lifecycle and explicit permissions',
          'Preferências locais, ciclo de vida e permissões explícitas',
        ),
      },
    ],
    decisions: [
      copy(
        'Keep timer preferences and product state on the device.',
        'Manter preferências e estado do cronômetro no dispositivo.',
      ),
      copy(
        'Treat Android overlay permission as a visible product state.',
        'Tratar a permissão de sobreposição Android como estado visível do produto.',
      ),
      copy(
        'Use a native foreground service where the mobile lifecycle demands platform authority.',
        'Usar um serviço nativo em primeiro plano onde o ciclo mobile exige autoridade da plataforma.',
      ),
    ],
    quality: [
      copy(
        'The public source exposes the React Native-to-Kotlin boundary, lifecycle handling and production build configuration.',
        'O código público expõe a fronteira React Native–Kotlin, o tratamento do ciclo de vida e a configuração de build de produção.',
      ),
      copy(
        'No passing automated test suite is claimed for the current repository snapshot.',
        'Nenhuma suíte automatizada aprovada é declarada para o snapshot atual do repositório.',
      ),
    ],
    evidence: [
      copy(
        'Google Play currently lists the product as “Cronômetro Flutuante” by Febraio Tecnologia; the portfolio keeps TimeBubble as the project name and links the exact package.',
        'A Google Play lista atualmente o produto como “Cronômetro Flutuante”, da Febraio Tecnologia; o portfólio mantém TimeBubble como nome do projeto e vincula o pacote exato.',
      ),
      copy(
        'The gallery uses the real screenshots served by the published Google Play listing.',
        'A galeria usa capturas reais servidas pela publicação na Google Play.',
      ),
    ],
    accent: 'ink',
  },
  {
    slug: 'sistema-de-agendamento',
    kind: 'independent',
    title: 'Sistema de Agendamento',
    eyebrow: copy('Full-stack scheduling system', 'Sistema full stack de agendamento'),
    summary: copy(
      'A barber scheduling system connecting customer availability, authenticated operations, dashboard views and Google Calendar integration.',
      'Um sistema de agendamento para barbearia conectando disponibilidade do cliente, operação autenticada, dashboards e integração com Google Calendar.',
    ),
    role: copy('Full-stack engineer', 'Engenheiro full stack'),
    period: '2023 — 2024',
    image: asset('projects/scheduling-system-product.svg'),
    imageAlt: copy(
      'Source-verified product view of the scheduling system',
      'Visão de produto verificada no código do sistema de agendamento',
    ),
    gallery: [
      {
        src: asset('projects/scheduling-system-product.svg'),
        alt: copy(
          'Scheduling product view with calendar, service flow and dashboard',
          'Visão do produto com calendário, fluxo de serviços e dashboard',
        ),
        label: copy('Product surfaces', 'Superfícies do produto'),
      },
      {
        src: asset('projects/scheduling-system-engineering.svg'),
        alt: copy(
          'Scheduling system architecture from React to Express, MySQL and Google Calendar',
          'Arquitetura do sistema de React a Express, MySQL e Google Calendar',
        ),
        label: copy('Full-stack architecture', 'Arquitetura full stack'),
      },
      {
        src: asset('projects/scheduling-system-logo.png'),
        alt: copy('Original Stylus scheduling system logo', 'Logo original do sistema Stylus'),
        label: copy('Original product identity', 'Identidade original do produto'),
        fit: 'contain',
      },
    ],
    sourceUrl: 'https://github.com/JRaamos/Sistema-de-Agendamento',
    disciplines: [
      copy('Scheduling UX', 'UX de agendamento'),
      copy('Backend + authentication', 'Backend + autenticação'),
      copy('Operational dashboard', 'Dashboard operacional'),
    ],
    stack: [
      'React',
      'TypeScript',
      'Express',
      'MySQL',
      'Sequelize',
      'FullCalendar',
      'Google Calendar API',
      'Mocha',
    ],
    challenge: copy(
      'Coordinate customer bookings, service duration, professional availability and operational visibility through one client-server workflow.',
      'Coordenar reservas do cliente, duração dos serviços, disponibilidade profissional e visibilidade operacional em um único fluxo cliente-servidor.',
    ),
    contribution: [
      copy(
        'Built customer booking, schedule review and cancellation journeys around calendar availability.',
        'Construí jornadas de reserva, revisão de agenda e cancelamento a partir da disponibilidade no calendário.',
      ),
      copy(
        'Implemented Express services, JWT authentication and Sequelize models for schedules, services and operational rules.',
        'Implementei serviços Express, autenticação JWT e modelos Sequelize para agendas, serviços e regras operacionais.',
      ),
      copy(
        'Connected administrative dashboards, charts, days off and Google Calendar event handling.',
        'Conectei dashboards administrativos, gráficos, folgas e tratamento de eventos do Google Calendar.',
      ),
    ],
    architecture: [
      {
        label: copy('Customer experience', 'Experiência do cliente'),
        value: copy('React + Vite + FullCalendar', 'React + Vite + FullCalendar'),
      },
      {
        label: copy('Service authority', 'Autoridade do serviço'),
        value: copy(
          'Express routes · JWT · domain services',
          'Rotas Express · JWT · serviços de domínio',
        ),
      },
      {
        label: copy('Persistence + integration', 'Persistência + integração'),
        value: copy(
          'MySQL · Sequelize · Google Calendar API',
          'MySQL · Sequelize · Google Calendar API',
        ),
      },
    ],
    decisions: [
      copy(
        'Model services and schedules as relational server-side state.',
        'Modelar serviços e agendamentos como estado relacional no servidor.',
      ),
      copy(
        'Separate the customer booking journey from authenticated barber operations.',
        'Separar a jornada de reserva do cliente da operação autenticada do barbeiro.',
      ),
      copy(
        'Keep external calendar synchronization behind a dedicated service boundary.',
        'Manter a sincronização com calendário externo atrás de uma fronteira de serviço dedicada.',
      ),
    ],
    quality: [
      copy(
        'The backend includes Mocha integration-test structure, validation, migrations and seed data.',
        'O backend inclui estrutura de testes de integração com Mocha, validação, migrations e dados iniciais.',
      ),
      copy(
        'The current live URL is not claimed as operational because it did not respond reliably during this portfolio review.',
        'A URL pública atual não é declarada operacional porque não respondeu com confiabilidade durante esta revisão do portfólio.',
      ),
    ],
    evidence: [
      copy(
        'The public GitHub repository currently exposes the full-stack source and project documentation; the featured visuals are source-verified engineering views, not production screenshots.',
        'O repositório público no GitHub expõe o código full stack e a documentação; os visuais em destaque são vistas de engenharia verificadas no código, não capturas de produção.',
      ),
    ],
    accent: 'sand',
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
    gallery: [
      {
        src: asset('projects/buildbalance.png'),
        alt: copy(
          'BuildBalance financial workspace with demonstration data',
          'Espaço financeiro do BuildBalance com dados de demonstração',
        ),
        label: copy('Financial workspace', 'Espaço financeiro'),
      },
      {
        src: asset('projects/buildbalance-engineering.png'),
        alt: copy(
          'BuildBalance domain architecture and financial safeguards',
          'Arquitetura de domínio e proteções financeiras do BuildBalance',
        ),
        label: copy('Domain architecture', 'Arquitetura de domínio'),
      },
    ],
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
];

export const additionalProjects: AdditionalProject[] = [
  {
    title: 'Converse com Amor',
    summary: copy(
      'A collaborative real-time training product with anonymous sessions, row-level security and end-to-end validation.',
      'Um produto colaborativo de treinamento em tempo real com sessões anônimas, segurança por linha e validação ponta a ponta.',
    ),
    stack: ['Next.js 16', 'React 19', 'Supabase', 'Realtime', 'Playwright'],
    sourceUrl: 'https://github.com/JRaamos/Converse-com-amor',
    flow: ['SESSION', 'REALTIME', 'RLS'],
  },
  {
    title: 'Congress Time',
    summary: copy(
      'A responsive schedule companion with browser-local persistence and portable JSON backup and restore.',
      'Um companheiro responsivo de agenda com persistência local no navegador e backup e restauração portáteis em JSON.',
    ),
    stack: ['React 19', 'Vite', 'React Router', 'Styled Components', 'Node Test'],
    sourceUrl: 'https://github.com/JRaamos/congress-time-web',
    flow: ['SCHEDULE', 'LOCAL DATA', 'BACKUP'],
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
    stack: ['JavaScript', 'React', 'React Native', 'Node.js', 'TypeScript', 'CI/CD'],
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
    stack: ['JavaScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Playwright'],
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
