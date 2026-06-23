import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../../utils/scrollToSection';
import { portfolioData } from './data';

export function useController() {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? 'pt-BR';
  }, [i18n.resolvedLanguage]);

  function navigateTo(sectionId: string) {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }

  function changeLanguage(language: string) {
    void i18n.changeLanguage(language);
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  return {
    data: portfolioData,
    language: i18n.resolvedLanguage ?? 'pt-BR',
    isMenuOpen,
    navigateTo,
    changeLanguage,
    toggleMenu,
  };
}
