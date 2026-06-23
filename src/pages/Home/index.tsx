import { Footer } from '../../components/layout/Footer';
import { Header } from '../../components/layout/Header';
import { PageContainer } from '../../components/layout/PageContainer';
import { AboutSection } from '../../components/sections/AboutSection';
import { ContactSection } from '../../components/sections/ContactSection';
import { ExperienceSection } from '../../components/sections/ExperienceSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { ProjectsSection } from '../../components/sections/ProjectsSection';
import { SkillsSection } from '../../components/sections/SkillsSection';
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
        <AboutSection />
        <SkillsSection groups={controller.data.skillGroups} />
        <ProjectsSection projects={controller.data.projects} />
        <ExperienceSection experiences={controller.data.experiences} />
        <ContactSection socialLinks={controller.data.socialLinks} />
      </Main>
      <Footer />
    </PageContainer>
  );
}
