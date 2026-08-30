import { useTranslation } from 'react-i18next';
import type { SocialLink } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { Actions, Availability, ContactGrid, ContactLinks, ContactTitle } from './styled';

interface ContactSectionProps {
  socialLinks: SocialLink[];
}

export function ContactSection({ socialLinks }: ContactSectionProps) {
  const { t } = useTranslation();
  const email = socialLinks.find((link) => link.id === 'email');
  const github = socialLinks.find((link) => link.id === 'github');

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
          </div>
          <div>
            <p>{t('contact.description')}</p>
            <Availability>{t('contact.availability')}</Availability>
            <Actions>
              {email ? <a href={email.url}>{t('contact.primaryAction')}</a> : null}
              {github ? (
                <a href={github.url} target="_blank" rel="noreferrer">
                  {t('contact.secondaryAction')}
                </a>
              ) : null}
            </Actions>
            <ContactLinks aria-label={t('contact.socialLabel')}>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.id === 'email' ? undefined : '_blank'}
                  rel={link.id === 'email' ? undefined : 'noreferrer'}
                >
                  {t(link.labelKey)} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </ContactLinks>
          </div>
        </ContactGrid>
      </Container>
    </Section>
  );
}
