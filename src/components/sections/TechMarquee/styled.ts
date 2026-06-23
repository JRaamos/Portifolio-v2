import styled, { keyframes } from 'styled-components';
const scroll = keyframes`from{transform:translateX(0)}to{transform:translateX(-33.333%)}`;
export const TechMarqueeRoot = styled.div`
  overflow: hidden;
  padding-block: ${({ theme }) => theme.spacing.xl};
  border-block: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};
`;
export const MarqueeTrack = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};
  width: max-content;
  animation: ${scroll} 28s linear infinite;
  span {
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  }
`;
