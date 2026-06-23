import { useTranslation } from 'react-i18next';
import type { Project } from '../../../types/portfolio';
import {
  Actions,
  Backdrop,
  CloseButton,
  FeatureList,
  ModalCard,
  ModalHeader,
  StackList,
} from './styled';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useTranslation();
  if (!project) return null;
  const features = ['featureOne', 'featureTwo', 'featureThree', 'featureFour'] as const;
  return (
    <Backdrop role="presentation" onClick={onClose}>
      <ModalCard
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose} aria-label={t('modal.close')}>
          ×
        </CloseButton>
        <ModalHeader>
          <div>
            <span>{t(project.categoryKey)}</span>
            <strong>{t('modal.status')}</strong>
          </div>
          <h2 id="project-modal-title">{t(project.titleKey)}</h2>
          <p>{t(project.descriptionKey)}</p>
        </ModalHeader>
        <section>
          <h3>{t('modal.overview')}</h3>
          <p>{t('projects.vanta.description')}</p>
        </section>
        <div>
          <section>
            <h3>{t('modal.features')}</h3>
            <FeatureList>
              {features.map((feature) => (
                <li key={feature}>{t(`modal.${feature}`)}</li>
              ))}
            </FeatureList>
          </section>
          <section>
            <h3>{t('modal.stack')}</h3>
            <StackList>
              {project.tags
                .concat('AWS')
                .slice(0, 5)
                .map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
            </StackList>
            <small>★ {t('modal.stars')}</small>
          </section>
        </div>
        <Actions>
          <a href="https://github.com/jonathanfebraio" target="_blank" rel="noreferrer">
            {t('modal.demo')}
          </a>
          <a href="https://github.com/jonathanfebraio" target="_blank" rel="noreferrer">
            {t('modal.source')}
          </a>
        </Actions>
      </ModalCard>
    </Backdrop>
  );
}
