import { useTranslation } from 'react-i18next';
import type { Project } from '../../../types/portfolio';
import { GlassCard } from '../../glass/GlassCard';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import {
  ProjectContent,
  ProjectLink,
  ProjectList,
  ProjectMeta,
  ProjectVisual,
  ProjectsHeader,
  Title,
} from './styled';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useTranslation();

  return (
    <Section id="projects" labelledBy="projects-title">
      <Container>
        <ProjectsHeader>
          <Badge>{t('projects.eyebrow')}</Badge>
          <Title id="projects-title">{t('projects.title')}</Title>
        </ProjectsHeader>
        <ProjectList>
          {projects.map((project) => (
            <GlassCard key={project.id}>
              <ProjectVisual aria-hidden="true">
                <span>{project.index}</span>
                <strong>{t(project.titleKey).slice(0, 1)}</strong>
              </ProjectVisual>
              <ProjectContent>
                <ProjectMeta>{t(project.impactKey)}</ProjectMeta>
                <h3>{t(project.titleKey)}</h3>
                <p>{t(project.descriptionKey)}</p>
                <div>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ProjectLink href={project.url} target="_blank" rel="noreferrer">
                  {t('projects.visit')} <span aria-hidden="true">↗</span>
                </ProjectLink>
              </ProjectContent>
            </GlassCard>
          ))}
        </ProjectList>
      </Container>
    </Section>
  );
}
