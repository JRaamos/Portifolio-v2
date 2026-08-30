import { m, useReducedMotion } from 'motion/react';
import { useLocale } from '../../context/useLocale';
import type { WorkCase } from '../../types/v3';
import { OptimizedImage } from './OptimizedImage';

export function CaseVisual({ work, priority = false }: { work: WorkCase; priority?: boolean }) {
  const reduceMotion = useReducedMotion();
  const { text } = useLocale();

  if (work.image) {
    return (
      <div className={`case-visual case-visual--image case-visual--${work.accent}`}>
        <OptimizedImage
          src={work.image}
          alt={work.imageAlt ? text(work.imageAlt) : work.title}
          loading={priority ? 'eager' : 'lazy'}
          width={1280}
          height={720}
        />
        <span aria-hidden="true">{work.title}</span>
      </div>
    );
  }

  return (
    <div
      className={`case-visual case-visual--system case-visual--${work.accent}`}
      role="img"
      aria-label={`${work.title} system architecture illustration`}
    >
      <div className="visual-label">SYSTEM / {work.title.toUpperCase()}</div>
      <div className="visual-screen">
        <m.div
          className="visual-signal"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="visual-rail">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="visual-workspace">
          <div className="visual-kpi">
            <b>01</b>
            <span>PRODUCT</span>
          </div>
          <div className="visual-kpi">
            <b>02</b>
            <span>OPERATIONS</span>
          </div>
          <div className="visual-kpi">
            <b>03</b>
            <span>DELIVERY</span>
          </div>
          <div className="visual-stream">
            {[0, 1, 2, 3].map((item) => (
              <m.i
                key={item}
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + item * 0.1, duration: 0.65 }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="visual-footer">
        <span>WEB</span>
        <span>API</span>
        <span>DATA</span>
        <span>MOBILE</span>
      </div>
    </div>
  );
}
