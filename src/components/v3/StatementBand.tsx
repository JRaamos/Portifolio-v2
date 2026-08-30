import { m, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';

export function StatementBand() {
  const ref = useRef<HTMLElement>(null);
  const { text } = useLocale();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [reduceMotion ? '0%' : '5%', reduceMotion ? '0%' : '-18%'],
  );

  return (
    <section ref={ref} className="statement-band" aria-label="Engineering statement">
      <m.p style={{ x }}>{text(siteCopy.statement)}</m.p>
      <div className="statement-ticker" aria-hidden="true">
        {['PRODUCT', 'WEB', 'MOBILE', 'BACKEND', 'AI', 'DATA', 'CLOUD'].map((item) => (
          <span key={item}>
            {item}
            <i />
          </span>
        ))}
      </div>
    </section>
  );
}
