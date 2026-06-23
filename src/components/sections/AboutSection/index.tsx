import { useTranslation } from 'react-i18next';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { AboutGrid, Copy, Lead, Stat, Stats, Title } from './styled';

export function AboutSection() {
  const { t } = useTranslation();
  const stats = ['years', 'projects', 'quality'] as const;

  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <AboutGrid>
          <div>
            <Badge>{t('about.eyebrow')}</Badge>
            <Title id="about-title">{t('about.title')}</Title>
          </div>
          <Copy>
            <Lead>{t('about.lead')}</Lead>
            <p>{t('about.body')}</p>
            <Stats>
              {stats.map((stat) => (
                <Stat key={stat}>
                  <strong>{t(`about.stats.${stat}Value`)}</strong>
                  <span>{t(`about.stats.${stat}Label`)}</span>
                </Stat>
              ))}
            </Stats>
          </Copy>
        </AboutGrid>
      </Container>
    </Section>
  );
}
