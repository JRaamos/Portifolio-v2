import { m } from 'motion/react';
import { Link } from 'react-router-dom';
import { professionalCases, siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { ArrowIcon } from './ArrowIcon';
import { CaseVisual } from './CaseVisual';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ProfessionalWork() {
  const { text } = useLocale();

  return (
    <section id="work" className="professional section-shell">
      <SectionHeading
        index={siteCopy.professional.index}
        title={siteCopy.professional.title}
        intro={siteCopy.professional.intro}
      />
      <div className="professional-list">
        {professionalCases.map((work, index) => (
          <article className="work-spread" key={work.slug}>
            <m.div
              className="work-spread__visual"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/work/${work.slug}`} aria-label={`${work.title}: ${text(work.summary)}`}>
                <CaseVisual work={work} priority={index === 0} />
              </Link>
            </m.div>
            <Reveal className="work-spread__copy">
              <div className="work-number">0{index + 1}</div>
              <p className="work-eyebrow">{text(work.eyebrow)}</p>
              <h3>
                <Link to={`/work/${work.slug}`}>{work.title}</Link>
              </h3>
              <p className="work-summary">{text(work.summary)}</p>
              <ul className="discipline-list">
                {work.disciplines.map((item) => (
                  <li key={item.en}>{text(item)}</li>
                ))}
              </ul>
              <Link className="case-link" to={`/work/${work.slug}`}>
                {text(siteCopy.case.contribution)}
                <ArrowIcon />
              </Link>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
