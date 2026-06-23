import styled from 'styled-components';

export const ContactPanel = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr minmax(17rem, 0.4fr);
  gap: ${({ theme }) => theme.spacing.xxxl};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xxxl};

  &::after {
    content: '';
    position: absolute;
    right: -8%;
    bottom: -45%;
    width: ${({ theme }) => theme.sizes.orbSmall};
    aspect-ratio: 1;
    border-radius: ${({ theme }) => theme.radius.circle};
    background: ${({ theme }) => theme.colors.accent.strong};
    filter: ${({ theme }) => theme.blur.xl};
    opacity: 0.22;
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ContactCopy = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};

  > p {
    max-width: ${({ theme }) => theme.containers.text};
    margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Title = styled.h2`
  max-width: 12ch;
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-size: ${({ theme }) => theme.typography.size.section};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
`;

export const ContactActions = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};

  > a {
    text-decoration: none;
  }
  > span {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

export const ActionLink = styled.a`
  min-height: ${({ theme }) => theme.sizes.button};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-inline: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surface.solid};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  text-decoration: none;
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-0.18rem);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;
