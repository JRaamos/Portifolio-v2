import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { SignalCanvas } from '../v32/SignalCanvas';
import { heroSignalScene } from '../v32/signalScenes';

gsap.registerPlugin(ScrollTrigger);

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
          const titleLines = gsap.utils.toArray<HTMLElement>('.hero-title-v31 span');
          const phases = gsap.utils.toArray<HTMLElement>('.hero-phase-v31');

          if (reduced) {
            gsap.set([titleLines, '.hero-support-v31', '.hero-actions-v31'], {
              clearProps: 'all',
              autoAlpha: 1,
            });
            gsap.set(phases, { autoAlpha: 1 });
            return;
          }

          const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
          intro
            .from(titleLines, { yPercent: 112, duration: 0.9, stagger: 0.1 })
            .from('.hero-role-v31', { clipPath: 'inset(0 100% 0 0)', duration: 0.55 }, 0.15)
            .from('.hero-support-v31', { clipPath: 'inset(0 0 100% 0)', duration: 0.65 }, 0.4)
            .from('.hero-actions-v31', { clipPath: 'inset(0 100% 0 0)', duration: 0.55 }, 0.52)
            .from(
              '.hero-signal-canvas-v32',
              { autoAlpha: 0, scale: 0.985, transformOrigin: 'center', duration: 0.9 },
              0.28,
            );

          const scroll = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.55,
            },
          });

          phases.forEach((phase, index) => {
            scroll
              .to(phases, { color: '#7f8998', duration: 0.08 }, index)
              .to(phase, { color: '#dcecff', x: 8, duration: 0.1 }, index);
          });
          scroll.to(
            '.hero-signal-canvas-v32',
            { scale: 1.035, transformOrigin: '52% 47%', duration: 0.8 },
            4.8,
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
            <span>Jonathan</span>
            <span>Febraio</span>
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
