import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '../../../types/portfolio';
import {
  Actions,
  Backdrop,
  CloseButton,
  DetailGrid,
  EvidenceNote,
  HeroImage,
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

  useEffect(() => {
    if (!project) return undefined;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose, project]);

  if (!project) return null;

  const details = [
    ['problem', project.problemKey],
    ['role', project.roleKey],
    ['architecture', project.architectureKey],
    ['decisions', project.decisionsKey],
    ['quality', project.qualityKey],
    ['deployment', project.deploymentKey],
  ] as const;

  return (
    <Backdrop role="presentation" onMouseDown={onClose}>
      <ModalCard
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose} aria-label={t('modal.close')}>
          ×
        </CloseButton>
        <HeroImage>
          <img src={project.image} alt={t(project.imageAltKey)} />
        </HeroImage>
        <ModalHeader>
          <span>{t(project.categoryKey)}</span>
          <h2 id="project-modal-title">{t(project.titleKey)}</h2>
          <p>{t(project.descriptionKey)}</p>
        </ModalHeader>
        <DetailGrid>
          {details.map(([label, key]) => (
            <section key={label}>
              <h3>{t(`modal.${label}`)}</h3>
              <p>{t(key)}</p>
            </section>
          ))}
        </DetailGrid>
        <section>
          <h3>{t('modal.stack')}</h3>
          <StackList>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </StackList>
        </section>
        {project.accessKey ? <EvidenceNote>{t(project.accessKey)}</EvidenceNote> : null}
        {project.liveUrl || project.sourceUrl ? (
          <Actions>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {t('modal.live')}
              </a>
            ) : null}
            {project.sourceUrl ? (
              <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                {t('modal.source')}
              </a>
            ) : null}
          </Actions>
        ) : null}
      </ModalCard>
    </Backdrop>
  );
}
