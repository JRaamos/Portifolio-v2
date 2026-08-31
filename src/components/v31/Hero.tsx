import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { SignalCanvas } from '../v32/SignalCanvas';
import { heroSignalScene } from '../v32/signalScenes';
import { AnimatedCharacters } from '../v33/AnimatedCharacters';
import { SignalNodeInspector } from '../v33/SignalNodeInspector';

const heroPhases = ['IDEA', 'INTERFACE', 'API', 'LOGIC', 'DATA', 'DELIVERY'];

export function Hero() {
  const { text } = useLocale();
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          motion: '(prefers-reduced-motion: no-preference)',
        },
        ({ conditions }) => {
          const reduced = Boolean(conditions?.reduce);
          const titleCharacters = gsap.utils.toArray<HTMLElement>(
            '.hero-title-v31 .animated-characters-v33__character',
          );
          const phases = gsap.utils.toArray<HTMLElement>('.hero-phase-v31');

          if (reduced) {
            gsap.set([titleCharacters, '.hero-support-v31', '.hero-actions-v31'], {
              clearProps: 'all',
              autoAlpha: 1,
            });
            gsap.set(phases, { autoAlpha: 1 });
            return;
          }

          const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
          intro
            .from(titleCharacters, {
              yPercent: 115,
              autoAlpha: 0,
              rotateX: -72,
              transformOrigin: '50% 100%',
              duration: 0.62,
              stagger: 0.035,
            })
            .from('.hero-role-v31', { clipPath: 'inset(0 100% 0 0)', duration: 0.55 }, 0.15)
            .from('.hero-support-v31', { clipPath: 'inset(0 0 100% 0)', duration: 0.65 }, 0.4)
            .from('.hero-actions-v31', { clipPath: 'inset(0 100% 0 0)', duration: 0.55 }, 0.52)
            .from(
              '.hero-signal-canvas-v32',
              { autoAlpha: 0, scale: 0.985, transformOrigin: 'center', duration: 0.9 },
              0.28,
            );
        },
      );
      return () => media.revert();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section className="hero-v31" ref={rootRef} aria-labelledby="hero-title-v31">
      <div className="hero-stage-v31">
        <div className="hero-copy-v31">
          <p className="hero-role-v31">
            <span>01</span> Software Engineer
          </p>
          <h1 className="hero-title-v31" id="hero-title-v31" aria-label={text(siteCopy.hero.title)}>
            <span className="hero-title-v31__line">
              <AnimatedCharacters text="Jonathan" />
            </span>
            <span className="hero-title-v31__line hero-title-v31__line--outline">
              <AnimatedCharacters text="Febraio" />
              <i className="hero-title-v31__caret" aria-hidden="true" />
            </span>
          </h1>
          <p className="hero-support-v31">{text(siteCopy.hero.intro)}</p>
          <div className="hero-actions-v31">
            <a className="primary-link-v31" href="#work">
              {text(siteCopy.hero.primary)} <span aria-hidden="true">↘</span>
            </a>
            <a
              className="text-link-v31"
              href="https://www.linkedin.com/in/jonathan-febraio/"
              target="_blank"
              rel="noreferrer"
            >
              {text(siteCopy.hero.secondary)} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div
          className="hero-architecture-v31"
          aria-label="Product request travelling through a complete software system"
        >
          <SignalCanvas scene={heroSignalScene} variant="hero" className="hero-signal-canvas-v32" />
          <SignalNodeInspector scene={heroSignalScene} variant="hero" />
          <span className="sr-only-v32">
            Product, web and mobile requests pass through API, backend, AI, data and delivery
            boundaries.
          </span>
        </div>

        <div className="hero-phases-v31" aria-label="End-to-end delivery phases">
          {heroPhases.map((phase, index) => (
            <span className="hero-phase-v31" key={phase}>
              <i>0{index + 1}</i> {phase}
            </span>
          ))}
        </div>
        <p className="hero-location-v31">{text(siteCopy.hero.location)}</p>
      </div>
    </section>
  );
}
