interface CarouselControlsProps {
  current: number;
  total: number;
  canScrollPrevious: boolean;
  canScrollNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSelect?: (index: number) => void;
  previousLabel: string;
  nextLabel: string;
  itemLabel: (index: number) => string;
  className?: string;
}

export function CarouselControls({
  current,
  total,
  canScrollPrevious,
  canScrollNext,
  onPrevious,
  onNext,
  onSelect,
  previousLabel,
  nextLabel,
  itemLabel,
  className = '',
}: CarouselControlsProps) {
  return (
    <div className={`carousel-controls-v33 ${className}`.trim()}>
      <button
        type="button"
        className="carousel-arrow-v33"
        onClick={onPrevious}
        disabled={!canScrollPrevious}
        aria-label={previousLabel}
      >
        <span aria-hidden="true">←</span>
      </button>
      <div className="carousel-progress-v33" aria-label={`${current + 1} / ${total}`}>
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index}
            type="button"
            className={index === current ? 'is-active' : ''}
            onClick={() => onSelect?.(index)}
            aria-label={itemLabel(index)}
            aria-current={index === current ? 'true' : undefined}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
      <span className="carousel-count-v33" aria-hidden="true">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <button
        type="button"
        className="carousel-arrow-v33"
        onClick={onNext}
        disabled={!canScrollNext}
        aria-label={nextLabel}
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
