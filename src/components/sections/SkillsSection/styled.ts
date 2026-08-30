import styled from 'styled-components';

export const Title = styled.h2`
  max-width: 48rem;
  margin: ${({ theme }) => `${theme.spacing.lg} 0 ${theme.spacing.xxxl}`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const CapabilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid ${({ theme }) => theme.colors.border.strong};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Capability = styled.article`
  min-height: 18rem;
  padding: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};

  &:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};
  }

  > span {
    color: ${({ theme }) => theme.colors.accent.cyan};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  h3 {
    margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
    font-family: ${({ theme }) => theme.typography.family.display};
    font-size: ${({ theme }) => theme.typography.size.xl};
  }

  p {
    max-width: 30rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:nth-child(odd) {
      border-right: 0;
    }
  }
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  padding: 0;
  list-style: none;

  li {
    padding: 0.3rem 0.7rem;
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.pill};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;
