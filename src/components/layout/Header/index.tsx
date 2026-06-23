import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../../ui/LanguageSelector';
import {
  Brand,
  HeaderBar,
  HeaderInner,
  MenuButton,
  Nav,
  NavButton,
  NavList,
  Wordmark,
} from './styled';

interface HeaderProps {
  language: string;
  isMenuOpen: boolean;
  onLanguageChange: (language: string) => void;
  onNavigate: (sectionId: string) => void;
  onMenuToggle: () => void;
}

const navigationItems = ['about', 'skills', 'projects', 'experience', 'contact'] as const;

export function Header({
  language,
  isMenuOpen,
  onLanguageChange,
  onNavigate,
  onMenuToggle,
}: HeaderProps) {
  const { t } = useTranslation();

  return (
    <HeaderBar>
      <HeaderInner>
        <Brand type="button" onClick={() => onNavigate('home')} aria-label={t('brand.name')}>
          <Wordmark>JF</Wordmark>
          <span>{t('brand.name')}</span>
        </Brand>

        <Nav $isOpen={isMenuOpen} aria-label={t('navigation.about')}>
          <NavList>
            {navigationItems.map((item) => (
              <li key={item}>
                <NavButton type="button" onClick={() => onNavigate(item)}>
                  {t(`navigation.${item}`)}
                </NavButton>
              </li>
            ))}
          </NavList>
        </Nav>

        <LanguageSelector value={language} onChange={onLanguageChange} />
        <MenuButton
          type="button"
          onClick={onMenuToggle}
          aria-expanded={isMenuOpen}
          aria-label={t(isMenuOpen ? 'navigation.menuClose' : 'navigation.menuOpen')}
        >
          <span />
          <span />
        </MenuButton>
      </HeaderInner>
    </HeaderBar>
  );
}
