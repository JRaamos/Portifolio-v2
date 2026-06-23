import styled, { keyframes } from 'styled-components';
const reveal = keyframes`from{opacity:0;transform:translateY(1.5rem)}to{opacity:1;transform:translateY(0)}`;
export const HeroRoot = styled.section`
  position: relative;
  min-height: 51rem;
  display: grid;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background.primary};
`;
export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ theme }) => `${theme.gradients.hero},url('${theme.assets.hero}')`};
  background-size: cover;
  background-position: center top;
  opacity: 0.95;
`;
export const HeroContent = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  width: 100%;
  max-width: ${({ theme }) => theme.containers.content};
  margin-inline: auto;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.page} ${theme.spacing.xl}`};
`;
export const Intro = styled.div`
  width: min(100%, 42rem);
  padding-top: ${({ theme }) => theme.spacing.xxl};
  animation: ${reveal} ${({ theme }) => theme.transitions.slow} both;
  > p {
    max-width: ${({ theme }) => theme.containers.text};
    margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.md};
  }
  > div:last-child {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`;
export const HeroMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
`;
export const Status = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.accent.cyanBorder}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accent.cyanSurface};
  color: ${({ theme }) => theme.colors.accent.cyan};
  i {
    width: ${({ theme }) => theme.spacing.xs};
    aspect-ratio: 1;
    border-radius: ${({ theme }) => theme.radius.circle};
    background: ${({ theme }) => theme.colors.accent.cyan};
  }
`;
export const HeroTitle = styled.h1`
  display: grid;
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.display};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  span:last-child {
    background: ${({ theme }) => theme.gradients.accent};
    background-clip: text;
    color: transparent;
  }
`;
export const Role = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.light};
`;
export const Socials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  a {
    width: ${({ theme }) => theme.sizes.button};
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.circle};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-decoration: none;
  }
`;
export const ScrollCue = styled.button`
  position: absolute;
  left: 50%;
  bottom: ${({ theme }) => theme.spacing.md};
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0;
  color: ${({ theme }) => theme.colors.text.muted};
  background: transparent;
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
