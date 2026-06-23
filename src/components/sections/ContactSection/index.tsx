import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { SocialLink } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { ContactGrid, ContactLinks, ContactTitle, Field, Form, Submit } from './styled';

interface ContactSectionProps {
  socialLinks: SocialLink[];
}
export function ContactSection({ socialLinks }: ContactSectionProps) {
  const { t } = useTranslation();
  function submit(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <ContactGrid>
          <div>
            <Badge>{t('contact.eyebrow')}</Badge>
            <ContactTitle id="contact-title">
              {t('contact.titlePrefix')}
              <span>{t('contact.titleAccent')}</span>
            </ContactTitle>
            <p>{t('contact.description')}</p>
            <ContactLinks>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.id === 'email' ? undefined : '_blank'}
                  rel={link.id === 'email' ? undefined : 'noreferrer'}
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </ContactLinks>
          </div>
          <Form onSubmit={submit}>
            <Field>
              <label htmlFor="name">{t('contact.name')}</label>
              <input id="name" placeholder={t('contact.namePlaceholder')} />
            </Field>
            <Field>
              <label htmlFor="email">{t('contact.email')}</label>
              <input id="email" type="email" placeholder={t('contact.emailPlaceholder')} />
            </Field>
            <Field>
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea id="message" rows={4} placeholder={t('contact.messagePlaceholder')} />
            </Field>
            <Submit type="submit">{t('contact.send')}</Submit>
          </Form>
        </ContactGrid>
      </Container>
    </Section>
  );
}
