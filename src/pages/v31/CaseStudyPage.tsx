import { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArchitectureMap } from '../../components/v31/ArchitectureMap';
import {
  engineeringModes,
  professionalScenes,
  setArchitectureScene,
  type ArchitectureNodeId,
  type ArchitectureScene,
} from '../../components/v31/architecture';
import { Header } from '../../components/v31/Header';
import { OptimizedImage } from '../../components/v31/OptimizedImage';
import { getWorkCase, siteCopy, workCases } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

gsap.registerPlugin(ScrollTrigger);

const rootUrl = 'https://jraamos.github.io/Portifolio-v2/';

function selectBaseScene(slug: string, kind: 'professional' | 'independent') {
  if (kind === 'professional') {
    if (slug === 'learning-intelligence-platform') return professionalScenes[0];
    if (slug === 'automotive-crm-platform') return professionalScenes[1];
    return professionalScenes[2];
  }
  if (slug === 'crypto-ai') return engineeringModes.ai;
  if (slug === 'buildbalance') return engineeringModes.backend;
  if (slug === 'febraio-tech') return engineeringModes.platform;
  return engineeringModes.web;
}

function buildCaseScenes(base: ArchitectureScene): ArchitectureScene[] {
  const ids = Object.keys(base.nodes) as ArchitectureNodeId[];
  const counts = [Math.min(3, ids.length), Math.min(5, ids.length), ids.length];
  const partial = counts.map((count, index) => {
    const visible = new Set(ids.slice(0, count));
    return {
      id: `${base.id}-${index}`,
      nodes: Object.fromEntries(
        ids.filter((id) => visible.has(id)).map((id) => [id, base.nodes[id]]),
      ) as ArchitectureScene['nodes'],
      edges: base.edges.filter(([from, to]) => visible.has(from) && visible.has(to)),
    };
  });
  const finalNodes = { ...base.nodes, shipped: { x: 825, y: 545 } };
  const lastNode = ids.at(-1) ?? 'data';
  partial.push({
    id: `${base.id}-quality`,
    nodes: finalNodes,
    edges: [...base.edges, [lastNode, 'shipped']],
  });
  return partial;
}

