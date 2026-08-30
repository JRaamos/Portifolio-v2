import { createContext } from 'react';
import type { Locale, LocalizedText } from '../types/v3';

export interface LocaleValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  text: (value: LocalizedText) => string;
}

export const LocaleContext = createContext<LocaleValue | null>(null);
