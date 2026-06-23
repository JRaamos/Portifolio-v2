import styled from 'styled-components';

export const FooterRoot = styled.footer`
  padding-block: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;
