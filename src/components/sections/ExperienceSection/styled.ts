import styled from 'styled-components';

export const ExperienceTop = styled.div`
  display: grid;
  grid-template-columns: minmax(12rem, 0.4fr) 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: start;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  max-width: 13ch;
  margin: ${({ theme }) => theme.spacing.none};
  font-size: ${({ theme }) => theme.typography.size.section};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const ExperienceList = styled.div`
  border-top: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};
`;

export const ExperienceItem = styled.article`
  display: grid;
  grid-template-columns: minmax(9rem, 0.35fr) minmax(14rem, 0.6fr) 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-block: ${({ theme }) => theme.spacing.xxl};
  border-bottom: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};

  time {
    color: ${({ theme }) => theme.colors.accent.primary};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.size.xl};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  }
  strong {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.muted};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
