import { clamp, damp, distanceSquared } from './geometry';
import type {
  SignalEngineState,
  SignalNodeDefinition,
  SignalNodeState,
  SignalParticle,
  SignalSceneDefinition,
} from './types';

const emptyParticle = (): SignalParticle => ({
  active: false,
  x: 0,
  y: 0,
  previousX: 0,
  previousY: 0,
  velocityX: 0,
  velocityY: 0,
  life: 0,
  maxLife: 0,
  size: 1,
  depth: 1,
});

function nodeFromDefinition(node: SignalNodeDefinition): SignalNodeState {
  return {
    ...node,
    targetX: node.x,
    targetY: node.y,
    renderX: node.x,
    renderY: node.y,
    alpha: 1,
    targetAlpha: 1,
    intensity: 0,
  };
}

export class SignalEngine {
  readonly state: SignalEngineState;
  private seed = 17;

  constructor(scene: SignalSceneDefinition, particleLimit: number) {
    const nodes = scene.nodes.map(nodeFromDefinition);
    this.state = {
      sceneId: scene.id,
      nodes,
      nodeIndex: new Map(nodes.map((node) => [node.id, node])),
      edges: scene.edges,
      particles: Array.from({ length: particleLimit }, emptyParticle),
      pointer: {
        rawX: 0,
        rawY: 0,
        x: 0,
        y: 0,
        previousRawX: 0,
        previousRawY: 0,
        velocityX: 0,
        velocityY: 0,
        targetVelocityX: 0,
        targetVelocityY: 0,
        speed: 0,
        targetSpeed: 0,
        influence: 0,
        inside: false,
        lastMoveAt: 0,
      },
      width: 1,
      height: 1,
      packetClock: 0,
      emissionCursor: 0,
      lastBurstId: '',
      lastBurstAt: 0,
      demoStartedAt: 0,
      demoUntil: 0,
    };
  }

  resize(width: number, height: number) {
    this.state.width = Math.max(1, width);
    this.state.height = Math.max(1, height);
  }

  setScene(scene: SignalSceneDefinition) {
    const activeIds = new Set(scene.nodes.map((node) => node.id));
    this.state.nodes.forEach((node) => {
      node.targetAlpha = activeIds.has(node.id) ? 1 : 0;
    });

    scene.nodes.forEach((definition) => {
      let node = this.state.nodeIndex.get(definition.id);
      if (!node) {
        node = nodeFromDefinition({ ...definition, x: 0.5, y: 0.5 });
        node.alpha = 0;
        this.state.nodes.push(node);
        this.state.nodeIndex.set(node.id, node);
      }
      node.label = definition.label;
      node.targetX = definition.x;
      node.targetY = definition.y;
      node.targetAlpha = 1;
      node.important = definition.important;
    });

    this.state.sceneId = scene.id;
    this.state.edges = scene.edges;
  }

  snapToScene() {
    this.state.nodes.forEach((node) => {
      node.x = node.targetX;
      node.y = node.targetY;
      node.renderX = node.x * this.state.width;
      node.renderY = node.y * this.state.height;
      node.alpha = node.targetAlpha;
      node.intensity = 0;
    });
  }

  pointerMove(x: number, y: number, time: number) {
    const pointer = this.state.pointer;
    const elapsed = pointer.lastMoveAt
      ? clamp((time - pointer.lastMoveAt) / 1000, 1 / 240, 0.08)
      : 1 / 60;
    pointer.targetVelocityX = (x - pointer.previousRawX) / elapsed;
    pointer.targetVelocityY = (y - pointer.previousRawY) / elapsed;
    pointer.targetSpeed = clamp(
      Math.hypot(pointer.targetVelocityX, pointer.targetVelocityY),
      0,
      1800,
    );
    pointer.previousRawX = x;
    pointer.previousRawY = y;
    pointer.rawX = x;
    pointer.rawY = y;
    pointer.inside = true;
    pointer.lastMoveAt = time;

    if (pointer.targetSpeed > 42) {
      this.emitParticle(
        x,
        y,
        pointer.targetVelocityX,
        pointer.targetVelocityY,
        pointer.targetSpeed > 760 ? 1.15 : 0.82,
      );
      if (pointer.targetSpeed > 900) {
        this.emitParticle(x, y, pointer.targetVelocityX, pointer.targetVelocityY, 0.68);
      }
    }
  }

  pointerLeave() {
    this.state.pointer.inside = false;
    this.state.pointer.targetSpeed = 0;
    this.state.pointer.targetVelocityX = 0;
    this.state.pointer.targetVelocityY = 0;
    this.state.lastBurstId = '';
  }

  startDemo(time: number, duration = 2200) {
    this.state.demoStartedAt = time;
    this.state.demoUntil = time + duration;
  }

  isDemoActive(time: number) {
    return time < this.state.demoUntil;
  }

  hasActiveParticles() {
    return this.state.particles.some((particle) => particle.active);
  }

  isMorphing() {
    return this.state.nodes.some(
      (node) =>
        Math.abs(node.x - node.targetX) > 0.001 ||
        Math.abs(node.y - node.targetY) > 0.001 ||
        Math.abs(node.alpha - node.targetAlpha) > 0.01,
    );
  }

