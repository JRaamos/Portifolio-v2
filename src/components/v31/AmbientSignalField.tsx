import { useEffect, useRef } from 'react';

export function AmbientSignalField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!field || !pointer.matches || reduced.matches) return;

    let frame = 0;
    const update = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        field.style.setProperty('--ambient-x', `${event.clientX}px`);
        field.style.setProperty('--ambient-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('pointermove', update, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', update);
    };
  }, []);

  return (
    <div className="ambient-signal-v31" ref={fieldRef} aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  );
}
