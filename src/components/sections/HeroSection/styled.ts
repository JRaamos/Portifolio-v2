import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
  from { opacity: 0; transform: translateY(1.5rem); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(0, -1rem, 0) scale(1.03); }
`;

export const HeroRoot = styled.section`
  position: relative;
  min-height: 100svh;
  display: grid;
  align-items: center;
  overflow: hidden;
  padding: ${({ theme }) => `${theme.sizes.header} ${theme.spacing.page} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.gradients.hero};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  width: 100%;
  max-width: ${({ theme }) => theme.containers.content};
  margin-inline: auto;
`;

export const Intro = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  width: min(74%, ${({ theme }) => theme.containers.narrow});
  padding-top: ${({ theme }) => theme.spacing.xxl};
  animation: ${reveal} ${({ theme }) => theme.transitions.slow} both;

  p {
    max-width: ${({ theme }) => theme.containers.text};
    margin: ${({ theme }) => `${theme.spacing.xl} 0 0`};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  max-width: 12ch;
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-size: ${({ theme }) => theme.typography.size.display};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};

  em {
    color: ${({ theme }) => theme.colors.accent.primary};
    font-family: Georgia, serif;
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const AmbientOrb = styled.div`
  position: absolute;
  top: 14%;
  right: -7%;
  width: ${({ theme }) => theme.sizes.orbLarge};
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.colors.accent.strong};
  filter: ${({ theme }) => theme.blur.xl};
  opacity: 0.24;
  animation: ${float} 7s ease-in-out infinite;
`;

export const VisualCore = styled.div`
  position: absolute;
  top: 50%;
  right: 3%;
  width: min(33vw, ${({ theme }) => theme.sizes.orbLarge});
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.gradients.glassHighlight};
  box-shadow: ${({ theme }) => `${theme.shadows.glass}, ${theme.shadows.accent}`};
  backdrop-filter: ${({ theme }) => theme.blur.lg};
  transform: translateY(-45%);

  > span {
    font-size: clamp(4rem, 10vw, 9rem);
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: auto;
    right: -18%;
    bottom: 3%;
    width: 60vw;
    opacity: 0.2;
  }
`;

export const VisualRing = styled.div`
  position: absolute;
  inset: ${({ theme }) => theme.spacing.lg};
  border: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.accent}`};
  border-radius: ${({ theme }) => theme.radius.circle};
`;

export const ScrollCue = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.none};
  bottom: ${({ theme }) => theme.spacing.none};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.text.muted};
  background: transparent;
  font-size: ${({ theme }) => theme.typography.size.xs};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
