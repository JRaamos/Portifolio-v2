import styled from 'styled-components';

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(20rem, 0.95fr);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: start;
  padding-block: ${({ theme }) => theme.spacing.xxl};
  border-block: 1px solid ${({ theme }) => theme.colors.border.strong};

  p {
    max-width: ${({ theme }) => theme.containers.text};
    margin-top: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactTitle = styled.h2`
  display: grid;
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};

  span {
    background: ${({ theme }) => theme.gradients.accent};
    background-clip: text;
    color: transparent;
  }
`;

export const Availability = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.accent.cyan};
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  a {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    border: 1px solid ${({ theme }) => theme.colors.border.strong};
    border-radius: ${({ theme }) => theme.radius.pill};
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
  }

  a:first-child {
    border-color: transparent;
    background: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const ContactLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  a {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.sm};
    text-decoration: none;
  }
`;
