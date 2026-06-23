import styled from 'styled-components';

export const GlassButtonRoot = styled.button`
  min-height: ${({ theme }) => theme.sizes.button};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.gradients.glass};
  box-shadow: ${({ theme }) => theme.glass.highlight};
  backdrop-filter: ${({ theme }) => theme.blur.lg};
  cursor: pointer;
  transition:
    background ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.glass.surfaceStrong};
    transform: translateY(-0.18rem);
  }
`;
