import type { PropsWithChildren } from 'react';
import { I18nProvider } from './I18nProvider';
import { AppThemeProvider } from './ThemeProvider';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <I18nProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </I18nProvider>
  );
}
