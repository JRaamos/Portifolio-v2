import { useTranslation } from 'react-i18next';
import { Container } from '../../layout/Container';
import { StatGrid, StatStripRoot } from './styled';
const stats = ['years', 'projects', 'clients', 'stars'] as const;
export function StatsStrip() {
  const { t } = useTranslation();
  return (
    <StatStripRoot aria-label="portfolio statistics">
      <Container>
        <StatGrid>
          {stats.map((stat) => (
            <div key={stat}>
              <strong>{t(`stats.${stat}Value`)}</strong>
              <span>{t(`stats.${stat}Label`)}</span>
            </div>
          ))}
        </StatGrid>
      </Container>
    </StatStripRoot>
  );
}
