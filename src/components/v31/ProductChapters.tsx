import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { independentCases, siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { OptimizedImage } from './OptimizedImage';

gsap.registerPlugin(ScrollTrigger);

const productFlows: Record<string, string[]> = {
  'febraio-tech': ['STOREFRONT', 'API', 'COMMERCE RULES', 'DATA'],
  'manual-dos-achados': ['DISCOVERY', 'EDITORIAL MODEL', 'RANKING', 'SEARCH'],
  'crypto-ai': ['MARKET DATA', 'ANALYSIS', 'AI BOUNDARY', 'REVIEW'],
  buildbalance: ['PROJECT', 'DOMAIN RULES', 'LEDGER', 'AUDIT'],
};

export function ProductChapters() {
  const { text, locale } = useLocale();
  const rootRef = useRef<HTMLElement>(null);
  const products = independentCases.filter((work) => productFlows[work.slug]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const chapters = gsap.utils.toArray<HTMLElement>('.product-chapter-v31');
      chapters.forEach((chapter) => {
        const media = chapter.querySelector('.product-media-v31');
        const title = chapter.querySelector('.product-heading-v31');
        const lines = chapter.querySelectorAll('.product-flow-v31 i');
        if (reduced) {
          gsap.set([media, title, lines], { clearProps: 'all' });
          return;
        }
        gsap
          .timeline({
            scrollTrigger: {
              trigger: chapter,
              start: 'top 78%',
              end: 'center 45%',
              scrub: 0.55,
            },
          })
          .fromTo(
            media,
            { clipPath: 'inset(0 0 100% 0)', scale: 1.06 },
            { clipPath: 'inset(0 0 0% 0)', scale: 1 },
          )
          .fromTo(title, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }, 0.12)
          .fromTo(
            lines,
            { scaleX: 0, transformOrigin: 'left' },
            { scaleX: 1, stagger: 0.08 },
            0.26,
          );
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section className="products-v31" aria-labelledby="products-title-v31" ref={rootRef}>
      <header className="section-heading-v31 products-heading-v31">
        <p>{text(siteCopy.independent.index)}</p>
        <h2 id="products-title-v31">{text(siteCopy.independent.title)}</h2>
        <span>{text(siteCopy.independent.intro)}</span>
      </header>

      {products.map((work, index) => {
        const flow = productFlows[work.slug];
        return (
          <article
            className={`product-chapter-v31 ${index % 2 ? 'is-reversed' : ''}`}
            key={work.slug}
          >
            <div className="product-copy-v31">
              <p>
                0{index + 1} / {text(work.eyebrow)}
              </p>
              <h3 className="product-heading-v31">{work.title}</h3>
              <span>{text(work.summary)}</span>
              <ul>
                {work.stack.slice(0, 5).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={`/work/${work.slug}`}>
                {locale === 'en' ? 'Open product case' : 'Abrir case do produto'}{' '}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="product-media-v31">
              {work.image ? (
                <OptimizedImage
                  src={work.image}
                  alt={work.imageAlt ? text(work.imageAlt) : `${work.title} interface`}
                  width={1280}
                  height={720}
                />
              ) : null}
              <div className="product-media-v31__shade" aria-hidden="true" />
              <div className="product-flow-v31" aria-label={`${work.title} system flow`}>
                {flow.map((item, flowIndex) => (
                  <span key={item}>
                    {item}
                    {flowIndex < flow.length - 1 ? <i aria-hidden="true" /> : null}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
