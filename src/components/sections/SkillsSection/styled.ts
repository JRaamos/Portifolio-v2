import styled from 'styled-components';

export const SkillsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(18rem, 0.5fr);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: end;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  max-width: 13ch;
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-size: ${({ theme }) => theme.typography.size.section};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SkillList = styled.div`
  border-top: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};
`;

export const SkillRow = styled.div`
  display: grid;
  grid-template-columns: 4rem minmax(10rem, 0.45fr) 1fr;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-block: ${({ theme }) => theme.spacing.xl};
  border-bottom: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};
  transition:
    padding-inline ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.normal};

  > span {
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  h3 {
    margin: ${({ theme }) => theme.spacing.none};
    font-size: ${({ theme }) => theme.typography.size.xl};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  &:hover {
    padding-inline: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.surface.subtle};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 3rem 1fr;
    > div {
      grid-column: 2;
    }
  }
`;

export const SkillItem = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  border: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;
