import { useCallback, useEffect, useState, type KeyboardEvent } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface FocusCarouselOptions {
  count: number;
  loop?: boolean;
}

export function useFocusCarousel({ count, loop = count > 2 }: FocusCarouselOptions) {
  const [viewportRef, api] = useEmblaCarousel({
    align: 'center',
    containScroll: count > 1 ? false : 'trimSnaps',
    dragFree: false,
    loop,
    skipSnaps: false,
    watchDrag: count > 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sync = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on('select', sync);
    api.on('reInit', sync);
    return () => {
      api.off('select', sync);
      api.off('reInit', sync);
    };
  }, [api, sync]);

  const safeSelectedIndex = Math.min(selectedIndex, Math.max(0, count - 1));
  const canScrollPrevious = count > 1 && (loop || safeSelectedIndex > 0);
  const canScrollNext = count > 1 && (loop || safeSelectedIndex < count - 1);

  const scrollPrevious = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);
  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      } else if (event.key === 'Home') {
        event.preventDefault();
        scrollTo(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        scrollTo(Math.max(0, count - 1));
      }
    },
    [count, scrollNext, scrollPrevious, scrollTo],
  );

  return {
    viewportRef,
    selectedIndex: safeSelectedIndex,
    canScrollPrevious,
    canScrollNext,
    scrollPrevious,
    scrollNext,
    scrollTo,
    onKeyDown,
  };
}
