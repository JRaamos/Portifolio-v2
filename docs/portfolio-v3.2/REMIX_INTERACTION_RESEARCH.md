# Remix interaction research

Research date: 2026-08-30.

## Sources inspected

- Live experience: <https://remix.run/#the-framework>
- Official repository: <https://github.com/remix-run/remix-website>
- Repository commit inspected: `4a5d665ce53d6cf1a04d4f6e2da0a4a44c1fe3b2`
- Relevant source paths:
  - `app/actions/public/remix-landing/components/particle-canvas.tsx`
  - `app/actions/public/remix-landing/engine/mouse-sim.ts`
  - `app/actions/public/remix-landing/engine/particles.ts`
  - `app/actions/public/remix-landing/engine/preset-glsl.ts`
  - `app/actions/public/remix-landing/engine/morph.ts`
  - `app/actions/public/remix-landing/landing-enhancements.tsx`
  - `app/actions/public/remix-landing/utils/reduced-motion.ts`

No source, shader, asset, shape or brand element is copied into this portfolio.

## What the live interaction does well

1. Pointer response is local. The field reacts near the pointer instead of shifting the whole scene.
2. Velocity matters. A moving pointer produces a visible brush; a nearly stationary pointer quickly becomes neutral.
3. Motion has inertia without wobble. The disturbance approaches a target and then returns directly to rest.
4. The scene is still readable without interaction. Pointer behavior enhances an already complete composition.
5. Scroll changes the system itself rather than swapping a text label over an unchanged background.
6. The initial reveal, pointer response and scroll morph share one visual language.

## Implementation principles observed

- Pointer coordinates are normalized to the canvas region.
- Pointer speed is smoothed before it controls visual strength.
- A low-speed gate prevents tiny hand jitter from keeping the effect active.
- Exponential damping makes behavior largely frame-rate independent.
- Frame delta is clamped after slow frames or tab switches.
- Scratch vectors and arrays are reused rather than allocated every frame.
- Device pixel ratio is capped.
- Event listeners are attached to an abortable lifecycle and animation frames are cancelled during disposal.
- Reduced motion presents the completed state and removes pointer force.
- Scene morphing is continuous between adjacent presets.

## Limits found in the inspected reference

The inspected particle component cancels its frame loop on disposal and reacts to reduced motion, but the searched source did not expose a dedicated `IntersectionObserver` or `document.hidden` pause for the particle render loop. V3.2 will implement both because the portfolio field is not a full-page product surface and should stop consuming work when unavailable.

## Translation into JF Signal

The portfolio will not recreate a cloud, racetrack, galaxy or GPU particle sculpture. It will use a small Canvas 2D routing field attached to existing architecture:

- nodes and Bézier connections, not free-floating dust;
- a proximity radius that bends only nearby routes;
- pointer velocity controlling a short packet trail;
- 4–8 controlled particles only when a primary node is crossed;
- direct damped return to authored coordinates;
- DOM labels as the accessible system description;
- Canvas marked `aria-hidden="true"`;
- separate rest geometries for WEB, MOBILE, BACKEND, AI and PLATFORM;
- pause outside the viewport and while the document is hidden;
- one-shot mobile demonstration and a complete static reduced-motion state.

## Deliberate differences

| Remix reference | JF Signal implementation |
| --- | --- |
| WebGL/Three particle system | Canvas 2D routing system |
| Large particle field | Small fixed node/edge graph |
| Racetrack and brand presets | Software layers and delivery paths |
| GPU displacement textures | Reused typed arrays and damped point offsets |
| Full-scene morph | Mode-specific architecture morph |
| Strong green/red brand palette | Graphite, cold white and one signal blue |
| Continuous rich desktop surface | Local hero/lab canvases with visibility pausing |

The quality bar is responsiveness, inertia and transformation. The identity, geometry, content and implementation remain original.
