export interface MutablePoint {
  x: number;
  y: number;
}

export function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function damp(current: number, target: number, rate: number, delta: number) {
  return current + (target - current) * (1 - Math.exp(-rate * delta));
}

export function distanceSquared(x1: number, y1: number, x2: number, y2: number) {
  const x = x2 - x1;
  const y = y2 - y1;
  return x * x + y * y;
}

export function quadraticPoint(
  startX: number,
  startY: number,
  controlX: number,
  controlY: number,
  endX: number,
  endY: number,
  progress: number,
  output: MutablePoint,
) {
  const inverse = 1 - progress;
  output.x =
    inverse * inverse * startX + 2 * inverse * progress * controlX + progress * progress * endX;
  output.y =
    inverse * inverse * startY + 2 * inverse * progress * controlY + progress * progress * endY;
  return output;
}

export function segmentDistance(
  pointX: number,
  pointY: number,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) {
  const segmentX = endX - startX;
  const segmentY = endY - startY;
  const lengthSquared = segmentX * segmentX + segmentY * segmentY || 1;
  const projection = clamp(
    ((pointX - startX) * segmentX + (pointY - startY) * segmentY) / lengthSquared,
    0,
    1,
  );
  const closestX = startX + segmentX * projection;
  const closestY = startY + segmentY * projection;
  return Math.hypot(pointX - closestX, pointY - closestY);
}
