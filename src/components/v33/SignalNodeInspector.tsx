import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { SignalNodeDefinition, SignalSceneDefinition } from '../../engine/signal/types';
import { useLocale } from '../../context/useLocale';
import type { LocalizedText } from '../../types/v3';

const nodeNotes: Record<string, LocalizedText> = {
  PRODUCT: {
    en: "The user's need and business rule enter here together. Every technical choice is measured against this boundary.",
    pt: 'A necessidade do usuário e a regra de negócio entram aqui. Toda escolha técnica é medida contra essa fronteira.',
  },
  WEB: {
    en: 'Browser journeys expose loading, failure, empty and success states without becoming the source of authority.',
    pt: 'Jornadas no navegador expõem carregamento, falha, vazio e sucesso sem se tornarem a fonte de autoridade.',
  },
  FRONTEND: {
    en: 'JavaScript-first interfaces translate domain state into fast, accessible and observable product behavior.',
    pt: 'Interfaces JavaScript-first traduzem o estado do domínio em comportamento rápido, acessível e observável.',
  },
  MOBILE: {
    en: 'React Native journeys share service contracts while respecting device state, native lifecycle and release constraints.',
    pt: 'Jornadas React Native compartilham contratos respeitando estado do dispositivo, ciclo nativo e restrições de release.',
  },
  API: {
    en: 'The contract boundary validates input, applies authorization and keeps business authority away from the interface.',
    pt: 'A fronteira de contrato valida entradas, aplica autorização e mantém a autoridade de negócio fora da interface.',
  },
  AI: {
    en: 'Models operate inside a bounded role with controlled context, validation, fallback and no execution authority.',
    pt: 'Modelos operam em um papel limitado, com contexto controlado, validação, fallback e sem autoridade de execução.',
  },
  'AI BOUNDARY': {
    en: 'Prompts, context and outputs are constrained and validated before intelligence can influence the product.',
    pt: 'Prompts, contexto e saídas são limitados e validados antes de a inteligência influenciar o produto.',
  },
  BACKEND: {
    en: 'Node.js services coordinate domain rules, integrations and durable work behind explicit server-side boundaries.',
    pt: 'Serviços Node.js coordenam regras de domínio, integrações e trabalho durável atrás de fronteiras explícitas no servidor.',
  },
  DATA: {
    en: 'Persistent state stays traceable, migratable and aligned with the rules that created it.',
    pt: 'O estado persistente permanece rastreável, migrável e alinhado às regras que o criaram.',
  },
  SHIPPED: {
    en: 'Delivery includes tests, observability and release evidence — not only code that builds locally.',
    pt: 'Entrega inclui testes, observabilidade e evidência de release — não apenas código que compila localmente.',
  },
  REACT: {
    en: 'React renders service state as deliberate product states, with accessibility and responsive behavior built in.',
    pt: 'React apresenta o estado do serviço como estados deliberados do produto, com acessibilidade e responsividade.',
  },
  'REACT NATIVE': {
    en: 'One JavaScript product surface adapts to device capabilities without pretending every platform behaves the same.',
    pt: 'Uma superfície de produto em JavaScript se adapta ao dispositivo sem fingir que todas as plataformas se comportam igual.',
  },
  'NODE.JS': {
    en: 'JavaScript services turn the API contract into domain behavior, provider coordination and reliable side effects.',
    pt: 'Serviços JavaScript transformam o contrato da API em domínio, coordenação de provedores e efeitos confiáveis.',
  },
  POSTGRESQL: {
    en: 'Relational data and constraints preserve durable truth beyond any individual request or interface session.',
    pt: 'Dados relacionais e restrições preservam a verdade durável além de uma requisição ou sessão de interface.',
  },
  SERVICES: {
    en: 'Focused modules isolate external providers and product capabilities behind replaceable contracts.',
    pt: 'Módulos focados isolam provedores externos e capacidades do produto atrás de contratos substituíveis.',
  },
  'DEVICE STATE': {
    en: 'Connectivity, lifecycle and local persistence are treated as real product states, not edge cases.',
    pt: 'Conectividade, ciclo de vida e persistência local são tratados como estados reais do produto, não exceções.',
  },
  REST: {
    en: 'Explicit HTTP resources expose stable behavior to web, mobile and integration consumers.',
    pt: 'Recursos HTTP explícitos expõem comportamento estável para consumidores web, mobile e integrações.',
  },
  AUTH: {
    en: 'Identity and permission checks stay at the server boundary and are verified before protected work begins.',
    pt: 'Identidade e permissões permanecem no servidor e são verificadas antes do trabalho protegido começar.',
  },
  'DOMAIN RULES': {
    en: 'Business invariants live in explicit services so every interface follows the same rules.',
    pt: 'Invariantes de negócio vivem em serviços explícitos para que toda interface siga as mesmas regras.',
  },
  JOBS: {
    en: 'Background work is retriable, observable and separated from the response path when time or reliability demands it.',
    pt: 'Trabalho assíncrono é repetível, observável e separado da resposta quando tempo ou confiabilidade exigem.',
  },
  'VECTOR SEARCH': {
    en: 'Retrieval narrows model context to relevant, inspectable source material before generation.',
    pt: 'A recuperação limita o contexto do modelo a fontes relevantes e inspecionáveis antes da geração.',
  },
  CONTEXT: {
    en: 'The product receives a bounded result with source context, validation and a defined fallback path.',
    pt: 'O produto recebe um resultado limitado com contexto de origem, validação e fallback definido.',
  },
  INTEGRATIONS: {
    en: 'Provider adapters absorb external variation without leaking vendor behavior across the product.',
    pt: 'Adaptadores de provedores absorvem variações externas sem espalhar comportamento de fornecedor pelo produto.',
  },
  DELIVERY: {
    en: 'Automation, environments and verification move the same system safely from repository to production.',
    pt: 'Automação, ambientes e verificação levam o mesmo sistema com segurança do repositório à produção.',
  },
};

