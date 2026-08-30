import { useEffect, useRef, useState, type RefObject } from 'react';
import { SignalEngine } from '../engine/signal/animation';
import { renderSignalField, type SignalRendererOptions } from '../engine/signal/renderer';
import type { SignalSceneDefinition } from '../engine/signal/types';
import { useReducedMotion } from './useReducedMotion';

interface CanvasLifecycleOptions extends SignalRendererOptions {
  particleLimit?: number;
}

interface CanvasRuntime {
  start: () => void;
  renderStatic: () => void;
  coarse: boolean;
}

export function useCanvasLifecycle(
  scene: SignalSceneDefinition,
  options: CanvasLifecycleOptions,
): RefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<SignalEngine | null>(null);
  const runtimeRef = useRef<CanvasRuntime | null>(null);
  const [initialScene] = useState(scene);
  const reducedMotion = useReducedMotion();
  const variant = options.variant;
  const requestedLimit = options.particleLimit;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const particleLimit = requestedLimit ?? (coarse ? 44 : variant === 'hero' ? 72 : 96);
    const engine = new SignalEngine(initialScene, particleLimit);
    engineRef.current = engine;
    let frame = 0;
    let lastTime = performance.now();
    let visible = true;
    let destroyed = false;

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      canvas.dataset.signalRunning = 'false';
    };

    const renderFrame = (time: number) => {
      frame = 0;
      if (destroyed || !visible || document.hidden) return;
      engine.update((time - lastTime) / 1000, time);
      lastTime = time;
      renderSignalField(context, engine.state, { variant });
      const keepRunning =
        !coarse || engine.isDemoActive(time) || engine.hasActiveParticles() || engine.isMorphing();
      if (keepRunning) {
        canvas.dataset.signalRunning = 'true';
        frame = window.requestAnimationFrame(renderFrame);
      } else {
        canvas.dataset.signalRunning = 'false';
      }
    };

    const start = () => {
      if (frame || destroyed || reducedMotion || !visible || document.hidden) return;
      lastTime = performance.now();
      canvas.dataset.signalRunning = 'true';
      frame = window.requestAnimationFrame(renderFrame);
    };

    const renderStatic = () => {
      engine.snapToScene();
      renderSignalField(context, engine.state, { variant });
      canvas.dataset.signalRunning = 'false';
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const cap = coarse ? 1.25 : variant === 'hero' ? 1.5 : 1.75;
      const ratio = Math.min(window.devicePixelRatio || 1, cap);
      canvas.width = Math.max(1, Math.round(bounds.width * ratio));
      canvas.height = Math.max(1, Math.round(bounds.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      engine.resize(bounds.width, bounds.height);
      if (reducedMotion) renderStatic();
      else start();
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      canvas.dataset.signalPointer = `${Math.round(x)},${Math.round(y)}`;
      engine.pointerMove(x, y, performance.now());
      start();
    };
    const onPointerLeave = () => {
      canvas.dataset.signalPointer = 'idle';
      engine.pointerLeave();
      start();
    };
    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting);
        canvas.dataset.signalVisible = visible ? 'true' : 'false';
        if (!visible) stop();
        else {
          if (coarse && !reducedMotion) engine.startDemo(performance.now());
          if (reducedMotion) renderStatic();
          else start();
        }
      },
      { rootMargin: '120px 0px', threshold: 0.01 },
    );

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    document.addEventListener('visibilitychange', onVisibilityChange);
    if (!coarse && !reducedMotion) {
      canvas.addEventListener('pointermove', onPointerMove, { passive: true });
      canvas.addEventListener('pointerleave', onPointerLeave, { passive: true });
    }

    runtimeRef.current = { start, renderStatic, coarse };
    resize();
    if (coarse && !reducedMotion) engine.startDemo(performance.now());
    if (reducedMotion) renderStatic();
    else start();

    return () => {
      destroyed = true;
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      engine.pointerLeave();
      engineRef.current = null;
      runtimeRef.current = null;
    };
  }, [initialScene, reducedMotion, requestedLimit, variant]);

  useEffect(() => {
    const engine = engineRef.current;
    const runtime = runtimeRef.current;
    if (!engine || !runtime) return;
    engine.setScene(scene);
    if (reducedMotion) runtime.renderStatic();
    else {
      if (runtime.coarse) engine.startDemo(performance.now());
      runtime.start();
    }
  }, [reducedMotion, scene]);

  return canvasRef;
}
