import '@testing-library/jest-dom/vitest';
import { afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  }),
});

beforeAll(() => {
  Object.defineProperty(window, 'scrollTo', { writable: true, value: () => undefined });
  Object.defineProperty(Element.prototype, 'scrollIntoView', {
    writable: true,
    value: () => undefined,
  });
  class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'ResizeObserver', { writable: true, value: ResizeObserverMock });
  class IntersectionObserverMock {
    readonly root = null;
    readonly rootMargin = '0px';
    readonly thresholds = [0];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: IntersectionObserverMock,
  });
  Object.defineProperty(globalThis, 'IntersectionObserver', {
    writable: true,
    value: IntersectionObserverMock,
  });
  const canvasContext = {
    clearRect: () => undefined,
    setTransform: () => undefined,
    beginPath: () => undefined,
    moveTo: () => undefined,
    lineTo: () => undefined,
    quadraticCurveTo: () => undefined,
    roundRect: () => undefined,
    arc: () => undefined,
    fill: () => undefined,
    stroke: () => undefined,
    fillText: () => undefined,
    globalAlpha: 1,
    lineCap: 'round',
    lineJoin: 'round',
    lineWidth: 1,
    strokeStyle: '',
    fillStyle: '',
    shadowColor: '',
    shadowBlur: 0,
    font: '',
    textAlign: 'center',
    textBaseline: 'middle',
  } as unknown as CanvasRenderingContext2D;
  Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
    writable: true,
    value: () => canvasContext,
  });
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  window.history.replaceState({}, '', '/');
  document.documentElement.lang = 'en-US';
});
