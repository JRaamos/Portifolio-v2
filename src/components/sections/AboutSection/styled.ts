import styled from 'styled-components';

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.85fr);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  max-width: 10ch;
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-size: ${({ theme }) => theme.typography.size.section};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const Copy = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xxxl};
  color: ${({ theme }) => theme.colors.text.secondary};

  p {
    margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 0;
  }
`;

export const Lead = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Stat = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};

  strong {
    color: ${({ theme }) => theme.colors.accent.primary};
    font-size: ${({ theme }) => theme.typography.size.xxl};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  }

  span {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;
