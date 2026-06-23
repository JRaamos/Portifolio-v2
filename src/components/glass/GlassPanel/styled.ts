import styled from 'styled-components';

export const GlassPanelRoot = styled.div`
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.glass.surface};
  box-shadow: ${({ theme }) => theme.glass.highlight};
  backdrop-filter: ${({ theme }) => theme.blur.lg};
`;
