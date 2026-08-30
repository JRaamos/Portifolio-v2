import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { OptimizedImage } from './OptimizedImage';
import { whatsappUrl } from './WhatsAppButton';

export function AboutContact() {
  const { text, locale } = useLocale();
  return (
    <>
      <section className="about-v31" id="about" aria-labelledby="about-title-v31">
        <div className="about-portrait-v31">
          <OptimizedImage
            src={`${import.meta.env.BASE_URL}profile/jonathan-febraio.png`}
            alt="Jonathan Febraio"
            width={1254}
            height={1254}
          />
          <span>SOFTWARE / PRODUCT / SYSTEMS</span>
        </div>
        <div className="about-copy-v31">
          <p>{text(siteCopy.about.index)}</p>
          <h2 id="about-title-v31">{text(siteCopy.about.title)}</h2>
          <span>{text(siteCopy.about.body)}</span>
          <ol>
            {siteCopy.about.principles.map((principle, index) => (
              <li key={principle.en}>
                <i>0{index + 1}</i> {text(principle)}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact-v31" id="contact" aria-labelledby="contact-title-v31">
        <p>{text(siteCopy.contact.index)}</p>
        <h2 id="contact-title-v31">{text(siteCopy.contact.title)}</h2>
        <span>{text(siteCopy.contact.body)}</span>
        <div className="contact-links-v31">
          <a href="mailto:jhonyramos46@gmail.com">{text(siteCopy.contact.email)} ↗</a>
          <a href="https://github.com/JRaamos" target="_blank" rel="noreferrer">
            {text(siteCopy.contact.github)} ↗
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            {text(siteCopy.contact.whatsapp)} ↗
          </a>
        </div>
        <small>
          <i aria-hidden="true" /> {text(siteCopy.contact.availability)}
        </small>
        <footer>
          <span>© 2026 Jonathan Febraio</span>
          <span>
            {locale === 'en'
              ? 'Built as an engineering experience.'
              : 'Construído como uma experiência de engenharia.'}
          </span>
          <a href="#top">{locale === 'en' ? 'Back to top ↑' : 'Voltar ao topo ↑'}</a>
        </footer>
      </section>
    </>
  );
}
