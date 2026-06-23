import styled from 'styled-components';
export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(17rem, 28rem) 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const Portrait = styled.figure`
  position: relative;
  margin: 0;
  overflow: hidden;
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.gradients.glass};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
  span,
  small {
    position: absolute;
    left: ${({ theme }) => theme.spacing.lg};
  }
  span {
    bottom: ${({ theme }) => theme.spacing.xl};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
  small {
    bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
  }
`;
export const Bio = styled.div`
  p {
    max-width: ${({ theme }) => theme.containers.text};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
export const Title = styled.h2`
  display: grid;
  margin: ${({ theme }) => `${theme.spacing.lg} 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.heading};
  span {
    background: ${({ theme }) => theme.gradients.accent};
    background-clip: text;
    color: transparent;
  }
`;
export const Facts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  div {
    padding: ${({ theme }) => theme.spacing.lg};
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.lg};
    background: ${({ theme }) => theme.glass.surface};
  }
  span {
    display: block;
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-transform: uppercase;
  }
  strong {
    display: block;
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
