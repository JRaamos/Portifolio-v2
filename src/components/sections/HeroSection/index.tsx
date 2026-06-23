import { useTranslation } from 'react-i18next';
import { Button } from '../../ui/Button';
import {
  HeroBackground,
  HeroContent,
  HeroMeta,
  HeroRoot,
  HeroTitle,
  Intro,
  Role,
  ScrollCue,
  Socials,
  Status,
} from './styled';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}
export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useTranslation();
  return (
    <HeroRoot id="home" aria-labelledby="hero-title">
      <HeroBackground aria-hidden="true" />
      <HeroContent>
        <Intro>
          <HeroMeta>
            <Status>
              <i />
              {t('hero.eyebrow')}
            </Status>
            <span>{t('hero.location')}</span>
          </HeroMeta>
          <HeroTitle id="hero-title">
            <span>{t('hero.firstName')}</span>
            <span>{t('hero.lastName')}</span>
          </HeroTitle>
          <Role>{t('hero.role')}</Role>
          <p>{t('hero.description')}</p>
          <div>
            <Button type="button" onClick={() => onNavigate('projects')}>
              {t('hero.primaryAction')} <span aria-hidden="true">↗</span>
            </Button>
            <Socials>
              <a href="https://github.com/jonathanfebraio" target="_blank" rel="noreferrer">
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/jonathanfebraio/"
                target="_blank"
                rel="noreferrer"
              >
                IN
              </a>
            </Socials>
          </div>
        </Intro>
        <ScrollCue type="button" onClick={() => onNavigate('projects')}>
          {t('hero.scroll')}
          <span aria-hidden="true">↓</span>
        </ScrollCue>
      </HeroContent>
    </HeroRoot>
  );
}
