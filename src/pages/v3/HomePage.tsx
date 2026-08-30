import { About } from '../../components/v3/About';
import { Contact } from '../../components/v3/Contact';
import { ExperienceTimeline } from '../../components/v3/ExperienceTimeline';
import { Footer } from '../../components/v3/Footer';
import { Header } from '../../components/v3/Header';
import { Hero } from '../../components/v3/Hero';
import { IndependentWork } from '../../components/v3/IndependentWork';
import { ProfessionalWork } from '../../components/v3/ProfessionalWork';
import { StatementBand } from '../../components/v3/StatementBand';
import { SystemStory } from '../../components/v3/SystemStory';
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
        ? 'Evidence-backed software engineering work across web, backend, mobile, AI, data and cloud delivery.'
        : 'Trabalho de engenharia de software com evidências entre web, backend, mobile, IA, dados e cloud.',
    image: `${rootUrl}og-cover.png`,
    canonical: rootUrl,
  });

  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <StatementBand />
        <ProfessionalWork />
        <SystemStory />
        <IndependentWork />
        <ExperienceTimeline />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