interface SignalNodeInspectorProps {
  scene: SignalSceneDefinition;
  variant: 'hero' | 'lab';
}

interface NodeSelection {
  sceneId: string;
  nodeId: string;
}

export function SignalNodeInspector({ scene, variant }: SignalNodeInspectorProps) {
  const { locale } = useLocale();
  const [hovered, setHovered] = useState<NodeSelection | null>(null);
  const [focused, setFocused] = useState<NodeSelection | null>(null);
  const [pinned, setPinned] = useState<NodeSelection | null>(null);

  const selectedNodeId = (selection: NodeSelection | null) =>
    selection?.sceneId === scene.id ? selection.nodeId : null;
  const hoveredId = selectedNodeId(hovered);
  const focusedId = selectedNodeId(focused);
  const pinnedId = selectedNodeId(pinned);
  const activeId = hoveredId ?? focusedId ?? pinnedId;
  const activeNode = scene.nodes.find((node) => node.id === activeId);
  const activeNodeIndex = activeNode
    ? scene.nodes.findIndex((node) => node.id === activeNode.id)
    : -1;

  const note = activeNode
    ? (nodeNotes[activeNode.label] ?? {
        en: `${activeNode.label} is an explicit system boundary with a defined responsibility in this route.`,
        pt: `${activeNode.label} é uma fronteira explícita do sistema com responsabilidade definida nesta rota.`,
      })
    : null;

  const explainLabel = (node: SignalNodeDefinition) =>
    locale === 'en' ? `Explain ${node.label}` : `Explicar ${node.label}`;

  const notePlacement = activeNode
    ? [
        activeNode.x >= 0.54 ? 'is-left' : 'is-right',
        activeNode.y >= 0.62 ? 'is-above' : 'is-below',
      ].join(' ')
    : '';

  const noteStyle = activeNode
    ? ({
        '--signal-node-x': `${activeNode.x * 100}%`,
        '--signal-node-y': `${activeNode.y * 100}%`,
      } as CSSProperties)
    : undefined;

  return (
    <div
      className={`signal-inspector-v33 signal-inspector-v33--${variant}`}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setHovered(null);
          setFocused(null);
          setPinned(null);
        }
      }}
    >
      <div
        className="signal-inspector-v33__hotspots"
        aria-label={
          locale === 'en' ? 'Inspect architecture nodes' : 'Inspecionar nós da arquitetura'
        }
      >
        {scene.nodes.map((node) => (
          <button
            type="button"
            key={node.id}
            className={activeNode?.id === node.id ? 'is-active' : ''}
            style={{ left: `${node.x * 100}%`, top: `${node.y * 100}%` }}
            aria-label={explainLabel(node)}
            aria-expanded={activeNode?.id === node.id}
            aria-pressed={pinnedId === node.id}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') setHovered({ sceneId: scene.id, nodeId: node.id });
            }}
            onPointerLeave={() => setHovered(null)}
            onFocus={() => setFocused({ sceneId: scene.id, nodeId: node.id })}
            onBlur={() => setFocused(null)}
            onClick={() =>
              setPinned((current) =>
                current?.sceneId === scene.id && current.nodeId === node.id
                  ? null
                  : { sceneId: scene.id, nodeId: node.id },
              )
            }
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>

      {activeNode && note ? (
        <aside
          className={`signal-inspector-v33__note ${notePlacement}`}
          style={noteStyle}
          aria-live="polite"
          key={`${scene.id}-${activeNode.id}-${locale}`}
        >
          <p>
            {locale === 'en' ? 'BOUNDARY INSIGHT' : 'INSIGHT DA FRONTEIRA'} /{' '}
            {String(activeNodeIndex + 1).padStart(2, '0')}
          </p>
          <strong>{activeNode.label}</strong>
          <span>{note[locale]}</span>
        </aside>
      ) : null}
    </div>
  );
}
