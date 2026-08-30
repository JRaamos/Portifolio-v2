import { m, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { Reveal } from './Reveal';
import { OptimizedImage } from './OptimizedImage';

export function About() {
  const { text } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [reduceMotion ? 0 : -32, reduceMotion ? 0 : 32],
  );

  return (
    <section ref={ref} id="about" className="about section-shell">
      <div className="about-portrait">
        <m.div className="about-portrait__image" style={{ y: imageY }}>
          <OptimizedImage
            src={`${import.meta.env.BASE_URL}profile/jonathan-febraio.png`}
            alt="Jonathan Febraio"
            loading="lazy"
            width={960}
            height={960}
          />
        </m.div>
        <span aria-hidden="true">JF / 2026</span>
      </div>
      <Reveal className="about-copy">
        <p className="section-index">{text(siteCopy.about.index)}</p>
        <h2>{text(siteCopy.about.title)}</h2>
        <p>{text(siteCopy.about.body)}</p>
        <ol>
          {siteCopy.about.principles.map((principle, index) => (
            <li key={principle.en}>
              <span>0{index + 1}</span>
              {text(principle)}
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
