import { useTranslation } from 'react-i18next';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { Author, Dots, Glow, QuoteIcon, TestimonialCard, TestimonialHeader, Title } from './styled';

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
          <Glow aria-hidden="true" />
          <QuoteIcon viewBox="0 0 32 32" aria-hidden="true">
            <path d="M7 21.5v-8.25C7 9.8 9.8 7 13.25 7h1.25" />
            <path d="M25 21.5v-8.25C25 9.8 22.2 7 18.75 7H17.5" />
            <path d="M7 21.5h7.5v-7.5H7" />
            <path d="M17.5 21.5H25v-7.5h-7.5" />
          </QuoteIcon>
          <p>&quot;{t('testimonial.quote')}&quot;</p>
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
