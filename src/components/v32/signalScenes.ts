import type { Locale } from '../../types/v3';
import type { SignalSceneDefinition } from '../../engine/signal/types';

export const heroSignalScene: SignalSceneDefinition = {
  id: 'hero-system',
  nodes: [
    { id: 'product', label: 'PRODUCT', x: 0.14, y: 0.2, important: true },
    { id: 'web', label: 'WEB', x: 0.14, y: 0.54 },
    { id: 'mobile', label: 'MOBILE', x: 0.2, y: 0.82 },
    { id: 'api', label: 'API', x: 0.49, y: 0.5, important: true },
    { id: 'ai', label: 'AI', x: 0.74, y: 0.2 },
    { id: 'backend', label: 'BACKEND', x: 0.76, y: 0.58 },
    { id: 'data', label: 'DATA', x: 0.88, y: 0.82 },
    { id: 'shipped', label: 'SHIPPED', x: 0.72, y: 0.88, important: true },
  ],
  edges: [
    { from: 'product', to: 'api' },
    { from: 'web', to: 'api' },
    { from: 'mobile', to: 'api' },
    { from: 'api', to: 'ai' },
    { from: 'api', to: 'backend' },
    { from: 'backend', to: 'data' },
    { from: 'backend', to: 'shipped' },
  ],
};

export interface LabModeDefinition {
  id: 'web' | 'mobile' | 'backend' | 'ai' | 'platform';
  label: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  principle: Record<Locale, string>;
  technologies: string[];
  scene: SignalSceneDefinition;
}

