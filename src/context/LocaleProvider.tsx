import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale } from '../types/v3';
import { LocaleContext, type LocaleValue } from './locale-context';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem('portfolio-locale') === 'pt' ? 'pt' : 'en';
  });

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem('portfolio-locale', nextLocale);
  };

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en-US' : 'pt-BR';
  }, [locale]);

  const value = useMemo<LocaleValue>(
    () => ({ locale, setLocale, text: (localized) => localized[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
