import { m, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { ArrowIcon } from './ArrowIcon';
import { SystemGlyph } from './SystemGlyph';

export function Hero() {
  const { text } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -100]);
  const glyphY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 140]);
  const fade = useTransform(scrollYProgress, [0, 0.78], [1, 0.18]);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <m.div className="hero-copy" style={{ y: titleY, opacity: fade }}>
        <m.p
          className="hero-eyebrow"
          initial={reduceMotion ? false : { y: 14 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span aria-hidden="true" />
          {text(siteCopy.hero.eyebrow)}
        </m.p>
        <h1 id="hero-title" className="hero-title" aria-label={text(siteCopy.hero.title)}>
          {text(siteCopy.hero.title)
            .split(' ')
            .map((word, index) => (
              <span key={`${word}-${index}`}>{word} </span>
            ))}
        </h1>
        <m.div
          className="hero-bottom"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>{text(siteCopy.hero.intro)}</p>
          <div className="hero-actions">
            <a className="text-link text-link--strong" href="#work">
              {text(siteCopy.hero.primary)}
              <ArrowIcon direction="down" />
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/jonathan-febraio/"
              target="_blank"
              rel="noreferrer"
            >
              {text(siteCopy.hero.secondary)}
              <ArrowIcon />
            </a>
          </div>
        </m.div>
      </m.div>
      <m.div
        className="hero-system"
        style={{ y: glyphY }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <SystemGlyph />
      </m.div>
      <div className="hero-meta">
        <span>{text(siteCopy.hero.location)}</span>
        <a href="#system">
          {text(siteCopy.hero.scroll)}
          <ArrowIcon direction="down" />
        </a>
      </div>
    </section>
  );
}
