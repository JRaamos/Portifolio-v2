import { useTranslation } from 'react-i18next';
import type { Project } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import {
  CardActions,
  ProjectCard,
  ProjectGrid,
  ProjectImage,
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
          {projects.map((project, index) => (
            <ProjectCard key={project.id} $featured={Boolean(project.featured)}>
              <ProjectImage>
                <img src={project.image} alt={t(project.imageAltKey)} loading={index > 1 ? 'lazy' : 'eager'} />
              </ProjectImage>
              <div>
                <small>{t(project.categoryKey)}</small>
                <h3>{t(project.titleKey)}</h3>
                <p>{t(project.descriptionKey)}</p>
                <TagList aria-label={`${t(project.titleKey)} stack`}>
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </TagList>
                <CardActions>
                  <button type="button" onClick={() => onSelectProject(project)}>
                    {t('projects.viewProject')} <span aria-hidden="true">↗</span>
                  </button>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      {t('projects.live')}
                    </a>
                  ) : null}
                </CardActions>
              </div>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  );
}
