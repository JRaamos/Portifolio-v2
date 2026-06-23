import { useTranslation } from 'react-i18next';
import { QuoteRoot, QuoteText } from './styled';
export function QuoteSection() {
  const { t } = useTranslation();
  return (
    <QuoteRoot>
      <QuoteText>
        <span>{t('quote.first')}</span>
        <span>{t('quote.second')}</span>
        <em>{t('quote.accent')}</em>
      </QuoteText>
    </QuoteRoot>
  );
}
