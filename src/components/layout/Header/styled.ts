import styled from 'styled-components';

export const HeaderBar = styled.header`
  position: fixed;
  inset: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.page} auto`};
  z-index: ${({ theme }) => theme.zIndex.header};
  height: ${({ theme }) => theme.sizes.header};
`;
export const HeaderInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.containers.content};
  height: 100%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr auto auto;
  }
`;
export const Brand = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: fit-content;
  padding: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  cursor: pointer;
`;
export const Wordmark = styled.span`
  width: ${({ theme }) => theme.sizes.icon};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.circle};
  background: ${({ theme }) => theme.gradients.accent};
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
export const BrandCopy = styled.span`
  display: grid;
  text-align: left;
  line-height: 1;
  strong {
    font-family: ${({ theme }) => theme.typography.family.display};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
  span {
    margin-top: ${({ theme }) => theme.spacing.xxs};
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: 0.55rem;
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  }
`;
export const Nav = styled.nav<{ $isOpen: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.md}`};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.glass.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    inset: ${({ theme }) => `${theme.sizes.headerMobile} ${theme.spacing.page} auto`};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radius.lg};
    background: ${({ theme }) => theme.colors.background.elevated};
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
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const NavButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: transparent;
  font-size: ${({ theme }) => theme.typography.size.xs};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
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
  background: ${({ theme }) => theme.glass.surface};
  cursor: pointer;
  span {
    width: ${({ theme }) => theme.spacing.md};
    height: ${({ theme }) => theme.sizes.line};
    background: ${({ theme }) => theme.colors.text.primary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
  }
`;
