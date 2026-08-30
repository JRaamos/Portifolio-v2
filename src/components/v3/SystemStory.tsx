import { m, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { SectionHeading } from './SectionHeading';

export function SystemStory() {
  const { text } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 18]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);

  return (
    <section ref={ref} id="system" className="system-story">
      <div className="system-story__head section-shell">
        <SectionHeading
          index={siteCopy.system.index}
          title={siteCopy.system.title}
          intro={siteCopy.system.intro}
          inverse
        />
      </div>
      <div className="system-story__body section-shell">
        <div className="system-story__steps">
          {siteCopy.system.layers.map((layer, index) => (
            <m.article
              key={layer.id}
              className={active === index ? 'is-active' : ''}
              onViewportEnter={() => setActive(index)}
              viewport={{ margin: '-35% 0px -45% 0px' }}
            >
              <p>
                {String(index + 1).padStart(2, '0')} / {text(layer.label)}
              </p>
              <h3>{text(layer.title)}</h3>
              <span>{text(layer.body)}</span>
            </m.article>
          ))}
        </div>
        <div className="system-story__stage" aria-hidden="true">
          <m.div className="system-core" style={{ rotate, scale }}>
            <div className="system-core__ring system-core__ring--outer" />
            <div className="system-core__ring system-core__ring--inner" />
            <div className="system-core__index">0{active + 1}</div>
            <m.div
              key={active}
              className="system-core__label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {text(siteCopy.system.layers[active].label)}
            </m.div>
            {siteCopy.system.layers.map((layer, index) => (
              <i
                key={layer.id}
                className={index <= active ? 'is-live' : ''}
                style={{ '--node-angle': `${index * 60}deg` } as React.CSSProperties}
              />
            ))}
          </m.div>
          <div className="stage-coordinate stage-coordinate--top">SYSTEM / 001</div>
          <div className="stage-coordinate stage-coordinate--bottom">END–TO–END DELIVERY</div>
        </div>
      </div>
    </section>
  );
}
