import { useTranslation } from 'react-i18next';
import type { SkillGroup } from '../../../types/portfolio';
import { Container } from '../../layout/Container';
import { Section } from '../../layout/Section';
import { Badge } from '../../ui/Badge';
import { Capability, CapabilityGrid, SkillList, Title } from './styled';

interface SkillsSectionProps {
  groups: SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  const { t } = useTranslation();

  return (
    <Section id="skills" labelledBy="skills-title">
      <Container>
        <Badge>{t('skills.eyebrow')}</Badge>
        <Title id="skills-title">{t('skills.title')}</Title>
        <CapabilityGrid>
          {groups.map((group, index) => (
            <Capability key={group.id}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{t(group.titleKey)}</h3>
              <p>{t(group.descriptionKey)}</p>
              <SkillList>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </SkillList>
            </Capability>
          ))}
        </CapabilityGrid>
      </Container>
    </Section>
  );
}