export const labModes: LabModeDefinition[] = [
  {
    id: 'web',
    label: 'WEB',
    title: {
      en: 'Interfaces are observable system states.',
      pt: 'Interfaces são estados observáveis do sistema.',
    },
    body: {
      en: 'React surfaces keep loading, failure, empty and success behavior explicit while the service remains authoritative.',
      pt: 'Superfícies React mantêm carregamento, falha, vazio e sucesso explícitos enquanto o serviço permanece autoritativo.',
    },
    principle: {
      en: 'React → API → Node.js → PostgreSQL',
      pt: 'React → API → Node.js → PostgreSQL',
    },
    technologies: ['React 19', 'TypeScript', 'Next.js', 'REST APIs', 'Playwright'],
    scene: {
      id: 'lab-web',
      nodes: [
        { id: 'react', label: 'REACT', x: 0.13, y: 0.5, important: true },
        { id: 'api', label: 'API', x: 0.39, y: 0.5 },
        { id: 'node', label: 'NODE.JS', x: 0.65, y: 0.5 },
        { id: 'postgres', label: 'POSTGRESQL', x: 0.87, y: 0.5, important: true },
      ],
      edges: [
        { from: 'react', to: 'api' },
        { from: 'api', to: 'node' },
        { from: 'node', to: 'postgres' },
      ],
    },
  },
  {
    id: 'mobile',
    label: 'MOBILE',
    title: {
      en: 'Shared contracts, platform-aware journeys.',
      pt: 'Contratos compartilhados, jornadas conscientes da plataforma.',
    },
    body: {
      en: 'React Native journeys share service contracts without ignoring native lifecycle, device state or delivery constraints.',
      pt: 'Jornadas React Native compartilham contratos sem ignorar ciclo de vida nativo, estado do dispositivo ou restrições de entrega.',
    },
    principle: {
      en: 'React Native → API → Services → Data',
      pt: 'React Native → API → Serviços → Dados',
    },
    technologies: ['React Native', 'Expo', 'Reanimated', 'AsyncStorage', 'EAS'],
    scene: {
      id: 'lab-mobile',
      nodes: [
        { id: 'react-native', label: 'REACT NATIVE', x: 0.12, y: 0.5, important: true },
        { id: 'api', label: 'API', x: 0.39, y: 0.5 },
        { id: 'services', label: 'SERVICES', x: 0.66, y: 0.34 },
        { id: 'device', label: 'DEVICE STATE', x: 0.66, y: 0.7 },
        { id: 'data', label: 'DATA', x: 0.88, y: 0.5, important: true },
      ],
      edges: [
        { from: 'react-native', to: 'api' },
        { from: 'api', to: 'services' },
        { from: 'api', to: 'device' },
        { from: 'services', to: 'data' },
        { from: 'device', to: 'data' },
      ],
    },
  },
  {
    id: 'backend',
    label: 'BACKEND',
    title: {
      en: 'Authority lives at the service boundary.',
      pt: 'A autoridade vive na fronteira de serviço.',
    },
    body: {
      en: 'Typed routes lead to explicit domain rules, background work and durable data with authorization kept server-side.',
      pt: 'Rotas tipadas levam a regras de domínio, trabalho assíncrono e dados duráveis com autorização no servidor.',
    },
    principle: {
      en: 'REST → Node/NestJS → Jobs → PostgreSQL',
      pt: 'REST → Node/NestJS → Jobs → PostgreSQL',
    },
    technologies: ['Node.js', 'NestJS', 'Express', 'Prisma', 'PostgreSQL'],
    scene: {
      id: 'lab-backend',
      nodes: [
        { id: 'rest', label: 'REST', x: 0.12, y: 0.5, important: true },
        { id: 'auth', label: 'AUTH', x: 0.38, y: 0.3 },
        { id: 'domain', label: 'DOMAIN RULES', x: 0.38, y: 0.68 },
        { id: 'jobs', label: 'JOBS', x: 0.68, y: 0.3 },
        { id: 'postgres', label: 'POSTGRESQL', x: 0.86, y: 0.58, important: true },
      ],
      edges: [
        { from: 'rest', to: 'auth' },
        { from: 'rest', to: 'domain' },
        { from: 'auth', to: 'jobs' },
        { from: 'domain', to: 'postgres' },
        { from: 'jobs', to: 'postgres' },
      ],
    },
  },
  {
    id: 'ai',
    label: 'AI',
    title: {
      en: 'Intelligence stays inside a bounded role.',
      pt: 'A inteligência permanece dentro de um papel limitado.',
    },
    body: {
      en: 'The backend controls input, retrieval, validation and fallback while the model explains inside a constrained boundary.',
      pt: 'O backend controla entrada, recuperação, validação e fallback enquanto o modelo explica dentro de uma fronteira limitada.',
    },
    principle: {
      en: 'Product → Backend → OpenAI → Vector Search → Context',
      pt: 'Produto → Backend → OpenAI → Busca vetorial → Contexto',
    },
    technologies: ['OpenAI API', 'Zod', 'Qdrant', 'FastAPI', 'Rate limiting'],
    scene: {
      id: 'lab-ai',
      nodes: [
        { id: 'product', label: 'PRODUCT', x: 0.1, y: 0.5, important: true },
        { id: 'backend', label: 'BACKEND', x: 0.32, y: 0.5 },
        { id: 'openai', label: 'AI BOUNDARY', x: 0.57, y: 0.3, important: true },
        { id: 'vector', label: 'VECTOR SEARCH', x: 0.57, y: 0.72 },
        { id: 'context', label: 'CONTEXT', x: 0.86, y: 0.5, important: true },
      ],
      edges: [
        { from: 'product', to: 'backend' },
        { from: 'backend', to: 'openai' },
        { from: 'backend', to: 'vector' },
        { from: 'openai', to: 'context' },
        { from: 'vector', to: 'context' },
      ],
    },
  },
  {
    id: 'platform',
    label: 'PLATFORM',
    title: { en: 'The product is the connection.', pt: 'O produto é a conexão.' },
    body: {
      en: 'Frontend, API, integrations, data and delivery evolve as one observable operating system rather than isolated layers.',
      pt: 'Frontend, API, integrações, dados e entrega evoluem como um sistema operacional observável, não camadas isoladas.',
    },
    principle: {
      en: 'Frontend → API → Integrations → Cloud → Delivery',
      pt: 'Frontend → API → Integrações → Cloud → Entrega',
    },
    technologies: ['TypeScript', 'Docker', 'CI/CD', 'Provider adapters', 'PostgreSQL'],
    scene: {
      id: 'lab-platform',
      nodes: [
        { id: 'frontend', label: 'FRONTEND', x: 0.09, y: 0.28 },
        { id: 'mobile', label: 'MOBILE', x: 0.09, y: 0.72 },
        { id: 'api', label: 'API', x: 0.34, y: 0.5, important: true },
        { id: 'integrations', label: 'INTEGRATIONS', x: 0.59, y: 0.28 },
        { id: 'data', label: 'DATA', x: 0.59, y: 0.72 },
        { id: 'delivery', label: 'DELIVERY', x: 0.87, y: 0.5, important: true },
      ],
      edges: [
        { from: 'frontend', to: 'api' },
        { from: 'mobile', to: 'api' },
        { from: 'api', to: 'integrations' },
        { from: 'api', to: 'data' },
        { from: 'integrations', to: 'delivery' },
        { from: 'data', to: 'delivery' },
      ],
    },
  },
];
