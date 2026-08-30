import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: rgba(2, 6, 23, 0.88);
  backdrop-filter: ${({ theme }) => theme.blur.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xs};
  }
`;

export const ModalCard = styled.article`
  position: relative;
  width: min(100%, 62rem);
  max-height: 92svh;
  overflow: auto;
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.background.elevated};
  box-shadow: ${({ theme }) => theme.shadows.glass};

  > section,
  > header,
  > footer,
  > p {
    margin-inline: ${({ theme }) => theme.spacing.xxl};
  }

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.accent.cyan};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    > section,
    > header,
    > footer,
    > p {
      margin-inline: ${({ theme }) => theme.spacing.lg};
    }
  }
`;

export const HeroImage = styled.figure`
  width: 100%;
  aspect-ratio: 16 / 7;
  margin: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const CloseButton = styled.button`
  position: sticky;
  z-index: 1;
  top: ${({ theme }) => theme.spacing.md};
  float: right;
  width: 2.5rem;
  aspect-ratio: 1;
  margin: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md} -3.5rem 0`};
  border: 1px solid ${({ theme }) => theme.colors.border.strong};
  border-radius: ${({ theme }) => theme.radius.circle};
  color: ${({ theme }) => theme.colors.text.primary};
  background: rgba(2, 6, 23, 0.82);
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: 1;
  cursor: pointer;
`;

export const ModalHeader = styled.header`
  padding-top: ${({ theme }) => theme.spacing.xl};

  span {
    color: ${({ theme }) => theme.colors.accent.cyan};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  }

  h2 {
    margin: ${({ theme }) => `${theme.spacing.sm} 0`};
    font-family: ${({ theme }) => theme.typography.family.display};
    font-size: ${({ theme }) => theme.typography.size.section};
  }

  p {
    max-width: 48rem;
    font-size: ${({ theme }) => theme.typography.size.md};
  }
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxl}`};
  margin: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxl}`};
  padding-block: ${({ theme }) => theme.spacing.xl};
  border-block: 1px solid ${({ theme }) => theme.colors.border.subtle};

  section p {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-inline: ${({ theme }) => theme.spacing.lg};
  }
`;

export const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};

  span {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.pill};
    color: ${({ theme }) => theme.colors.accent.soft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const EvidenceNote = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.family.mono};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const Actions = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `${theme.spacing.xl} 0 ${theme.spacing.xxl}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};

  a {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.pill};
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
  }

  a:first-child {
    border-color: transparent;
    background: ${({ theme }) => theme.colors.accent.primary};
  }
`;
