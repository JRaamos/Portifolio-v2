import { useTranslation } from 'react-i18next';
import type { SkillGroup } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { Arsenal, Bars, Column, SkillPill, SkillSet, SkillsGrid, Title } from './styled';

interface SkillsSectionProps {
  groups: SkillGroup[];
}
export function SkillsSection({ groups }: SkillsSectionProps) {
  const { t } = useTranslation();
  const columns = [
    ['languages', ['TypeScript', 'JavaScript', 'Python', 'Go']],
    ['frontend', ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']],
    [
      'backend',
      ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    ],
  ] as const;
  return (
    <Section id="skills" labelledBy="skills-title">
      <Container>
        <Arsenal>
          <div>
            <Badge>{t('skills.eyebrow')}</Badge>
            <Title id="skills-title">{t('skills.title')}</Title>
            <Bars>
              {groups.map((group) => (
                <div key={group.id}>
                  <span>{t(group.titleKey)}</span>
                  <strong>{group.proficiency}%</strong>
                  <i style={{ width: `${group.proficiency}%` }} />
                </div>
              ))}
            </Bars>
          </div>
          <SkillsGrid>
            {columns.map(([key, items]) => (
              <Column key={key}>
                <h3>{t(`skills.${key}`)}</h3>
                <SkillSet>
                  {items.map((item) => (
                    <SkillPill key={item}>{item}</SkillPill>
                  ))}
                </SkillSet>
              </Column>
            ))}
          </SkillsGrid>
        </Arsenal>
      </Container>
    </Section>
  );
}
