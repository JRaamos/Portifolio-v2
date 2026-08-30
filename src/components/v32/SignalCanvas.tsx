import type { SignalSceneDefinition } from '../../engine/signal/types';
import { useCanvasLifecycle } from '../../hooks/useCanvasLifecycle';

interface SignalCanvasProps {
  scene: SignalSceneDefinition;
  variant: 'hero' | 'lab';
  className?: string;
  particleLimit?: number;
}

export function SignalCanvas({ scene, variant, className = '', particleLimit }: SignalCanvasProps) {
  const canvasRef = useCanvasLifecycle(scene, { variant, particleLimit });

  return (
    <canvas
      ref={canvasRef}
      className={`signal-canvas-v32 ${className}`.trim()}
      data-signal-field={variant}
      data-signal-scene={scene.id}
      aria-hidden="true"
    />
  );
}
