import { architectureLabels, architectureNodeIds } from './architecture';

interface ArchitectureMapProps {
  className?: string;
  label: string;
}

export function ArchitectureMap({ className = '', label }: ArchitectureMapProps) {
  return (
    <svg
      className={`architecture-map ${className}`}
      viewBox="0 0 1000 650"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="architecture-line" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="0.55" stopColor="currentColor" stopOpacity="0.72" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.18" />
        </linearGradient>
        <filter id="architecture-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="architecture-map__grid" aria-hidden="true">
        <path d="M0 108H1000M0 216H1000M0 324H1000M0 432H1000M0 540H1000" />
        <path d="M166 0V650M332 0V650M498 0V650M664 0V650M830 0V650" />
      </g>
      <g className="architecture-map__edges" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <line key={index} data-edge={index} x1="500" y1="300" x2="500" y2="300" />
        ))}
      </g>
      <circle className="architecture-map__signal" cx="0" cy="0" r="5" aria-hidden="true" />
      <g className="architecture-map__nodes">
        {architectureNodeIds.map((id) => (
          <g key={id} data-node={id} className={`architecture-node architecture-node--${id}`}>
            <rect width="152" height="44" rx="3" />
            <circle cx="0" cy="0" r="4" />
            <text x="76" y="23" textAnchor="middle" dominantBaseline="middle">
              {architectureLabels[id]}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
