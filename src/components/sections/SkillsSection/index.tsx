import { useTranslation } from 'react-i18next';
import type { SkillGroup } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { Description, SkillItem, SkillList, SkillRow, SkillsHeader, Title } from './styled';

interface SkillsSectionProps {
  groups: SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  const { t } = useTranslation();

  return (
    <Section id="skills" labelledBy="skills-title">
      <Container>
        <SkillsHeader>
          <div>
            <Badge>{t('skills.eyebrow')}</Badge>
            <Title id="skills-title">{t('skills.title')}</Title>
          </div>
          <Description>{t('skills.description')}</Description>
        </SkillsHeader>
        <SkillList>
          {groups.map((group, groupIndex) => (
            <SkillRow key={group.id}>
              <span>0{groupIndex + 1}</span>
              <h3>{t(group.titleKey)}</h3>
              <div>
                {group.skills.map((skill) => (
                  <SkillItem key={skill}>{skill}</SkillItem>
                ))}
              </div>
            </SkillRow>
          ))}
        </SkillList>
      </Container>
    </Section>
  );
}
