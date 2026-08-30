import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const heroNodes = [
  ['product', 'PRODUCT', 110, 105],
  ['web', 'WEB', 110, 300],
  ['mobile', 'MOBILE', 115, 510],
  ['api', 'API', 405, 300],
  ['backend', 'BACKEND', 625, 430],
  ['ai', 'AI', 670, 120],
  ['data', 'DATA', 815, 500],
  ['cloud', 'CLOUD', 830, 290],
  ['integrations', 'INTEGRATIONS', 410, 520],
  ['shipped', 'SHIPPED', 760, 620],
] as const;

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
          const paths = gsap.utils.toArray<SVGPathElement>('.hero-system-v31 [data-trace]');
          const nodes = gsap.utils.toArray<SVGGElement>('.hero-system-v31 [data-hero-node]');
          const titleLines = gsap.utils.toArray<HTMLElement>('.hero-title-v31 span');
          const packet = root.querySelector<SVGCircleElement>('.hero-system-v31__packet');
          const phases = gsap.utils.toArray<HTMLElement>('.hero-phase-v31');

          paths.forEach((path) => path.setAttribute('pathLength', '1'));
          gsap.set(paths, { strokeDasharray: 1, strokeDashoffset: 1 });

          if (reduced) {
            gsap.set([titleLines, nodes, '.hero-support-v31', '.hero-actions-v31'], {
              clearProps: 'all',
              autoAlpha: 1,
            });
            gsap.set(paths, { strokeDashoffset: 0 });
            gsap.set(packet, { autoAlpha: 0 });
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
              nodes,
              { autoAlpha: 0, scale: 0.72, transformOrigin: 'center', stagger: 0.055 },
              0.35,
            )
            .to(
              paths,
              { strokeDashoffset: 0, duration: 1.25, stagger: 0.035, ease: 'power2.inOut' },
              0.52,
            )
            .fromTo(
              packet,
              { autoAlpha: 0 },
              {
                autoAlpha: 1,
                duration: 2.25,
                ease: 'power1.inOut',
                motionPath: {
                  path: '#hero-route-v31',
                  align: '#hero-route-v31',
                  alignOrigin: [0.5, 0.5],
                },
              },
              1.15,
            )
            .from(
              '.hero-system-v31 [data-hero-node="shipped"]',
              { filter: 'brightness(0.4)', duration: 0.4 },
              3.08,
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
              .to(phase, { color: '#dcecff', x: 8, duration: 0.1 }, index)
              .to(
                `[data-hero-node="${['product', 'web', 'api', 'backend', 'data', 'shipped'][index]}"]`,
                {
                  filter: 'brightness(1.75)',
                  scale: 1.05,
                  transformOrigin: 'center',
                  duration: 0.15,
                },
                index,
              );
          });
          scroll.to(
            '.hero-system-v31',
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

        <div className="hero-architecture-v31">
          <svg
            className="hero-system-v31"
            viewBox="0 0 1000 700"
            role="img"
            aria-label="Product request travelling through a complete software system"
          >
            <g className="hero-system-v31__grid" aria-hidden="true">
              <path d="M0 116H1000M0 232H1000M0 348H1000M0 464H1000M0 580H1000" />
              <path d="M166 0V700M332 0V700M498 0V700M664 0V700M830 0V700" />
            </g>
            <g className="hero-system-v31__traces" aria-hidden="true">
              <path data-trace d="M185 127 C270 130 320 290 480 322" />
              <path data-trace d="M185 322 H480" />
              <path data-trace d="M185 532 C300 530 350 385 480 322" />
              <path data-trace d="M480 322 C590 310 650 152 745 142" />
              <path data-trace d="M480 322 C560 365 615 450 700 452" />
              <path data-trace d="M480 322 H905" />
              <path data-trace d="M480 322 C565 420 595 535 490 545" />
              <path data-trace d="M700 452 C760 475 820 512 890 522" />
              <path
                data-trace
                id="hero-route-v31"
                className="is-primary"
                d="M185 127 C290 140 310 300 480 322 C620 340 690 500 835 642"
              />
            </g>
            <circle className="hero-system-v31__packet" cx="0" cy="0" r="7" aria-hidden="true" />
            {heroNodes.map(([id, label, x, y]) => (
              <g
                key={id}
                data-hero-node={id}
                className={`hero-node-v31 hero-node-v31--${id}`}
                transform={`translate(${x} ${y})`}
              >
                <rect width={id === 'integrations' ? 162 : 132} height="44" rx="3" />
                <circle cx="0" cy="0" r="4" />
                <text
                  x={id === 'integrations' ? 81 : 66}
                  y="23"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {label}
                </text>
              </g>
            ))}
          </svg>
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
