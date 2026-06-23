import styled from 'styled-components';

export const GlassCardRoot = styled.article`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.gradients.glass};
  box-shadow: ${({ theme }) => `${theme.shadows.glass}, ${theme.glass.highlight}`};
  backdrop-filter: ${({ theme }) => theme.blur.lg};
`;
