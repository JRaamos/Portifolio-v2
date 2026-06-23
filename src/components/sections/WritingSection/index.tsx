import { useTranslation } from 'react-i18next';
import type { Article } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { ArticleCard, ArticleList, WritingTop, Title } from './styled';
interface WritingSectionProps {
  articles: Article[];
}
export function WritingSection({ articles }: WritingSectionProps) {
  const { t } = useTranslation();
  return (
    <Section id="writing" labelledBy="writing-title">
      <Container>
        <WritingTop>
          <div>
            <Badge>{t('writing.eyebrow')}</Badge>
            <Title id="writing-title">{t('writing.title')}</Title>
          </div>
          <button type="button">{t('writing.all')} ↗</button>
        </WritingTop>
        <ArticleList>
          {articles.map((article) => (
            <ArticleCard key={article.id}>
              <div>
                <small>{t(article.categoryKey)}</small>
                <time>{t(article.dateKey)}</time>
              </div>
              <h3>{t(article.titleKey)}</h3>
              <p>{t(article.descriptionKey)}</p>
              <span>{t(article.durationKey)}</span>
            </ArticleCard>
          ))}
        </ArticleList>
      </Container>
    </Section>
  );
}
