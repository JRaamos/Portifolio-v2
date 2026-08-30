import { m, useReducedMotion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowIcon } from '../../components/v3/ArrowIcon';
import { CaseVisual } from '../../components/v3/CaseVisual';
import { Footer } from '../../components/v3/Footer';
import { Header } from '../../components/v3/Header';
import { Reveal } from '../../components/v3/Reveal';
import { getWorkCase, siteCopy, workCases } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const rootUrl = 'https://jraamos.github.io/Portifolio-v2/';

export function CaseStudyPage() {
  const { slug = '' } = useParams();
  const { text, locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const work = getWorkCase(slug);

  useDocumentMeta({
    title: work
      ? `${work.title} — ${locale === 'en' ? 'Case Study' : 'Estudo de caso'} · Jonathan Febraio`
      : 'Work not found · Jonathan Febraio',
    description: work ? text(work.summary) : 'Portfolio case study not found.',
    image: work?.image
      ? `${rootUrl}${work.image.replace(import.meta.env.BASE_URL, '')}`
      : `${rootUrl}og-cover.png`,
    canonical: `${rootUrl}work/${slug}/`,
  });

  if (!work) return <Navigate replace to="/404" />;

  const currentIndex = workCases.findIndex((item) => item.slug === work.slug);
  const nextWork = workCases[(currentIndex + 1) % workCases.length];

  return (
    <div className="case-page" id="top">
      <Header />
      <main>
        <section className={`case-hero case-hero--${work.accent}`}>
          <div className="case-hero__top section-shell">
            <Link className="back-link" to="/#work">
              <ArrowIcon direction="right" />
              {text(siteCopy.case.back)}
            </Link>
            <p>
              {work.kind === 'professional'
                ? locale === 'en'
                  ? 'Professional work'
                  : 'Trabalho profissional'
                : locale === 'en'
                  ? 'Independent product'
                  : 'Produto independente'}
            </p>
          </div>
          <div className="case-hero__body section-shell">
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="case-hero__eyebrow">{text(work.eyebrow)}</p>
              <h1>{work.title}</h1>
            </m.div>
            <m.p
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {text(work.summary)}
            </m.p>
          </div>
          <div className="case-hero__meta section-shell">
            <div>
              <span>{text(siteCopy.case.role)}</span>
              <strong>{text(work.role)}</strong>
            </div>
            <div>
              <span>{text(siteCopy.case.period)}</span>
              <strong>{work.period}</strong>
            </div>
            <div>
              <span>{text(siteCopy.case.stack)}</span>
              <strong>{work.stack.slice(0, 4).join(' · ')}</strong>
            </div>
          </div>
        </section>

        <section className="case-media section-shell">
          <CaseVisual work={work} priority />
          {work.confidentiality ? (
            <p className="privacy-note">
              <span>PRIVATE / SAFE</span>
              {text(work.confidentiality)}
            </p>
          ) : null}
        </section>

        <section className="case-narrative section-shell">
          <Reveal className="case-challenge">
            <p className="section-index">01 / {text(siteCopy.case.challenge)}</p>
            <h2>{text(work.challenge)}</h2>
          </Reveal>

          <div className="case-columns">
            <Reveal>
              <h2>{text(siteCopy.case.contribution)}</h2>
              <ol className="number-list">
                {work.contribution.map((item, index) => (
                  <li key={item.en}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{text(item)}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <h2>{text(siteCopy.case.decisions)}</h2>
              <ul className="decision-list">
                {work.decisions.map((item) => (
                  <li key={item.en}>{text(item)}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="case-architecture">
          <div className="section-shell">
            <Reveal className="case-architecture__heading">
              <p className="section-index">02 / {text(siteCopy.case.architecture)}</p>
              <h2>
                {locale === 'en' ? 'How the pieces hold together.' : 'Como as partes se conectam.'}
              </h2>
            </Reveal>
            <div className="architecture-flow">
              {work.architecture.map((item, index) => (
                <m.div
                  key={item.label.en}
                  initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.55 }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{text(item.label)}</h3>
                  <p>{text(item.value)}</p>
                  {index < work.architecture.length - 1 ? (
                    <i aria-hidden="true">
                      <ArrowIcon direction="right" />
                    </i>
                  ) : null}
                </m.div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-proof section-shell">
          <Reveal>
            <p className="section-index">03 / {text(siteCopy.case.quality)}</p>
            <h2>
              {locale === 'en'
                ? 'Evidence is part of the interface.'
                : 'Evidência faz parte da interface.'}
            </h2>
          </Reveal>
          <div className="proof-grid">
            <div>
              <h3>{text(siteCopy.case.quality)}</h3>
              <ul>
                {work.quality.map((item) => (
                  <li key={item.en}>{text(item)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{text(siteCopy.case.evidence)}</h3>
              <ul>
                {work.evidence.map((item) => (
                  <li key={item.en}>{text(item)}</li>
                ))}
              </ul>
            </div>
          </div>
          {work.liveUrl || work.sourceUrl ? (
            <div className="case-actions">
              {work.liveUrl ? (
                <a href={work.liveUrl} target="_blank" rel="noreferrer">
                  {text(siteCopy.case.live)}
                  <ArrowIcon />
                </a>
              ) : null}
              {work.sourceUrl ? (
                <a href={work.sourceUrl} target="_blank" rel="noreferrer">
                  {work.sourceLabel ? text(work.sourceLabel) : text(siteCopy.case.source)}
                  <ArrowIcon />
                </a>
              ) : null}
            </div>
          ) : null}
        </section>

        <Link className="next-case" to={`/work/${nextWork.slug}`}>
          <span>{text(siteCopy.case.next)}</span>
          <strong>{nextWork.title}</strong>
          <ArrowIcon direction="right" />
        </Link>
      </main>
      <Footer />
    </div>
  );
}
