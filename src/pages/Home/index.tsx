import { Footer } from '../../components/layout/Footer';
import { Header } from '../../components/layout/Header';
import { PageContainer } from '../../components/layout/PageContainer';
import { AboutSection } from '../../components/sections/AboutSection';
import { ContactSection } from '../../components/sections/ContactSection';
import { ExperienceSection } from '../../components/sections/ExperienceSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { ProjectsSection } from '../../components/sections/ProjectsSection';
import { QuoteSection } from '../../components/sections/QuoteSection';
import { SkillsSection } from '../../components/sections/SkillsSection';
import { StatsStrip } from '../../components/sections/StatsStrip';
import { TechMarquee } from '../../components/sections/TechMarquee';
import { TestimonialSection } from '../../components/sections/TestimonialSection';
import { WritingSection } from '../../components/sections/WritingSection';
import { ProjectModal } from '../../components/ui/ProjectModal';
import { AmbientLayer, Main } from './styled';
import { useController } from './useController';

export function Home() {
  const controller = useController();

  return (
    <PageContainer>
      <AmbientLayer aria-hidden="true" />
      <Header
        language={controller.language}
        isMenuOpen={controller.isMenuOpen}
        onLanguageChange={controller.changeLanguage}
        onNavigate={controller.navigateTo}
        onMenuToggle={controller.toggleMenu}
      />
      <Main>
        <HeroSection onNavigate={controller.navigateTo} />
        <StatsStrip />
        <TechMarquee />
        <ProjectsSection
          projects={controller.data.projects}
          onSelectProject={controller.selectProject}
        />
        <AboutSection />
        <QuoteSection />
        <ExperienceSection experiences={controller.data.experiences} />
        <SkillsSection groups={controller.data.skillGroups} />
        <TestimonialSection />
        <WritingSection articles={controller.data.articles} />
        <TechMarquee />
        <ContactSection socialLinks={controller.data.socialLinks} />
      </Main>
      <Footer />
      <ProjectModal project={controller.selectedProject} onClose={controller.closeProject} />
    </PageContainer>
  );
}
