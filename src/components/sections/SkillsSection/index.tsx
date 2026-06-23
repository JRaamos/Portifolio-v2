import { useTranslation } from 'react-i18next';
import type { SkillGroup } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import {
  Arsenal,
  CategoryCard,
  CategoryGrid,
  CategoryIcon,
  CategoryList,
  ProficiencyBar,
  ProficiencyCard,
  ProficiencyHeader,
  ProficiencyList,
  SkillDot,
  Title,
} from './styled';

interface SkillsSectionProps {
  groups: SkillGroup[];
}

function CategoryGlyph({ icon }: { icon: 'code' | 'globe' | 'server' | 'database' }) {
  if (icon === 'code') {
    return (
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <path d="M6.5 5L3 9l3.5 4" />
        <path d="M11.5 5L15 9l-3.5 4" />
        <path d="M10 3.75L8 14.25" />
      </svg>
    );
  }
  if (icon === 'globe') {
    return (
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <circle cx="9" cy="9" r="6.75" />
        <path d="M2.75 9h12.5" />
        <path d="M9 2.25c2 1.9 3 4.15 3 6.75s-1 4.85-3 6.75" />
        <path d="M9 2.25C7 4.15 6 6.4 6 9s1 4.85 3 6.75" />
      </svg>
    );
  }
  if (icon === 'server') {
    return (
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <rect x="2.75" y="3.25" width="12.5" height="4.5" rx="1" />
        <rect x="2.75" y="10.25" width="12.5" height="4.5" rx="1" />
        <path d="M5.25 5.5h0.01" />
        <path d="M5.25 12.5h0.01" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <ellipse cx="9" cy="4.5" rx="5.75" ry="2.25" />
      <path d="M3.25 4.5v4.5c0 1.25 2.57 2.25 5.75 2.25s5.75-1 5.75-2.25V4.5" />
      <path d="M3.25 9v4.5c0 1.25 2.57 2.25 5.75 2.25s5.75-1 5.75-2.25V9" />
    </svg>
  );
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  const { t } = useTranslation();
  const categories = [
    {
      key: 'languages',
      tone: 'blue',
      icon: 'code',
      items: ['TypeScript', 'JavaScript', 'Python', 'Go'],
    },
    {
      key: 'frontend',
      tone: 'blue',
      icon: 'globe',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      key: 'backend',
      tone: 'blue',
      icon: 'server',
      items: ['Node.js', 'Express', 'FastAPI', 'GraphQL'],
    },
    {
      key: 'dataInfra',
      tone: 'blue',
      icon: 'database',
      items: ['PostgreSQL', 'Redis', 'Docker', 'AWS'],
    },
  ] as const;
  return (
    <Section id="skills" labelledBy="skills-title">
      <Container>
        <Badge>{t('skills.eyebrow')}</Badge>
        <Title id="skills-title">{t('skills.title')}</Title>
        <Arsenal>
          <ProficiencyCard>
            <ProficiencyHeader>{t('skills.proficiency')}</ProficiencyHeader>
            <ProficiencyList>
              {groups.map((group, index) => (
                <ProficiencyBar key={group.id} $index={index}>
                  <div>
                    <span>{t(group.titleKey)}</span>
                    <strong>{group.proficiency}%</strong>
                  </div>
                  <i style={{ width: `${group.proficiency}%` }} />
                </ProficiencyBar>
              ))}
            </ProficiencyList>
          </ProficiencyCard>
          <CategoryGrid>
            {categories.map(({ key, icon, items, tone }) => (
              <CategoryCard key={key}>
                <CategoryIcon $tone={tone}>
                  <CategoryGlyph icon={icon} />
                </CategoryIcon>
                <h3>{t(`skills.${key}`)}</h3>
                <CategoryList>
                  {items.map((item) => (
                    <li key={item}>
                      <SkillDot aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </CategoryList>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </Arsenal>
      </Container>
    </Section>
  );
}
