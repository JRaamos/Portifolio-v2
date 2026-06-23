import styled from 'styled-components';

export const HeaderBar = styled.header`
  position: fixed;
  inset: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.page} auto`};
  z-index: ${({ theme }) => theme.zIndex.header};
  height: ${({ theme }) => theme.sizes.header};
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.containers.content};
  height: 100%;
  margin-inline: auto;
  padding: ${({ theme }) =>
    `${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.lg}`};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.glass.surface};
  box-shadow: ${({ theme }) => theme.glass.highlight};
  backdrop-filter: ${({ theme }) => theme.blur.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr auto auto;
  }
`;

export const Brand = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: fit-content;
  padding: ${({ theme }) => theme.spacing.none};
  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;
`;

export const Wordmark = styled.span`
  width: ${({ theme }) => theme.sizes.icon};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.colors.surface.solid};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    inset: ${({ theme }) => `${theme.sizes.header} ${theme.spacing.page} auto`};
    padding: ${({ theme }) => theme.spacing.md};
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.xl};
    background: ${({ theme }) => theme.colors.background.elevated};
    box-shadow: ${({ theme }) => theme.shadows.glass};
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-1rem)')};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: all ${({ theme }) => theme.transitions.normal};
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.none};
  padding: ${({ theme }) => theme.spacing.none};
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const NavButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: transparent;
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;
  transition:
    color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.surface.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    text-align: left;
  }
`;

export const MenuButton = styled.button`
  display: none;
  width: ${({ theme }) => theme.sizes.icon};
  aspect-ratio: 1;
  place-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.colors.surface.hover};
  cursor: pointer;

  span {
    width: ${({ theme }) => theme.spacing.lg};
    height: ${({ theme }) => theme.sizes.line};
    background: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
  }
`;
