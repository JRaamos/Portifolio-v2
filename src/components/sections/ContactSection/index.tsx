import { useTranslation } from 'react-i18next';
import type { SocialLink } from '../../../types/portfolio';
import { GlassPanel } from '../../glass/GlassPanel';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import {
  ActionLink,
  ContactActions,
  ContactCopy,
  ContactPanel,
  SocialLinks,
  Title,
} from './styled';

interface ContactSectionProps {
  socialLinks: SocialLink[];
}

export function ContactSection({ socialLinks }: ContactSectionProps) {
  const { t } = useTranslation();
  const email = socialLinks.find((link) => link.id === 'email');

  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <GlassPanel>
          <ContactPanel>
            <ContactCopy>
              <Badge>{t('contact.eyebrow')}</Badge>
              <Title id="contact-title">{t('contact.title')}</Title>
              <p>{t('contact.description')}</p>
            </ContactCopy>
            <ContactActions>
              {email && (
                <ActionLink href={email.url}>
                  {t('contact.emailAction')} <span aria-hidden="true">↗</span>
                </ActionLink>
              )}
              <span>{t('contact.socialLabel')}</span>
              <SocialLinks>
                {socialLinks
                  .filter((link) => link.id !== 'email')
                  .map((link) => (
                    <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
                      {t(link.labelKey)} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
              </SocialLinks>
            </ContactActions>
          </ContactPanel>
        </GlassPanel>
      </Container>
    </Section>
  );
}
