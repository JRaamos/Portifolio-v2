import styled, { css } from 'styled-components';

const barColors = ['primary', 'indigo', 'violet', 'teal', 'green', 'orange'] as const;

export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 ${theme.spacing.xxxl}`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: 1.5;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const Arsenal = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: stretch;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
  }
`;

export const ProficiencyCard = styled.article`
  min-height: 27.25rem;
  padding: 2.0625rem;
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  box-shadow: ${({ theme }) => theme.shadows.glass};
`;

export const ProficiencyHeader = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const ProficiencyList = styled.div`
  display: grid;
  gap: 1.25rem;
`;

export const ProficiencyBar = styled.div<{ $index: number }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.lg};
  }
  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
  strong {
    color: ${({ theme, $index }) => {
      const key = barColors[$index] ?? 'primary';
      return theme.colors.accent[key];
    }};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }
  &::before,
  i {
    grid-area: 2 / 1;
    height: 0.375rem;
    border-radius: ${({ theme }) => theme.radius.pill};
  }
  &::before {
    content: '';
    background: ${({ theme }) => theme.colors.surface.subtle};
  }
  i {
    display: block;
    background: ${({ theme, $index }) => {
      const key = barColors[$index] ?? 'primary';
      return `linear-gradient(90deg, ${theme.colors.accent[key]}80, ${theme.colors.accent[key]})`;
    }};
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 27.25rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 13.125rem;
  padding: 1.3125rem;
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  h3 {
    margin: ${({ theme }) => `${theme.spacing.xs} 0 0`};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: 1.43;
  }
`;

export const CategoryIcon = styled.div<{ $tone: 'blue' }>`
  position: relative;
  width: 2.375rem;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.lg};
  ${({ theme }) => css`
    background: ${theme.colors.accent.blueSurface};
  `}
  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme.colors.accent.primary};
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }
`;

export const CategoryList = styled.ul`
  display: grid;
  gap: 0.375rem;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.xs};
    line-height: 1.33;
  }
`;

export const SkillDot = styled.span`
  width: ${({ theme }) => theme.spacing.xxs};
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.colors.accent.primary};
  opacity: 0.75;
`;
