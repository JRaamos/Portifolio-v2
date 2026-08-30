import { useId } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export type BrandVariant = 'signal' | 'light' | 'dark' | 'monochrome';

interface BrandMarkProps {
  size?: number;
  variant?: BrandVariant;
  animated?: boolean;
  reducedMotion?: boolean;
  showWordmark?: boolean;
  compact?: boolean;
  className?: string;
}

const route = 'M9 42C9 52 16 57 24 55C31 53 34 48 34 39V12H56';

export function BrandMark({
  size = 40,
  variant = 'signal',
  animated = true,
  reducedMotion,
  showWordmark = false,
  compact = false,
  className = '',
}: BrandMarkProps) {
  const systemReducedMotion = useReducedMotion();
  const shouldReduceMotion = reducedMotion ?? systemReducedMotion;
  const titleId = useId();
  const isAnimated = animated && !shouldReduceMotion;

  return (
    <span
      className={`brand-lockup-v32 brand-lockup-v32--${variant} ${compact ? 'is-compact' : ''} ${className}`.trim()}
      data-animated={isAnimated ? 'true' : 'false'}
    >
      <svg
        className="brand-mark-v32"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-labelledby={titleId}
      >
        <title id={titleId}>JF Signal</title>
        <path className="brand-mark-v32__route" pathLength="100" d={route} />
        <path className="brand-mark-v32__branch" pathLength="28" d="M34 28H50" />
        <path className="brand-mark-v32__pulse" pathLength="100" d={route} />
        <circle className="brand-mark-v32__node" cx="50" cy="28" r="2.2" />
        <g className="brand-mark-v32__particles" aria-hidden="true">
          <circle cx="54" cy="28" r="1" />
          <circle cx="57" cy="25" r="0.75" />
          <circle cx="58" cy="30" r="0.65" />
        </g>
      </svg>
      {showWordmark ? (
        <span className="brand-wordmark-v32">
          <strong>Jonathan Febraio</strong>
          <small>Software Engineer</small>
        </span>
      ) : null}
    </span>
  );
}
