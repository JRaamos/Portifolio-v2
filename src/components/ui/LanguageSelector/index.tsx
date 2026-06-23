import { useTranslation } from 'react-i18next';
import { Select, SelectWrap } from './styled';

interface LanguageSelectorProps {
  value: string;
  onChange: (language: string) => void;
}

const languages = ['pt-BR', 'en-US', 'es-ES'] as const;

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  const { t } = useTranslation();

  return (
    <SelectWrap>
      <Select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={t('language.label')}
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {t(`language.${language}`)}
          </option>
        ))}
      </Select>
    </SelectWrap>
  );
}
