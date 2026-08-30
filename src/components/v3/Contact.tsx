import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { ArrowIcon } from './ArrowIcon';
import { Reveal } from './Reveal';

export function Contact() {
  const { text } = useLocale();

  return (
    <section id="contact" className="contact section-shell">
      <Reveal>
        <p className="section-index">{text(siteCopy.contact.index)}</p>
        <h2>{text(siteCopy.contact.title)}</h2>
        <p>{text(siteCopy.contact.body)}</p>
        <div className="contact-actions">
          <a className="contact-primary" href="mailto:jhonyramos46@gmail.com">
            {text(siteCopy.contact.email)}
            <ArrowIcon />
          </a>
          <a href="https://github.com/JRaamos" target="_blank" rel="noreferrer">
            {text(siteCopy.contact.github)}
            <ArrowIcon />
          </a>
        </div>
      </Reveal>
      <div className="contact-status">
        <i aria-hidden="true" />
        {text(siteCopy.contact.availability)}
      </div>
    </section>
  );
}
