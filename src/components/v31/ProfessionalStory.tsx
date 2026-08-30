import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { professionalCases, siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { ArchitectureMap } from './ArchitectureMap';
import { professionalScenes, setArchitectureScene } from './architecture';

gsap.registerPlugin(ScrollTrigger);

export function ProfessionalStory() {
  const { text, locale } = useLocale();
  const rootRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const mapRoot = mapRef.current;
    const svg = mapRoot?.querySelector<SVGSVGElement>('svg');
    if (!root || !mapRoot || !svg) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      const scenes = gsap.utils.toArray<HTMLElement>('.professional-scene-v31');

      media.add(
        {
          desktop: '(min-width: 900px)',
          mobile: '(max-width: 899px)',
          reduce: '(prefers-reduced-motion: reduce)',
        },
        ({ conditions }) => {
          const reduced = Boolean(conditions?.reduce);
          const desktop = Boolean(conditions?.desktop);

          setArchitectureScene(svg, professionalScenes[0], { duration: 0 });
          gsap.set(scenes, { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)' });
          gsap.set(scenes[0], { autoAlpha: 1, clipPath: 'inset(0 0 0% 0)' });

          if (reduced) {
            gsap.set(scenes, {
              autoAlpha: 1,
              clipPath: 'none',
              position: 'relative',
              pointerEvents: 'auto',
            });
            setArchitectureScene(svg, professionalScenes[2], { duration: 0 });
            return;
          }

          if (desktop) {
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: root,
                start: 'top top',
                end: '+=320%',
                pin: '.professional-stage-v31',
                scrub: 0.75,
                anticipatePin: 1,
              },
            });

            scenes.forEach((scene, index) => {
              if (index === 0) return;
              const previous = scenes[index - 1];
              timeline.to(previous, {
                clipPath: 'inset(100% 0 0 0)',
                autoAlpha: 0.14,
                duration: 0.25,
                pointerEvents: 'none',
              });
              const morph = setArchitectureScene(svg, professionalScenes[index], {
                duration: 0.5,
                paused: true,
              });
              timeline.add(morph, '<');
              morph.paused(false);
              timeline.to(
                scene,
                {
                  clipPath: 'inset(0 0 0% 0)',
                  autoAlpha: 1,
                  duration: 0.32,
                  pointerEvents: 'auto',
                },
                '<0.15',
              );
              timeline.to(scene, { duration: 0.25 });
            });
          } else {
            scenes.forEach((scene, index) => {
              gsap.set(scene, { autoAlpha: 1, clipPath: 'none', pointerEvents: 'auto' });
              ScrollTrigger.create({
                trigger: scene,
                start: 'top 62%',
                end: 'bottom 42%',
                onEnter: () => setArchitectureScene(svg, professionalScenes[index]),
                onEnterBack: () => setArchitectureScene(svg, professionalScenes[index]),
              });
            });
          }
        },
      );

      return () => media.revert();
    }, root);

    return () => context.revert();
  }, [locale]);

  return (
    <section
      className="professional-story-v31"
      id="work"
      ref={rootRef}
      aria-labelledby="professional-title-v31"
    >
      <div className="professional-stage-v31">
        <div className="professional-map-v31" ref={mapRef}>
          <div className="map-label-v31">
            <span>SHARED ARCHITECTURE</span>
            <span>SCROLL TO MORPH</span>
          </div>
          <ArchitectureMap
            label={
              locale === 'en'
                ? 'Architecture morphing across three professional product domains'
                : 'Arquitetura se transformando entre três domínios profissionais'
            }
          />
          <p className="privacy-line-v31">
            {locale === 'en'
              ? 'Client identities, provider names, private interfaces and operational data are intentionally withheld.'
              : 'Identidades de clientes, nomes de provedores, interfaces privadas e dados operacionais foram omitidos intencionalmente.'}
          </p>
        </div>
        <div className="professional-copy-v31">
          <header className="section-heading-v31">
            <p>{text(siteCopy.professional.index)}</p>
            <h2 id="professional-title-v31">{text(siteCopy.professional.title)}</h2>
            <span>{text(siteCopy.professional.intro)}</span>
          </header>
          <div className="professional-scenes-v31">
            {professionalCases.map((work, index) => (
              <article className="professional-scene-v31" key={work.slug} data-scene={index}>
                <p className="scene-index-v31">
                  CASE 0{index + 1} / {work.disciplines.map(text).join(' · ')}
                </p>
                <h3>{work.title}</h3>
                <p>{text(work.summary)}</p>
                <ul>
                  {work.contribution.slice(0, 2).map((item) => (
                    <li key={item.en}>{text(item)}</li>
                  ))}
                </ul>
                <Link to={`/work/${work.slug}`}>
                  {locale === 'en' ? 'Open anonymized case' : 'Abrir case anonimizado'}{' '}
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
