import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';

export const whatsappUrl =
  'https://wa.me/5511921404143?text=Hello%20Jonathan%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20talk.';

export function WhatsAppButton() {
  const { text } = useLocale();

  return (
    <a
      className="whatsapp-float-v31"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${text(siteCopy.contact.whatsapp)} — +55 11 92140-4143`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z" />
        <path d="M8.2 8.4c.3 3.5 2 5.2 5.4 6.3M8.4 8.1l1.5-.6 1.1 2.2-1 1M13.6 14.7l.9-1 2.2 1.1-.6 1.5" />
      </svg>
      <span>{text(siteCopy.contact.whatsapp)}</span>
    </a>
  );
}
