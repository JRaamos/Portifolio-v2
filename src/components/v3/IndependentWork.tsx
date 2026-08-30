import { m } from 'motion/react';
import { Link } from 'react-router-dom';
import { independentCases, siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { ArrowIcon } from './ArrowIcon';
import { OptimizedImage } from './OptimizedImage';
import { SectionHeading } from './SectionHeading';

export function IndependentWork() {
  const { text } = useLocale();

  return (
    <section className="independent section-shell">
      <SectionHeading
        index={siteCopy.independent.index}
        title={siteCopy.independent.title}
        intro={siteCopy.independent.intro}
      />
      <div className="product-index">
        {independentCases.map((work, index) => (
          <m.article key={work.slug} className="product-row" initial="rest" whileHover="hover">
            <Link to={`/work/${work.slug}`}>
              <span className="product-row__number">{String(index + 1).padStart(2, '0')}</span>
              <div className="product-row__title">
                <p>{text(work.eyebrow)}</p>
                <h3>{work.title}</h3>
              </div>
              <p className="product-row__summary">{text(work.summary)}</p>
              <ul>
                {work.stack.slice(0, 3).map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <span className="product-row__arrow">
                <ArrowIcon />
              </span>
              {work.image ? (
                <m.div
                  className="product-row__preview"
                  variants={{
                    rest: { opacity: 0, scale: 0.92, rotate: -2 },
                    hover: { opacity: 1, scale: 1, rotate: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <OptimizedImage
                    src={work.image}
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                </m.div>
              ) : null}
            </Link>
          </m.article>
        ))}
      </div>
    </section>
  );
}