  update(delta: number, time: number) {
    const dt = clamp(delta, 0, 0.034);
    const { pointer } = this.state;
    const demo = this.isDemoActive(time);

    if (demo && !pointer.inside) {
      const progress = clamp((time - this.state.demoStartedAt) / 2200, 0, 1);
      pointer.rawX = this.state.width * (0.12 + progress * 0.76);
      pointer.rawY = this.state.height * (0.52 + Math.sin(progress * Math.PI * 2) * 0.14);
      pointer.targetVelocityX = this.state.width * 0.38;
      pointer.targetVelocityY = Math.cos(progress * Math.PI * 2) * this.state.height * 0.18;
      pointer.targetSpeed = 360;
    }

    pointer.x = damp(pointer.x, pointer.rawX, 12, dt);
    pointer.y = damp(pointer.y, pointer.rawY, 12, dt);
    pointer.velocityX = damp(pointer.velocityX, pointer.targetVelocityX, 10, dt);
    pointer.velocityY = damp(pointer.velocityY, pointer.targetVelocityY, 10, dt);
    pointer.speed = damp(pointer.speed, pointer.inside || demo ? pointer.targetSpeed : 0, 8, dt);
    pointer.influence = damp(
      pointer.influence,
      pointer.inside || demo ? 1 : 0,
      pointer.inside || demo ? 10 : 4.5,
      dt,
    );

    const influenceRadius = clamp(Math.min(this.state.width, this.state.height) * 0.3, 120, 230);
    const influenceRadiusSquared = influenceRadius * influenceRadius;

    this.state.nodes.forEach((node) => {
      node.x = damp(node.x, node.targetX, 6.8, dt);
      node.y = damp(node.y, node.targetY, 6.8, dt);
      node.alpha = damp(node.alpha, node.targetAlpha, 8, dt);
      const baseX = node.x * this.state.width;
      const baseY = node.y * this.state.height;
      const squaredDistance = distanceSquared(baseX, baseY, pointer.x, pointer.y);
      const proximity =
        pointer.influence && squaredDistance < influenceRadiusSquared
          ? 1 - Math.sqrt(squaredDistance) / influenceRadius
          : 0;
      const distance = Math.sqrt(squaredDistance) || 1;
      const displacement = proximity * proximity * (9 + pointer.speed * 0.009);
      node.renderX = baseX + ((baseX - pointer.x) / distance) * displacement;
      node.renderY = baseY + ((baseY - pointer.y) / distance) * displacement;
      node.intensity = damp(node.intensity, proximity, 11, dt);

      if (
        node.important &&
        proximity > 0.72 &&
        this.state.lastBurstId !== node.id &&
        time - this.state.lastBurstAt > 420
      ) {
        this.emitBurst(node.renderX, node.renderY, 7);
        this.state.lastBurstId = node.id;
        this.state.lastBurstAt = time;
      }
    });

    this.state.packetClock = (this.state.packetClock + dt * (0.11 + pointer.speed * 0.00008)) % 1;
    this.state.particles.forEach((particle) => {
      if (!particle.active) return;
      particle.previousX = particle.x;
      particle.previousY = particle.y;
      particle.x += particle.velocityX * dt;
      particle.y += particle.velocityY * dt;
      particle.velocityX *= Math.exp(-2.8 * dt);
      particle.velocityY *= Math.exp(-2.8 * dt);
      particle.life -= dt;
      if (particle.life <= 0) particle.active = false;
    });
  }

  private nextNoise() {
    this.seed = (this.seed * 16807) % 2147483647;
    return this.seed / 2147483647;
  }

  private emitParticle(x: number, y: number, velocityX: number, velocityY: number, depth: number) {
    const particle = this.state.particles[this.state.emissionCursor];
    this.state.emissionCursor = (this.state.emissionCursor + 1) % this.state.particles.length;
    const perpendicularX = -velocityY;
    const perpendicularY = velocityX;
    const length = Math.hypot(perpendicularX, perpendicularY) || 1;
    const spread = (this.nextNoise() - 0.5) * 58;
    particle.active = true;
    particle.x = x;
    particle.y = y;
    particle.previousX = x;
    particle.previousY = y;
    particle.velocityX = velocityX * 0.045 * depth + (perpendicularX / length) * spread;
    particle.velocityY = velocityY * 0.045 * depth + (perpendicularY / length) * spread;
    particle.maxLife = 0.46 + this.nextNoise() * 0.32;
    particle.life = particle.maxLife;
    particle.size = 0.7 + this.nextNoise() * 1.15;
    particle.depth = depth;
  }

  private emitBurst(x: number, y: number, count: number) {
    for (let index = 0; index < count; index += 1) {
      const angle = (Math.PI * 2 * index) / count + this.nextNoise() * 0.35;
      const speed = 42 + this.nextNoise() * 56;
      this.emitParticle(x, y, Math.cos(angle) * speed * 7, Math.sin(angle) * speed * 7, 0.82);
    }
  }
}
