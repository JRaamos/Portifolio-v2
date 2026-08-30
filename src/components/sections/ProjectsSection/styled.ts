import styled from 'styled-components';

export const ProjectsHeader = styled.div`
  max-width: 52rem;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  p {
    max-width: 44rem;
    margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.md};
  }
`;

export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article<{ $featured: boolean }>`
  display: grid;
  grid-column: ${({ $featured }) => ($featured ? 'span 2' : 'span 1')};
  grid-template-columns: ${({ $featured }) => ($featured ? 'minmax(0, 1.35fr) minmax(18rem, 0.65fr)' : '1fr')};
  align-items: stretch;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.border.strong};
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.025), transparent 70%);
  transition:
    border-color ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};

  > div:last-child {
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.xl};
  }

  small {
    color: ${({ theme }) => theme.colors.accent.cyan};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  }

  h3 {
    margin: ${({ theme }) => `${theme.spacing.sm} 0 0`};
    font-family: ${({ theme }) => theme.typography.family.display};
    font-size: clamp(1.65rem, 3vw, 2.35rem);
  }

  p {
    margin: ${({ theme }) => `${theme.spacing.md} 0 0`};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  &:hover {
    transform: translateY(-0.2rem);
    border-color: ${({ theme }) => theme.colors.accent.cyan};
  }

  &:hover img {
    transform: scale(1.018);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 1;
    grid-template-columns: 1fr;
  }
`;

export const ProjectImage = styled.figure`
  min-height: 20rem;
  margin: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background.elevated};

  img {
    width: 100%;
    height: 100%;
    min-height: 20rem;
    object-fit: cover;
    object-position: top center;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 13rem;

    img {
      min-height: 13rem;
    }
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};

  span {
    padding: 0.3rem 0.7rem;
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.pill};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const CardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  button,
  a {
    padding: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    background: transparent;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    text-decoration: none;
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.colors.accent.soft};
  }
`;
