import { clamp, quadraticPoint, segmentDistance, type MutablePoint } from './geometry';
import type { SignalEngineState } from './types';

export interface SignalRendererOptions {
  variant: 'hero' | 'lab';
}

const packetPoint: MutablePoint = { x: 0, y: 0 };

export function renderSignalField(
  context: CanvasRenderingContext2D,
  state: SignalEngineState,
  options: SignalRendererOptions,
) {
  const { width, height, pointer } = state;
  const densityScale = clamp(Math.min(width / 900, height / 620), 0.66, 1.2);
  context.clearRect(0, 0, width, height);
  context.lineCap = 'round';
  context.lineJoin = 'round';

  drawGrid(context, width, height, options.variant);

  state.edges.forEach((edge, edgeIndex) => {
    const start = state.nodeIndex.get(edge.from);
    const end = state.nodeIndex.get(edge.to);
    if (!start || !end || start.alpha < 0.02 || end.alpha < 0.02) return;
    const alpha = Math.min(start.alpha, end.alpha);
    const middleX = (start.renderX + end.renderX) * 0.5;
    const middleY = (start.renderY + end.renderY) * 0.5;
    const proximity = clamp(
      1 -
        segmentDistance(
          pointer.x,
          pointer.y,
          start.renderX,
          start.renderY,
          end.renderX,
          end.renderY,
        ) /
          clamp(Math.min(width, height) * 0.28, 110, 210),
      0,
      1,
    );
    const directionX = middleX - pointer.x;
    const directionY = middleY - pointer.y;
    const directionLength = Math.hypot(directionX, directionY) || 1;
    const curve = proximity * proximity * pointer.influence * (16 + pointer.speed * 0.011);
    const idleCurve = Math.sin((edgeIndex + 1) * 1.7) * 4 * densityScale;
    const controlX = middleX + (directionX / directionLength) * curve;
    const controlY = middleY + (directionY / directionLength) * curve + idleCurve;

    context.beginPath();
    context.moveTo(start.renderX, start.renderY);
    context.quadraticCurveTo(controlX, controlY, end.renderX, end.renderY);
    context.strokeStyle = `rgba(151, 174, 216, ${0.16 * alpha + proximity * 0.2})`;
    context.lineWidth = densityScale * (0.8 + proximity * 0.65);
    context.stroke();

    if (proximity > 0.08) {
      context.beginPath();
      context.moveTo(start.renderX, start.renderY);
      context.quadraticCurveTo(controlX, controlY, end.renderX, end.renderY);
      context.strokeStyle = `rgba(125, 162, 255, ${proximity * 0.3 * alpha})`;
      context.lineWidth = densityScale * 2.3;
      context.stroke();
    }

    const packetProgress = (state.packetClock + edgeIndex / Math.max(1, state.edges.length)) % 1;
    quadraticPoint(
      start.renderX,
      start.renderY,
      controlX,
      controlY,
      end.renderX,
      end.renderY,
      packetProgress,
      packetPoint,
    );
    const packetAlpha = (0.42 + proximity * 0.5) * alpha;
    context.beginPath();
    context.arc(packetPoint.x, packetPoint.y, densityScale * (1.6 + proximity), 0, Math.PI * 2);
    context.fillStyle = `rgba(185, 206, 255, ${packetAlpha})`;
    context.shadowColor = 'rgba(125, 162, 255, 0.72)';
    context.shadowBlur = densityScale * (5 + proximity * 8);
    context.fill();
    context.shadowBlur = 0;
  });

  state.nodes.forEach((node) => {
    if (node.alpha < 0.02) return;
    drawNode(context, node, densityScale, options.variant);
  });

  state.particles.forEach((particle) => {
    if (!particle.active) return;
    const life = clamp(particle.life / particle.maxLife, 0, 1);
    context.beginPath();
    context.moveTo(particle.previousX, particle.previousY);
    context.lineTo(particle.x, particle.y);
    context.strokeStyle = `rgba(125, 162, 255, ${life * 0.56})`;
    context.lineWidth = particle.size * particle.depth;
    context.stroke();
  });
}

function drawGrid(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  variant: SignalRendererOptions['variant'],
) {
  const step = variant === 'hero' ? 92 : 78;
  context.beginPath();
  for (let x = step; x < width; x += step) {
    context.moveTo(x, 0);
    context.lineTo(x, height);
  }
  for (let y = step; y < height; y += step) {
    context.moveTo(0, y);
    context.lineTo(width, y);
  }
  context.strokeStyle =
    variant === 'hero' ? 'rgba(151, 174, 216, 0.04)' : 'rgba(151, 174, 216, 0.055)';
  context.lineWidth = 1;
  context.stroke();
}

function drawNode(
  context: CanvasRenderingContext2D,
  node: SignalEngineState['nodes'][number],
  scale: number,
  variant: SignalRendererOptions['variant'],
) {
  const height = 38 * scale;
  const width = clamp((node.label.length * 7 + 32) * scale, 76 * scale, 150 * scale);
  const x = node.renderX - width * 0.5;
  const y = node.renderY - height * 0.5;
  const intensity = node.intensity;
  context.globalAlpha = node.alpha;
  context.fillStyle = `rgba(10, 15, 23, ${variant === 'hero' ? 0.72 : 0.9})`;
  context.strokeStyle = `rgba(151, 174, 216, ${0.24 + intensity * 0.52})`;
  context.lineWidth = scale * (0.9 + intensity * 0.65);
  context.beginPath();
  context.roundRect(x, y, width, height, 3 * scale);
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(x, node.renderY, scale * (2.1 + intensity * 1.5), 0, Math.PI * 2);
  context.fillStyle = `rgba(185, 206, 255, ${0.68 + intensity * 0.32})`;
  context.shadowColor = 'rgba(125, 162, 255, 0.75)';
  context.shadowBlur = scale * (4 + intensity * 12);
  context.fill();
  context.shadowBlur = 0;

  context.fillStyle = `rgba(220, 230, 245, ${0.7 + intensity * 0.3})`;
  context.font = `500 ${Math.max(8, 9.5 * scale)}px "IBM Plex Mono", monospace`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(node.label, node.renderX, node.renderY + 0.5);
  context.globalAlpha = 1;
}
