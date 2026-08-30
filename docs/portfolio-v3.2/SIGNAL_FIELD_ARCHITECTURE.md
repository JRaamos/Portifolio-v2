# Signal Field — Canvas 2D architecture

## Decision

The field uses Canvas 2D. The visual vocabulary needs fewer than one hundred particles, a small deterministic node graph and simple quadratic routes; WebGL or Three.js would add bundle and maintenance cost without improving the intended result.

Canvas is decorative (`aria-hidden="true"`). Equivalent system order, mode descriptions and technology lists remain in semantic DOM.

## Modules

- `src/engine/signal/types.ts`: stable definitions and mutable runtime state.
- `src/engine/signal/geometry.ts`: allocation-free damping, projection and quadratic interpolation helpers.
- `src/engine/signal/animation.ts`: scene morph, pointer smoothing, proximity, inertia, packets and bounded particle pool.
- `src/engine/signal/renderer.ts`: grid, routes, route packets, nodes, local glow and particle trails.
- `src/hooks/useCanvasLifecycle.ts`: resize, visibility, document state, pointer listeners, DPR and frame cleanup.
- `src/components/v32/SignalCanvas.tsx`: React boundary with no state updates per frame.
- `src/components/v32/signalScenes.ts`: deterministic hero and System Lab graphs.
- `src/components/v32/InteractiveSystemLab.tsx`: tabs, copy, technologies and semantic system path.

## Pointer model

Pointer coordinates, velocity and speed are smoothed independently with exponential damping. Only nodes and edge segments inside a radius derived from the canvas size receive influence. Fast movement increases the bend and releases one or two short trail particles; an important node can release seven particles after a cooldown. The pointer never displaces page text.

When the pointer leaves, influence and speed decay directly toward zero without spring oscillation. Nodes return to their scene targets with the same stable damping. Signal packets continue on the graph rather than moving as unrelated space dust.

## Scene morph

Changing WEB, MOBILE, BACKEND, AI or PLATFORM updates target coordinates, alpha and graph edges. Existing node objects are reused; incoming nodes begin at the center and fade/move into position. The Canvas and DOM panel receive the same scene definition, preventing visual copy from drifting from the accessible system order.

## Lifecycle and limits

- `requestAnimationFrame` is cancelled on unmount and whenever the canvas leaves the observed viewport.
- `visibilitychange` pauses the field while the document is hidden.
- `ResizeObserver` updates the backing store without layout polling.
- Desktop particle limits: 72 in the hero, 96 in the lab.
- Coarse-pointer limit: 44, with no continuous pointer listener.
- DPR caps: 1.5 hero, 1.75 lab and 1.25 coarse pointer.
- Delta time is clamped at 34 ms after slow frames or tab transitions.
- Particles use a fixed circular pool; no particle object is allocated per frame.
- React state is never written from the animation loop.

## Mobile and reduced motion

`pointer: coarse` starts one 2.2 second route demonstration when the canvas enters the viewport or the selected mode changes, then stops. It does not invent a mobile cursor.

`prefers-reduced-motion: reduce` skips pointer listeners, path motion, particles and frame loops. The engine snaps every node to the complete selected scene and renders once.

## Difference from the Remix reference

The official Remix implementation studied for interaction quality uses WebGL/GPGPU textures and a large particle composition whose public identity is tied to its racetrack scene. JF Signal deliberately differs:

- Canvas 2D instead of WebGL and shaders;
- a sparse software architecture graph instead of a dense free particle field;
- named nodes, routes and delivery packets instead of a brand illustration;
- local route curvature and bounded node bursts instead of broad fluid displacement;
- explicit `IntersectionObserver` and `document.hidden` pause gates;
- a one-shot coarse-pointer demonstration;
- the existing graphite, cold white and blue-signal brand, with no Remix colors, shapes or assets.

Only the interaction principles were retained: local falloff, velocity smoothing, inertia, direct return, clamped delta time and reduced-motion completion.
