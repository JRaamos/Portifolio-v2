import { useTranslation } from 'react-i18next';
import type { Experience } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import {
  CardHeader,
  ExperienceCard,
  ExperienceItem,
  ExperienceList,
  ExperienceTop,
  Marker,
  Period,
  RoleBlock,
  Tags,
  TimelineLine,
  Title,
} from './styled';

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
          <TimelineLine aria-hidden="true" />
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id}>
              <Marker aria-hidden="true" />
              <ExperienceCard>
                <CardHeader>
                  <RoleBlock>
                    <h3>{t(experience.roleKey)}</h3>
                    <strong>{t(experience.companyKey)}</strong>
                  </RoleBlock>
                  <Period dateTime={t(experience.periodKey)}>
                    <span aria-hidden="true" />
                    {t(experience.periodKey)}
                  </Period>
                </CardHeader>
                <p>{t(experience.descriptionKey)}</p>
                <Tags>
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </Tags>
              </ExperienceCard>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </Container>
    </Section>
  );
}
