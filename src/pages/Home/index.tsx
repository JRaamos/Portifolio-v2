import { Footer } from '../../components/layout/Footer';
import { Header } from '../../components/layout/Header';
import { PageContainer } from '../../components/layout/PageContainer';
import { AboutSection } from '../../components/sections/AboutSection';
import { ContactSection } from '../../components/sections/ContactSection';
import { ExperienceSection } from '../../components/sections/ExperienceSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { ProjectsSection } from '../../components/sections/ProjectsSection';
import { SkillsSection } from '../../components/sections/SkillsSection';
import { ProjectModal } from '../../components/ui/ProjectModal';
import { AmbientLayer, Main } from './styled';
import { useController } from './useController';

export function Home() {
  const controller = useController();

  return (
    <PageContainer>
      <AmbientLayer aria-hidden="true" />
      <Header
        isMenuOpen={controller.isMenuOpen}
        onNavigate={controller.navigateTo}
        onMenuToggle={controller.toggleMenu}
      />
      <Main>
        <HeroSection onNavigate={controller.navigateTo} />
        <ProjectsSection
          projects={controller.data.projects}
          onSelectProject={controller.selectProject}
        />
        <AboutSection />
        <ExperienceSection experiences={controller.data.experiences} />
        <SkillsSection groups={controller.data.skillGroups} />
        <ContactSection socialLinks={controller.data.socialLinks} />
      </Main>
      <Footer />
      <ProjectModal project={controller.selectedProject} onClose={controller.closeProject} />
    </PageContainer>
  );
}
