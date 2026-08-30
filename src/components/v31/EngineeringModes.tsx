import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { ArchitectureMap } from './ArchitectureMap';
import { engineeringModes, modeCopy, setArchitectureScene } from './architecture';

const modeIds = ['web', 'mobile', 'backend', 'ai', 'platform'];

export function EngineeringModes() {
  const { text, locale } = useLocale();
  const [activeMode, setActiveMode] = useState('web');
  const rootRef = useRef<HTMLElement>(null);
  const initializedRef = useRef(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const svg = root?.querySelector<SVGSVGElement>('svg');
    if (!root || !svg) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = initializedRef.current && !reduced ? 0.72 : 0;
    const architecture = setArchitectureScene(svg, engineeringModes[activeMode], { duration });
    const copyAnimation = gsap.fromTo(
      root.querySelector('.mode-copy-v31'),
      { clipPath: reduced ? 'none' : 'inset(0 0 100% 0)', y: reduced ? 0 : 14 },
      { clipPath: 'inset(0 0 0% 0)', y: 0, duration: reduced ? 0 : 0.5, ease: 'power3.out' },
    );
    initializedRef.current = true;

    return () => {
      architecture.kill();
      copyAnimation.kill();
    };
  }, [activeMode]);

  const activeCopy = modeCopy[activeMode];

  return (
    <section
      className="engineering-modes-v31"
      id="system"
      ref={rootRef}
      aria-labelledby="modes-title-v31"
    >
      <header className="section-heading-v31 section-heading-v31--horizontal">
        <div>
          <p>{text(siteCopy.system.index)}</p>
          <h2 id="modes-title-v31">{locale === 'en' ? 'How I build.' : 'Como eu construo.'}</h2>
        </div>
        <span>
          {locale === 'en'
            ? 'Choose a mode. The system reorganizes; the engineering principle stays visible.'
            : 'Escolha um modo. O sistema se reorganiza; o princípio de engenharia permanece visível.'}
        </span>
      </header>

      <div
        className="mode-controls-v31"
        role="tablist"
        aria-label={locale === 'en' ? 'Engineering modes' : 'Modos de engenharia'}
      >
        {modeIds.map((id, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeMode === id}
            className={activeMode === id ? 'is-active' : ''}
            key={id}
            onClick={() => setActiveMode(id)}
          >
            <span>0{index + 1}</span>
            {modeCopy[id].label}
          </button>
        ))}
      </div>

      <div className="mode-stage-v31">
        <div className="mode-copy-v31" role="tabpanel">
          <p>{activeCopy.label} MODE</p>
          <h3>{activeCopy.title[locale]}</h3>
          <span>{activeCopy.body[locale]}</span>
        </div>
        <div className="mode-map-v31">
          <ArchitectureMap label={`${activeCopy.label} engineering architecture`} />
        </div>
      </div>
    </section>
  );
}
