import styled from 'styled-components';
export const ExperienceTop = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;
export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;
export const ExperienceList = styled.div`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;
export const TimelineLine = styled.span`
  position: absolute;
  inset: 0 auto 0 0.6875rem;
  width: ${({ theme }) => theme.sizes.line};
  background: ${({ theme }) => theme.colors.border.accent};
  opacity: 0.45;
`;
export const ExperienceItem = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xxxl};
`;
export const Marker = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  left: 0;
  width: 1.375rem;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border: 0.125rem solid ${({ theme }) => theme.colors.border.accent};
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.colors.background.primary};
  &::after {
    content: '';
    width: ${({ theme }) => theme.spacing.xs};
    aspect-ratio: 1;
    border-radius: inherit;
    background: ${({ theme }) => theme.colors.accent.primary};
  }
`;
export const ExperienceCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.9625rem;
  min-height: 11.375rem;
  padding: 2.0625rem;
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  transition:
    border-color ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.normal};
  &:hover {
    transform: translateY(-0.125rem);
    border-color: ${({ theme }) => theme.colors.border.accent};
    background: ${({ theme }) => theme.glass.surfaceStrong};
  }
  h3 {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.family.display};
    font-size: 1.25rem;
    line-height: 1.4;
  }
  p {
    max-width: 62rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: 1.625;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
    min-height: auto;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;
export const RoleBlock = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxs};
  strong {
    color: ${({ theme }) => theme.colors.accent.soft};
    font-size: ${({ theme }) => theme.typography.size.md};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
`;
export const Period = styled.time`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding-top: ${({ theme }) => theme.spacing.xxs};
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
  white-space: nowrap;
  span {
    width: ${({ theme }) => theme.spacing.xs};
    aspect-ratio: 1;
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.circle};
  }
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  padding-top: ${({ theme }) => theme.spacing.xxs};
  span {
    padding: 0.3125rem 0.8125rem;
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.pill};
    color: ${({ theme }) => theme.colors.text.muted};
    background: ${({ theme }) => theme.colors.surface.subtle};
    font-size: ${({ theme }) => theme.typography.size.tag};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
`;
