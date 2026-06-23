import { useTranslation } from 'react-i18next';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { Author, Dots, TestimonialCard, TestimonialHeader, Title } from './styled';
export function TestimonialSection() {
  const { t } = useTranslation();
  return (
    <Section id="references" labelledBy="testimonial-title">
      <Container>
        <TestimonialHeader>
          <Badge>{t('testimonial.eyebrow')}</Badge>
          <Title id="testimonial-title">{t('testimonial.title')}</Title>
        </TestimonialHeader>
        <TestimonialCard>
          <p>{t('testimonial.quote')}</p>
          <Author>
            <span>AL</span>
            <div>
              <strong>{t('testimonial.name')}</strong>
              <small>{t('testimonial.role')}</small>
            </div>
          </Author>
        </TestimonialCard>
        <Dots>
          <i />
          <i />
          <i />
          <i />
        </Dots>
      </Container>
    </Section>
  );
}
