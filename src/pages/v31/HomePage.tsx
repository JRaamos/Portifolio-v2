import { AboutContact } from '../../components/v31/AboutContact';
import { EngineeringModes } from '../../components/v31/EngineeringModes';
import { Experience } from '../../components/v31/Experience';
import { Header } from '../../components/v31/Header';
import { Hero } from '../../components/v31/Hero';
import { ProductChapters } from '../../components/v31/ProductChapters';
import { ProfessionalStory } from '../../components/v31/ProfessionalStory';
import { useLocale } from '../../context/useLocale';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const rootUrl = 'https://jraamos.github.io/Portifolio-v2/';

export function HomePage() {
  const { locale } = useLocale();
  useDocumentMeta({
    title:
      locale === 'en'
        ? 'Jonathan Febraio — Software Engineer · Full Stack & AI'
        : 'Jonathan Febraio — Engenheiro de Software · Full Stack & IA',
    description:
      locale === 'en'
        ? 'Software engineering across web, backend, mobile and AI — from system design to production delivery.'
        : 'Engenharia de software entre web, backend, mobile e IA — do desenho do sistema à entrega em produção.',
    image: `${rootUrl}og-cover.png`,
    canonical: rootUrl,
  });

  return (
    <div id="top" className="portfolio-v31">
      <Header />
      <main>
        <Hero />
        <ProfessionalStory />
        <EngineeringModes />
        <ProductChapters />
        <Experience />
        <AboutContact />
      </main>
    </div>
  );
}
