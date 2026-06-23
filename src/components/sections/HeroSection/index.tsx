import { useTranslation } from 'react-i18next';
import { GlassButton } from '../../glass/GlassButton';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import {
  Actions,
  AmbientOrb,
  HeroContent,
  HeroRoot,
  HeroTitle,
  Intro,
  ScrollCue,
  VisualCore,
  VisualRing,
} from './styled';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <HeroRoot id="home" aria-labelledby="hero-title">
      <AmbientOrb />
      <HeroContent>
        <Intro>
          <Badge>{t('hero.eyebrow')}</Badge>
          <HeroTitle id="hero-title">
            {t('hero.titlePrefix')} <em>{t('hero.titleAccent')}</em> {t('hero.titleSuffix')}
          </HeroTitle>
          <p>{t('hero.description')}</p>
          <Actions>
            <Button type="button" onClick={() => onNavigate('projects')}>
              {t('hero.primaryAction')} <span aria-hidden="true">↗</span>
            </Button>
            <GlassButton type="button" onClick={() => onNavigate('contact')}>
              {t('hero.secondaryAction')}
            </GlassButton>
          </Actions>
        </Intro>

        <VisualCore aria-hidden="true">
          <VisualRing />
          <span>JF</span>
        </VisualCore>
        <ScrollCue type="button" onClick={() => onNavigate('about')}>
          {t('hero.scroll')} <span aria-hidden="true">↓</span>
        </ScrollCue>
      </HeroContent>
    </HeroRoot>
  );
}
