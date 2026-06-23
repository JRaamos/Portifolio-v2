import { useTranslation } from 'react-i18next';
import type { Experience } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { ExperienceCard, ExperienceList, ExperienceTop, Tags, Title } from './styled';

interface ExperienceSectionProps {
  experiences: Experience[];
}
export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { t } = useTranslation();
  return (
    <Section id="experience" labelledBy="experience-title">
      <Container>
        <ExperienceTop>
          <Badge>{t('experience.eyebrow')}</Badge>
          <Title id="experience-title">{t('experience.title')}</Title>
        </ExperienceTop>
        <ExperienceList>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id}>
              <time>{t(experience.periodKey)}</time>
              <div>
                <h3>{t(experience.roleKey)}</h3>
                <strong>{t(experience.companyKey)}</strong>
                <p>{t(experience.descriptionKey)}</p>
                <Tags>
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </Tags>
              </div>
            </ExperienceCard>
          ))}
        </ExperienceList>
      </Container>
    </Section>
  );
}
