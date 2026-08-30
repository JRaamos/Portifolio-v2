import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SignalCanvas } from './SignalCanvas';
import { heroSignalScene } from './signalScenes';

const originalMatchMedia = window.matchMedia;

afterEach(() => {
  window.matchMedia = originalMatchMedia;
  vi.restoreAllMocks();
});

function mediaResult(query: string, matches: boolean): MediaQueryList {
  return {
    matches,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  };
}

describe('SignalCanvas lifecycle', () => {
  it('cancels the animation frame and removes its lifecycle on unmount', () => {
    vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(41);
    const cancel = vi.spyOn(window, 'cancelAnimationFrame');
    const { unmount, container } = render(<SignalCanvas scene={heroSignalScene} variant="hero" />);
    expect(container.querySelector('canvas')).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelector('canvas')).toHaveAttribute('data-signal-running', 'true');
    unmount();
    expect(cancel).toHaveBeenCalledWith(41);
  });

  it('renders the complete static state when reduced motion is requested', () => {
    window.matchMedia = vi.fn((query: string) =>
      mediaResult(query, query.includes('prefers-reduced-motion')),
    );
    const { container } = render(<SignalCanvas scene={heroSignalScene} variant="hero" />);
    expect(container.querySelector('canvas')).toHaveAttribute('data-signal-running', 'false');
    expect(container.querySelector('canvas')).toHaveAttribute('data-signal-scene', 'hero-system');
  });

  it('uses the one-shot coarse-pointer lifecycle instead of pointer tracking', () => {
    window.matchMedia = vi.fn((query: string) =>
      mediaResult(query, query.includes('pointer: coarse')),
    );
    vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(52);
    const { container, unmount } = render(<SignalCanvas scene={heroSignalScene} variant="hero" />);
    expect(container.querySelector('canvas')).toHaveAttribute('data-signal-running', 'true');
    unmount();
  });
});
