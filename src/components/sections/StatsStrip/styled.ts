import styled from 'styled-components';
export const StatStripRoot = styled.aside`
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;
export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  backdrop-filter: ${({ theme }) => theme.blur.lg};
  div + div {
    border-left: ${({ theme }) => theme.glass.border};
    padding-left: ${({ theme }) => theme.spacing.lg};
  }
  strong {
    display: block;
    font-family: ${({ theme }) => theme.typography.family.display};
    font-size: ${({ theme }) => theme.typography.size.xxl};
  }
  span {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    div + div {
      border-left: 0;
      padding-left: 0;
    }
  }
`;