export function CaseStudyPage() {
  const { slug = '' } = useParams();
  const { text, locale } = useLocale();
  const work = getWorkCase(slug);
  const rootRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const caseScenes = useMemo(
    () => (work ? buildCaseScenes(selectBaseScene(work.slug, work.kind)) : []),
    [work],
  );

  useDocumentMeta({
    title: work
      ? `${work.title} — ${locale === 'en' ? 'Engineering case' : 'Case de engenharia'} · Jonathan Febraio`
      : 'Work not found · Jonathan Febraio',
    description: work ? text(work.summary) : 'Portfolio case study not found.',
    image: work?.image
      ? `${rootUrl}${work.image.replace(import.meta.env.BASE_URL, '')}`
      : `${rootUrl}og-cover.png`,
    canonical: `${rootUrl}work/${slug}/`,
  });

  useLayoutEffect(() => {
    const root = rootRef.current;
    const svg = mapRef.current?.querySelector<SVGSVGElement>('svg');
    if (!root || !svg || !work || !caseScenes.length) return;

    const context = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const chapters = gsap.utils.toArray<HTMLElement>('.case-chapter-v31');
      setArchitectureScene(svg, reduced ? caseScenes.at(-1)! : caseScenes[0], { duration: 0 });

      if (!reduced) {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.case-eyebrow-v31', { clipPath: 'inset(0 100% 0 0)', duration: 0.5 })
          .from('.case-title-v31 span', { yPercent: 110, duration: 0.85, stagger: 0.08 }, 0.08)
          .from('.case-summary-v31', { clipPath: 'inset(0 0 100% 0)', duration: 0.65 }, 0.3);

        chapters.forEach((chapter, index) => {
          ScrollTrigger.create({
            trigger: chapter,
            start: 'top 55%',
            end: 'bottom 38%',
            onEnter: () => setArchitectureScene(svg, caseScenes[index], { duration: 0.62 }),
            onEnterBack: () => setArchitectureScene(svg, caseScenes[index], { duration: 0.62 }),
            onToggle: ({ isActive }) => chapter.classList.toggle('is-active', isActive),
          });
        });
      } else {
        chapters.forEach((chapter) => chapter.classList.add('is-active'));
      }
    }, root);

    return () => context.revert();
  }, [caseScenes, locale, work]);

  if (!work) return <Navigate replace to="/404" />;

  const currentIndex = workCases.findIndex((item) => item.slug === work.slug);
  const nextWork = workCases[(currentIndex + 1) % workCases.length];
  const chapters = [
    {
      index: '01',
      label: text(siteCopy.case.challenge),
      title: text(work.challenge),
      content: [text(work.summary)],
    },
    {
      index: '02',
      label: text(siteCopy.case.contribution),
      title: locale === 'en' ? 'Work across the boundaries.' : 'Trabalho através das fronteiras.',
      content: work.contribution.map(text),
    },
    {
      index: '03',
      label: text(siteCopy.case.architecture),
      title: locale === 'en' ? 'Make the system legible.' : 'Tornar o sistema legível.',
      content: work.architecture.map((item) => `${text(item.label)} — ${text(item.value)}`),
    },
    {
      index: '04',
      label: text(siteCopy.case.quality),
      title:
        locale === 'en' ? 'Evidence completes the delivery.' : 'A evidência completa a entrega.',
      content: [...work.quality.map(text), ...work.evidence.map(text)],
    },
  ];

  return (
    <div className="case-page-v31" ref={rootRef} id="top">
      <Header />
      <main>
        <section className="case-hero-v31">
          <div className="case-hero-v31__top">
            <Link to="/#work">← {text(siteCopy.case.back)}</Link>
            <span>
              {work.kind === 'professional'
                ? 'ANONYMIZED PROFESSIONAL WORK'
                : 'INDEPENDENT PRODUCT'}
            </span>
          </div>
          <p className="case-eyebrow-v31">{text(work.eyebrow)}</p>
          <h1 className="case-title-v31" aria-label={work.title}>
            {work.title.split(' ').map((word) => (
              <span key={word}>{word}&nbsp;</span>
            ))}
          </h1>
          <p className="case-summary-v31">{text(work.summary)}</p>
          <dl className="case-meta-v31">
            <div>
              <dt>{text(siteCopy.case.role)}</dt>
              <dd>{text(work.role)}</dd>
            </div>
            <div>
              <dt>{text(siteCopy.case.period)}</dt>
              <dd>{work.period}</dd>
            </div>
            <div>
              <dt>{text(siteCopy.case.stack)}</dt>
              <dd>{work.stack.slice(0, 5).join(' · ')}</dd>
            </div>
          </dl>
        </section>

        {work.image ? (
          <section className="case-product-media-v31">
            <OptimizedImage
              src={work.image}
              alt={work.imageAlt ? text(work.imageAlt) : `${work.title} interface`}
              width={1280}
              height={720}
              loading="eager"
            />
          </section>
        ) : null}

        <section className="case-system-story-v31">
          <div className="case-chapters-v31">
            {chapters.map((chapter) => (
              <article className="case-chapter-v31" key={chapter.index}>
                <p>
                  {chapter.index} / {chapter.label}
                </p>
                <h2>{chapter.title}</h2>
                <ul>
                  {chapter.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="case-map-v31" ref={mapRef}>
            <div className="map-label-v31">
              <span>CASE ARCHITECTURE</span>
              <span>READ TO EVOLVE</span>
            </div>
            <ArchitectureMap label={`${work.title} architecture evolving with the case study`} />
            {work.confidentiality ? (
              <p className="privacy-line-v31">{text(work.confidentiality)}</p>
            ) : null}
          </div>
        </section>

        <section className="case-decisions-v31">
          <p>05 / {text(siteCopy.case.decisions)}</p>
          <h2>
            {locale === 'en'
              ? 'Decisions that shaped the system.'
              : 'Decisões que moldaram o sistema.'}
          </h2>
          <ol>
            {work.decisions.map((decision, index) => (
              <li key={decision.en}>
                <span>0{index + 1}</span>
                {text(decision)}
              </li>
            ))}
          </ol>
          <div className="case-actions-v31">
            {work.liveUrl ? (
              <a href={work.liveUrl} target="_blank" rel="noreferrer">
                {text(siteCopy.case.live)} ↗
              </a>
            ) : null}
            {work.sourceUrl ? (
              <a href={work.sourceUrl} target="_blank" rel="noreferrer">
                {work.sourceLabel ? text(work.sourceLabel) : text(siteCopy.case.source)} ↗
              </a>
            ) : null}
          </div>
        </section>

        <Link className="next-case-v31" to={`/work/${nextWork.slug}`}>
          <span>{text(siteCopy.case.next)}</span>
          <strong>{nextWork.title}</strong>
          <i aria-hidden="true">↗</i>
        </Link>
      </main>
    </div>
  );
}
