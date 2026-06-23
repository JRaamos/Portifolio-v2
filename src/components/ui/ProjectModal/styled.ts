import styled from 'styled-components';
export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.primary};
  background-color: ${({ theme }) => theme.colors.surface.overlay};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
`;
export const ModalCard = styled.article`
  position: relative;
  width: min(100%, ${({ theme }) => theme.sizes.modal});
  max-height: 90svh;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing.xxl};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background:
    ${({ theme }) => theme.gradients.glassHighlight},
    ${({ theme }) => theme.colors.background.elevated};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  h3 {
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  }
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  > div:not(:first-child) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  background: transparent;
  font-size: ${({ theme }) => theme.typography.size.xl};
  cursor: pointer;
`;
export const ModalHeader = styled.header`
  div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    span {
      color: ${({ theme }) => theme.colors.text.muted};
      font-family: ${({ theme }) => theme.typography.family.mono};
      font-size: ${({ theme }) => theme.typography.size.xs};
      text-transform: uppercase;
    }
    strong {
      padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
      border: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.state.success}`};
      border-radius: ${({ theme }) => theme.radius.pill};
      color: ${({ theme }) => theme.colors.state.success};
      background: ${({ theme }) => theme.glass.surface};
      font-size: ${({ theme }) => theme.typography.size.xs};
    }
  }
  h2 {
    margin: ${({ theme }) => `${theme.spacing.sm} 0`};
    font-family: ${({ theme }) => theme.typography.family.display};
    font-size: ${({ theme }) => theme.typography.size.section};
  }
`;
export const FeatureList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0;
  list-style: none;
  li {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  li::before {
    content: '›';
    color: ${({ theme }) => theme.colors.accent.primary};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;
export const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  span {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.glass.surfaceStrong};
    color: ${({ theme }) => theme.colors.accent.soft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;
export const Actions = styled.footer`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: ${({ theme }) => theme.glass.border};
  a {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    border-radius: ${({ theme }) => theme.radius.pill};
    text-decoration: none;
  }
  a:first-child {
    background: ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  a:last-child {
    border: ${({ theme }) => theme.glass.border};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
