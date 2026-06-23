import styled from 'styled-components';
export const TestimonialHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;
export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: 1.5;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;
export const TestimonialCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  min-height: 32.625rem;
  margin-inline: auto;
  padding: 3.5625rem;
  overflow: hidden;
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  text-align: center;
  p {
    position: relative;
    z-index: ${({ theme }) => theme.zIndex.content};
    max-width: 42rem;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.8;
    font-size: ${({ theme }) => theme.typography.size.xl};
    font-weight: ${({ theme }) => theme.typography.weight.light};
    line-height: 1.625;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
    p {
      font-size: ${({ theme }) => theme.typography.size.lg};
    }
  }
`;
export const Glow = styled.span`
  position: absolute;
  inset: 50% auto auto 50%;
  width: 24rem;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.colors.accent.cyanSurface};
  filter: ${({ theme }) => theme.blur.xl};
  transform: translate(-50%, -50%);
`;
export const QuoteIcon = styled.svg`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  width: ${({ theme }) => theme.spacing.xl};
  height: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.accent.primary};
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
`;
export const Author = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.xs};
  span {
    width: 2.75rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border-radius: ${({ theme }) => theme.radius.circle};
    background: ${({ theme }) => theme.gradients.accent};
  }
  div {
    display: grid;
    text-align: left;
  }
  strong {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
  small {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;
export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.lg};
  i {
    width: ${({ theme }) => theme.spacing.xs};
    height: 0.375rem;
    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.colors.border.strong};
  }
  i:last-child {
    width: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.accent.primary};
  }
`;
