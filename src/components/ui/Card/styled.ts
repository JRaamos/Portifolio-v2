import styled from 'styled-components';

export const CardRoot = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface.subtle};
`;
