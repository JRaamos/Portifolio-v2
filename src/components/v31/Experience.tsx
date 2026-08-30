import { experiences, siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';

export function Experience() {
  const { text } = useLocale();
  return (
    <section className="experience-v31" aria-labelledby="experience-title-v31">
      <header className="section-heading-v31 section-heading-v31--horizontal">
        <div>
          <p>{text(siteCopy.experience.index)}</p>
          <h2 id="experience-title-v31">{text(siteCopy.experience.title)}</h2>
        </div>
      </header>
      <ol className="experience-list-v31">
        {experiences.map((entry, index) => (
          <li key={entry.id}>
            <span>0{index + 1}</span>
            <time>{entry.period}</time>
            <div>
              <p>{entry.company}</p>
              <h3>{text(entry.role)}</h3>
              <small>{text(entry.summary)}</small>
            </div>
            <ul>
              {entry.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
