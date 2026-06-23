import styled from 'styled-components';

export const WritingTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  a {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.sm};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: 1.5;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const ArticleList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ArticleCard = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 10.625rem;
  padding: 2.3125rem;
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  text-decoration: none;
  transition:
    border-color ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};
  &:hover {
    transform: translateY(-0.125rem);
    border-color: ${({ theme }) => theme.colors.border.accent};
    background: ${({ theme }) => theme.glass.surfaceStrong};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex-direction: column;
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ArticleContent = styled.div`
  display: grid;
  gap: 0.4625rem;
  max-width: 42rem;
  min-width: 0;
  h3 {
    margin: ${({ theme }) => `${theme.spacing.xxs} 0 0`};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.family.display};
    font-size: 1.25rem;
    line-height: 1.4;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: 1.625;
  }
`;

export const ArticleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  small {
    padding: 0.3125rem 0.6875rem;
    border: 1px solid ${({ theme }) => theme.colors.accent.blueBorder};
    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.colors.accent.blueSurface};
    color: ${({ theme }) => theme.colors.accent.soft};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xxs};
    letter-spacing: 0.05em;
    line-height: 1.5;
    text-transform: uppercase;
  }
  time {
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    opacity: 0.75;
  }
`;

export const ArticleAction = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.muted};
  i {
    width: 2.25rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.circle};
    color: ${({ theme }) => theme.colors.text.muted};
    font-style: normal;
  }
`;

export const ReadingTime = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
  span {
    width: ${({ theme }) => theme.spacing.xs};
    aspect-ratio: 1;
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.circle};
  }
`;
