import { useTranslation } from 'react-i18next';
import { Container } from '../Container';
import { FooterInner, FooterRoot } from './styled';

export function Footer() {
  const { t } = useTranslation();

  return (
    <FooterRoot>
      <Container>
        <FooterInner>
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.note')}</span>
        </FooterInner>
      </Container>
    </FooterRoot>
  );
}
