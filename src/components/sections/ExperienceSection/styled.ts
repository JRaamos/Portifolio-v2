import styled from 'styled-components';
export const ExperienceTop = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;
export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
`;
export const ExperienceList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;
export const ExperienceCard = styled.article`
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  time {
    color: ${({ theme }) => theme.colors.accent.primary};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.size.lg};
  }
  strong {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.muted};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  span {
    padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.pill};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;
