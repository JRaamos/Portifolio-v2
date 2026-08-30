import gsap from 'gsap';
import type { Locale } from '../../types/v3';

export type ArchitectureNodeId =
  | 'product'
  | 'web'
  | 'mobile'
  | 'admin'
  | 'pos'
  | 'api'
  | 'backend'
  | 'services'
  | 'search'
  | 'ai'
  | 'vector'
  | 'auth'
  | 'data'
  | 'providers'
  | 'crm'
  | 'messaging'
  | 'payments'
  | 'operations'
  | 'integrations'
  | 'cloud'
  | 'shipped';

export interface ArchitectureScene {
  id: string;
  nodes: Partial<Record<ArchitectureNodeId, { x: number; y: number }>>;
  edges: Array<[ArchitectureNodeId, ArchitectureNodeId]>;
}

export const architectureLabels: Record<ArchitectureNodeId, string> = {
  product: 'PRODUCT',
  web: 'WEB',
  mobile: 'MOBILE',
  admin: 'ADMIN',
  pos: 'POS',
  api: 'API',
  backend: 'BACKEND',
  services: 'SERVICES',
  search: 'SEARCH',
  ai: 'AI BOUNDARY',
  vector: 'VECTOR SEARCH',
  auth: 'AUTH',
  data: 'DATA',
  providers: 'PROVIDER ADAPTERS',
  crm: 'CRM',
  messaging: 'MESSAGING',
  payments: 'PAYMENTS',
  operations: 'OPERATIONS',
  integrations: 'INTEGRATIONS',
  cloud: 'CLOUD',
  shipped: 'SHIPPED',
};

export const architectureNodeIds = Object.keys(architectureLabels) as ArchitectureNodeId[];

export const professionalScenes: ArchitectureScene[] = [
  {
    id: 'learning',
    nodes: {
      web: { x: 120, y: 120 },
      mobile: { x: 120, y: 445 },
      api: { x: 395, y: 280 },
      search: { x: 650, y: 120 },
      ai: { x: 820, y: 280 },
      data: { x: 650, y: 445 },
    },
    edges: [
      ['web', 'api'],
      ['mobile', 'api'],
      ['api', 'search'],
      ['search', 'ai'],
      ['api', 'data'],
      ['data', 'ai'],
    ],
  },
  {
    id: 'automotive',
    nodes: {
      web: { x: 95, y: 135 },
      mobile: { x: 95, y: 420 },
      api: { x: 355, y: 275 },
      providers: { x: 615, y: 125 },
      data: { x: 615, y: 470 },
      crm: { x: 635, y: 285 },
      messaging: { x: 835, y: 420 },
    },
    edges: [
      ['web', 'api'],
      ['mobile', 'api'],
      ['api', 'providers'],
      ['api', 'crm'],
      ['api', 'data'],
      ['crm', 'messaging'],
    ],
  },
  {
    id: 'operations',
    nodes: {
      admin: { x: 80, y: 90 },
      pos: { x: 80, y: 270 },
      mobile: { x: 80, y: 450 },
      api: { x: 380, y: 270 },
      data: { x: 670, y: 115 },
      payments: { x: 670, y: 300 },
      operations: { x: 670, y: 475 },
    },
    edges: [
      ['admin', 'api'],
      ['pos', 'api'],
      ['mobile', 'api'],
      ['api', 'data'],
      ['api', 'payments'],
      ['api', 'operations'],
    ],
  },
];

export const engineeringModes: Record<string, ArchitectureScene> = {
  web: {
    id: 'web',
    nodes: {
      web: { x: 90, y: 270 },
      api: { x: 350, y: 270 },
      backend: { x: 610, y: 270 },
      data: { x: 825, y: 270 },
    },
    edges: [
      ['web', 'api'],
      ['api', 'backend'],
      ['backend', 'data'],
    ],
  },
  mobile: {
    id: 'mobile',
    nodes: {
      mobile: { x: 100, y: 270 },
      api: { x: 390, y: 270 },
      auth: { x: 700, y: 135 },
      data: { x: 700, y: 410 },
    },
    edges: [
      ['mobile', 'api'],
      ['api', 'auth'],
      ['api', 'data'],
    ],
  },
  backend: {
    id: 'backend',
    nodes: {
      api: { x: 100, y: 270 },
      services: { x: 390, y: 270 },
      data: { x: 710, y: 120 },
      integrations: { x: 710, y: 420 },
    },
    edges: [
      ['api', 'services'],
      ['services', 'data'],
      ['services', 'integrations'],
    ],
  },
  ai: {
    id: 'ai',
    nodes: {
      product: { x: 90, y: 270 },
      backend: { x: 330, y: 270 },
      ai: { x: 585, y: 270 },
      services: { x: 815, y: 135 },
      vector: { x: 815, y: 410 },
    },
    edges: [
      ['product', 'backend'],
      ['backend', 'ai'],
      ['ai', 'services'],
      ['ai', 'vector'],
    ],
  },
  platform: {
    id: 'platform',
    nodes: {
      web: { x: 60, y: 85 },
      mobile: { x: 60, y: 270 },
      admin: { x: 60, y: 455 },
      api: { x: 315, y: 270 },
      services: { x: 565, y: 270 },
      data: { x: 815, y: 85 },
      integrations: { x: 815, y: 270 },
      ai: { x: 815, y: 455 },
    },
    edges: [
      ['web', 'api'],
      ['mobile', 'api'],
      ['admin', 'api'],
      ['api', 'services'],
      ['services', 'data'],
      ['services', 'integrations'],
      ['services', 'ai'],
    ],
  },
};

