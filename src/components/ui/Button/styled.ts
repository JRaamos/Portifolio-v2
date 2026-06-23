import styled, { css } from 'styled-components';

export const ButtonRoot = styled.button<{ $variant: 'primary' | 'secondary' | 'quiet' }>`
  min-height: ${({ theme }) => theme.sizes.button};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-inline: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.normal},
    color ${({ theme }) => theme.transitions.normal};

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      color: ${theme.colors.text.inverse};
      background: ${theme.colors.surface.solid};
    `}

  ${({ $variant, theme }) =>
    $variant === 'secondary' &&
    css`
      color: ${theme.colors.text.primary};
      background: ${theme.glass.surface};
      border: ${theme.glass.border};
      box-shadow: ${theme.glass.highlight};
      backdrop-filter: ${theme.blur.md};
    `}

  ${({ $variant, theme }) =>
    $variant === 'quiet' &&
    css`
      min-height: auto;
      padding-inline: ${theme.spacing.none};
      color: ${theme.colors.text.secondary};
      background: transparent;
    `}

  &:hover {
    transform: translateY(-0.18rem);
  }
`;
