import { useTranslation } from 'react-i18next';
import type { Article } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import {
  ArticleAction,
  ArticleCard,
  ArticleContent,
  ArticleList,
  ArticleMeta,
  ReadingTime,
  WritingTop,
  Title,
} from './styled';
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
          <a
            href="https://liquid-glass-portfolio--jhonyramos46.replit.app/"
            target="_blank"
            rel="noreferrer"
          >
            {t('writing.all')} <span aria-hidden="true">→</span>
          </a>
        </WritingTop>
        <ArticleList>
          {articles.map((article) => (
            <ArticleCard
              href="https://liquid-glass-portfolio--jhonyramos46.replit.app/"
              key={article.id}
              target="_blank"
              rel="noreferrer"
            >
              <ArticleContent>
                <ArticleMeta>
                  <small>{t(article.categoryKey)}</small>
                  <time>{t(article.dateKey)}</time>
                </ArticleMeta>
                <h3>{t(article.titleKey)}</h3>
                <p>{t(article.descriptionKey)}</p>
              </ArticleContent>
              <ArticleAction>
                <ReadingTime>
                  <span aria-hidden="true" />
                  {t(article.durationKey)}
                </ReadingTime>
                <i aria-hidden="true">→</i>
              </ArticleAction>
            </ArticleCard>
          ))}
        </ArticleList>
      </Container>
    </Section>
  );
}