export const modeCopy: Record<
  string,
  { label: string; title: Record<Locale, string>; body: Record<Locale, string> }
> = {
  web: {
    label: 'WEB',
    title: { en: 'Interfaces are system states.', pt: 'Interfaces são estados do sistema.' },
    body: {
      en: 'React surfaces built around explicit loading, failure, empty and success behavior.',
      pt: 'Superfícies React construídas com estados explícitos de carregamento, falha, vazio e sucesso.',
    },
  },
  mobile: {
    label: 'MOBILE',
    title: {
      en: 'One service, platform-aware journeys.',
      pt: 'Um serviço, jornadas conscientes da plataforma.',
    },
    body: {
      en: 'React Native flows that share contracts without ignoring native interaction and lifecycle constraints.',
      pt: 'Fluxos React Native que compartilham contratos sem ignorar interação e ciclo de vida nativos.',
    },
  },
  backend: {
    label: 'BACKEND',
    title: {
      en: 'Authority belongs at the service boundary.',
      pt: 'A autoridade pertence à fronteira de serviço.',
    },
    body: {
      en: 'Typed APIs, authorization, business rules, data integrity and integrations remain observable.',
      pt: 'APIs tipadas, autorização, regras de negócio, integridade de dados e integrações permanecem observáveis.',
    },
  },
  ai: {
    label: 'AI',
    title: { en: 'Intelligence needs a boundary.', pt: 'Inteligência precisa de uma fronteira.' },
    body: {
      en: 'The backend controls inputs, retrieval, validation and fallback while the model assists inside a bounded role.',
      pt: 'O backend controla entradas, recuperação, validação e fallback enquanto o modelo auxilia dentro de um papel limitado.',
    },
  },
  platform: {
    label: 'PLATFORM',
    title: { en: 'The product is the connection.', pt: 'O produto é a conexão.' },
    body: {
      en: 'Web, mobile, admin, services, data, integrations and AI evolve as one operating system.',
      pt: 'Web, mobile, admin, serviços, dados, integrações e IA evoluem como um único sistema operacional.',
    },
  },
};

export function setArchitectureScene(
  root: SVGSVGElement,
  scene: ArchitectureScene,
  options: { duration?: number; ease?: string; paused?: boolean } = {},
) {
  const duration = options.duration ?? 0.65;
  const ease = options.ease ?? 'power3.inOut';
  const timeline = gsap.timeline({ paused: options.paused, defaults: { duration, ease } });

  architectureNodeIds.forEach((id) => {
    const node = root.querySelector<SVGGElement>(`[data-node="${id}"]`);
    if (!node) return;
    const position = scene.nodes[id];
    timeline.to(
      node,
      {
        x: position?.x ?? 500,
        y: position?.y ?? 300,
        autoAlpha: position ? 1 : 0,
        scale: position ? 1 : 0.78,
      },
      0,
    );
  });

  const lines = [...root.querySelectorAll<SVGLineElement>('[data-edge]')];
  lines.forEach((line, index) => {
    const edge = scene.edges[index];
    if (!edge) {
      timeline.to(line, { autoAlpha: 0 }, 0);
      return;
    }
    const start = scene.nodes[edge[0]];
    const end = scene.nodes[edge[1]];
    if (!start || !end) return;
    timeline.to(
      line,
      {
        attr: {
          x1: start.x + 76,
          y1: start.y + 22,
          x2: end.x + 76,
          y2: end.y + 22,
        },
        autoAlpha: 1,
      },
      0,
    );
  });

  return timeline;
}
