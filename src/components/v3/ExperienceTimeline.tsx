import { experiences, siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ExperienceTimeline() {
  const { text } = useLocale();

  return (
    <section className="experience section-shell">
      <SectionHeading index={siteCopy.experience.index} title={siteCopy.experience.title} />
      <ol className="timeline">
        {experiences.map((entry, index) => (
          <li key={entry.id}>
            <Reveal className="timeline-entry" delay={index * 0.07}>
              <div className="timeline-entry__period">{entry.period}</div>
              <div className="timeline-entry__main">
                <p>{entry.company}</p>
                <h3>{text(entry.role)}</h3>
                <span>{text(entry.summary)}</span>
              </div>
              <ul>
                {entry.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
