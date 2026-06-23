import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;

export const AmbientLayer = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.base};
  top: 48%;
  left: -9%;
  width: ${({ theme }) => theme.sizes.orbSmall};
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.colors.accent.cyan};
  filter: ${({ theme }) => theme.blur.xl};
  opacity: 0.08;
  pointer-events: none;
`;
