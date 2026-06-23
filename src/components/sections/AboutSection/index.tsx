import { useTranslation } from 'react-i18next';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { AboutGrid, Bio, Facts, Portrait, Title } from './styled';

export function AboutSection() {
  const { t } = useTranslation();
  const facts = ['philosophy', 'specialty', 'focus', 'company'] as const;
  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <AboutGrid>
          <Portrait>
            <img
              src="http://localhost:3845/assets/2916980f579b2d3daadae284c6920494b07c28ac.png"
              alt={t('brand.name')}
              loading="lazy"
            />
            <span>{t('about.companyValue')}</span>
            <small>{t('about.location')}</small>
          </Portrait>
          <Bio>
            <Badge>{t('about.eyebrow')}</Badge>
            <Title id="about-title">
              {t('about.titlePrefix')}
              <span>{t('about.titleAccent')}</span>
            </Title>
            <p>{t('about.bodyOne')}</p>
            <p>{t('about.bodyTwo')}</p>
            <Facts>
              {facts.map((fact) => (
                <div key={fact}>
                  <span>{t(`about.${fact}Label`)}</span>
                  <strong>{t(`about.${fact}Value`)}</strong>
                </div>
              ))}
            </Facts>
          </Bio>
        </AboutGrid>
      </Container>
    </Section>
  );
}
