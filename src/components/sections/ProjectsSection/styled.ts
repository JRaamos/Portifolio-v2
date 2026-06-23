import styled from 'styled-components';

export const ProjectsHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;

export const Title = styled.h2`
  max-width: 12ch;
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-size: ${({ theme }) => theme.typography.size.section};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const ProjectList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  > article {
    display: grid;
    grid-template-columns: minmax(18rem, 0.9fr) 1fr;
    gap: ${({ theme }) => theme.spacing.xxl};
    padding: ${({ theme }) => theme.spacing.lg};
    transition:
      transform ${({ theme }) => theme.transitions.normal},
      border-color ${({ theme }) => theme.transitions.normal};
  }

  > article:hover {
    transform: translateY(-0.35rem);
    border-color: ${({ theme }) => theme.colors.border.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    > article {
      grid-template-columns: 1fr;
    }
  }
`;

export const ProjectVisual = styled.div`
  position: relative;
  min-height: 21rem;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.gradients.project};

  > span {
    position: absolute;
    top: ${({ theme }) => theme.spacing.md};
    left: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  > strong {
    font-size: clamp(7rem, 18vw, 15rem);
    line-height: 1;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
    opacity: 0.55;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  article:hover & > strong {
    transform: scale(1.08) rotate(-3deg);
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};

  h3 {
    margin: ${({ theme }) => `${theme.spacing.md} 0`};
    font-size: ${({ theme }) => theme.typography.size.xxl};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
  > div span {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

export const ProjectMeta = styled.span`
  color: ${({ theme }) => theme.colors.accent.primary};
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
`;

export const ProjectLink = styled.a`
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;
