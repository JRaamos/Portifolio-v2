import { m, useReducedMotion } from 'motion/react';

const nodes = [
  { id: 'web', label: 'WEB', x: 52, y: 56 },
  { id: 'mobile', label: 'MOBILE', x: 360, y: 40 },
  { id: 'api', label: 'API', x: 196, y: 168 },
  { id: 'ai', label: 'AI', x: 510, y: 182 },
  { id: 'data', label: 'DATA', x: 90, y: 290 },
  { id: 'cloud', label: 'CLOUD', x: 390, y: 310 },
];

const links = [
  ['web', 'api'],
  ['mobile', 'api'],
  ['api', 'ai'],
  ['api', 'data'],
  ['data', 'cloud'],
  ['ai', 'cloud'],
  ['web', 'mobile'],
];

export function SystemGlyph({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();
  const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));

  return (
    <div
      className={`system-glyph${compact ? ' system-glyph--compact' : ''}`}
      aria-label="Web, mobile, API, AI, data and cloud layers connected as one system"
      role="img"
    >
      <svg viewBox="0 0 620 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 8 4 0 8Z" fill="currentColor" />
          </marker>
        </defs>
        {links.map(([from, to], index) => {
          const start = byId[from];
          const end = byId[to];
          return (
            <m.path
              key={`${from}-${to}`}
              d={`M${start.x + 48} ${start.y + 19} C${(start.x + end.x) / 2 + 20} ${start.y + 19}, ${(start.x + end.x) / 2 - 20} ${end.y + 19}, ${end.x - 6} ${end.y + 19}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              markerEnd="url(#arrowhead)"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.52 }}
              transition={{ duration: 1.2, delay: 0.42 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
        {nodes.map((node, index) => (
          <m.g
            key={node.id}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.76 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.18 + index * 0.08 }}
            style={{ transformOrigin: `${node.x + 48}px ${node.y + 19}px` }}
          >
            <rect x={node.x} y={node.y} width="96" height="38" rx="19" />
            <text x={node.x + 48} y={node.y + 24} textAnchor="middle">
              {node.label}
            </text>
          </m.g>
        ))}
      </svg>
      <div className="glyph-orbit glyph-orbit--one" aria-hidden="true" />
      <div className="glyph-orbit glyph-orbit--two" aria-hidden="true" />
    </div>
  );
}
