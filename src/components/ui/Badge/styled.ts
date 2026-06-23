import styled from 'styled-components';

export const BadgeRoot = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  border: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.border.subtle}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surface.subtle};
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
`;
