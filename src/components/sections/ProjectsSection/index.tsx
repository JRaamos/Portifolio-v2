import { useTranslation } from 'react-i18next';
import type { Project } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import {
  CardActions,
  ProjectCard,
  ProjectGrid,
  ProjectVisual,
  ProjectsHeader,
  TagList,
  Title,
} from './styled';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}
export function ProjectsSection({ projects, onSelectProject }: ProjectsSectionProps) {
  const { t } = useTranslation();
  return (
    <Section id="projects" labelledBy="projects-title">
      <Container>
        <ProjectsHeader>
          <Badge>{t('projects.eyebrow')}</Badge>
          <Title id="projects-title">{t('projects.title')}</Title>
          <p>{t('projects.description')}</p>
        </ProjectsHeader>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} $visual={project.visual}>
              <ProjectVisual aria-hidden="true">
                <span />
                <span />
                <strong>{t(project.titleKey).slice(0, 1)}</strong>
              </ProjectVisual>
              <small>{t(project.categoryKey)}</small>
              <h3>{t(project.titleKey)}</h3>
              <p>{t(project.descriptionKey)}</p>
              <TagList>
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </TagList>
              <CardActions>
                <button type="button" onClick={() => onSelectProject(project)}>
                  {t('projects.viewProject')}
                </button>
              </CardActions>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  );
}
