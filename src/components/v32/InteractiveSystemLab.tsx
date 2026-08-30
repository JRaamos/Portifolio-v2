import { useRef, useState, type KeyboardEvent } from 'react';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { SignalCanvas } from './SignalCanvas';
import { labModes } from './signalScenes';

export function InteractiveSystemLab() {
  const { text, locale } = useLocale();
  const [activeId, setActiveId] = useState<(typeof labModes)[number]['id']>('web');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = labModes.findIndex((mode) => mode.id === activeId);
  const activeMode = labModes[activeIndex];

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      nextIndex = (index + 1) % labModes.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + labModes.length) % labModes.length;
    } else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = labModes.length - 1;
    else return;
    event.preventDefault();
    setActiveId(labModes[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="system-lab-v32" id="system" aria-labelledby="system-lab-title-v32">
      <header className="section-heading-v31 section-heading-v31--horizontal system-lab-v32__heading">
        <div>
          <p>{text(siteCopy.system.index)}</p>
          <h2 id="system-lab-title-v32">
            {locale === 'en' ? 'Interactive System Lab.' : 'Laboratório Interativo de Sistemas.'}
          </h2>
        </div>
        <span>
          {locale === 'en'
            ? 'Choose a mode. The architecture, routes and technical boundary transform together.'
            : 'Escolha um modo. A arquitetura, as rotas e a fronteira técnica se transformam juntas.'}
        </span>
      </header>

      <div
        className="system-lab-v32__tabs"
        role="tablist"
        aria-label={locale === 'en' ? 'Engineering modes' : 'Modos de engenharia'}
      >
        {labModes.map((mode, index) => (
          <button
            key={mode.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`system-tab-${mode.id}`}
            type="button"
            role="tab"
            aria-selected={activeId === mode.id}
            aria-controls={`system-panel-${mode.id}`}
            tabIndex={activeId === mode.id ? 0 : -1}
            className={activeId === mode.id ? 'is-active' : ''}
            onClick={() => setActiveId(mode.id)}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') setActiveId(mode.id);
            }}
            onKeyDown={(event) => onTabKeyDown(event, index)}
          >
            <span>0{index + 1}</span>
            {mode.label}
          </button>
        ))}
      </div>

      <div className="system-lab-v32__stage">
        <div
          className="system-lab-v32__copy"
          id={`system-panel-${activeMode.id}`}
          role="tabpanel"
          aria-labelledby={`system-tab-${activeMode.id}`}
          key={`${activeMode.id}-${locale}`}
        >
          <p>{activeMode.label} / ACTIVE MODE</p>
          <h3>{activeMode.title[locale]}</h3>
          <span>{activeMode.body[locale]}</span>
          <strong>{activeMode.principle[locale]}</strong>
          <ul aria-label={locale === 'en' ? 'Technologies in this mode' : 'Tecnologias neste modo'}>
            {activeMode.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="system-lab-v32__field">
          <div className="system-lab-v32__field-meta" aria-hidden="true">
            <span>LIVE SYSTEM / {activeMode.label}</span>
            <span>POINTER VELOCITY + LOCAL ROUTING</span>
          </div>
          <SignalCanvas scene={activeMode.scene} variant="lab" className="system-lab-canvas-v32" />
          <ol className="sr-only-v32" aria-label={activeMode.principle[locale]}>
            {activeMode.scene.nodes.map((node) => (
              <li key={node.id}>{node.label}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
