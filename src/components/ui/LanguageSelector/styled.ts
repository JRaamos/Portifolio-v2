import styled from 'styled-components';

export const SelectWrap = styled.div`
  position: relative;
`;

export const Select = styled.select`
  min-height: ${({ theme }) => theme.sizes.icon};
  padding-inline: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  cursor: pointer;
`;
