import { useLocale } from '../../context/useLocale';

export function LanguageSwitch() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="language-switch-v31" aria-label="Language / Idioma">
      <button
        type="button"
        className={locale === 'en' ? 'is-active' : ''}
        aria-pressed={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={locale === 'pt' ? 'is-active' : ''}
        aria-pressed={locale === 'pt'}
        onClick={() => setLocale('pt')}
      >
        PT
      </button>
    </div>
  );
}
