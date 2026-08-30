export interface SignalNodeDefinition {
  id: string;
  label: string;
  x: number;
  y: number;
  important?: boolean;
}

export interface SignalEdgeDefinition {
  from: string;
  to: string;
}

export interface SignalSceneDefinition {
  id: string;
  nodes: SignalNodeDefinition[];
  edges: SignalEdgeDefinition[];
}

export interface SignalNodeState extends SignalNodeDefinition {
  targetX: number;
  targetY: number;
  renderX: number;
  renderY: number;
  alpha: number;
  targetAlpha: number;
  intensity: number;
}

export interface SignalParticle {
  active: boolean;
  x: number;
  y: number;
  previousX: number;
  previousY: number;
  velocityX: number;
  velocityY: number;
  life: number;
  maxLife: number;
  size: number;
  depth: number;
}

export interface SignalPointerState {
  rawX: number;
  rawY: number;
  x: number;
  y: number;
  previousRawX: number;
  previousRawY: number;
  velocityX: number;
  velocityY: number;
  targetVelocityX: number;
  targetVelocityY: number;
  speed: number;
  targetSpeed: number;
  influence: number;
  inside: boolean;
  lastMoveAt: number;
}

export interface SignalEngineState {
  sceneId: string;
  nodes: SignalNodeState[];
  nodeIndex: Map<string, SignalNodeState>;
  edges: SignalEdgeDefinition[];
  particles: SignalParticle[];
  pointer: SignalPointerState;
  width: number;
  height: number;
  packetClock: number;
  emissionCursor: number;
  lastBurstId: string;
  lastBurstAt: number;
  demoStartedAt: number;
  demoUntil: number;
}
