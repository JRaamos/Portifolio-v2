import { useLocale } from '../../context/useLocale';

export function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="site-footer section-shell">
      <p>© 2026 Jonathan Febraio</p>
      <p>
        {locale === 'en'
          ? 'Designed as a working system, not a résumé page.'
          : 'Projetado como um sistema em funcionamento, não uma página de currículo.'}
      </p>
      <a href="#top">{locale === 'en' ? 'Back to top ↑' : 'Voltar ao topo ↑'}</a>
    </footer>
  );
}
