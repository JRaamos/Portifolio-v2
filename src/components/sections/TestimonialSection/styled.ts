import styled from 'styled-components';
export const TestimonialHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;
export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
`;
export const TestimonialCard = styled.article`
  max-width: 53rem;
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing.xxxl};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  text-align: center;
  p {
    max-width: 42rem;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.size.xl};
    font-weight: ${({ theme }) => theme.typography.weight.light};
  }
`;
export const Author = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  span {
    width: 2.75rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border-radius: ${({ theme }) => theme.radius.circle};
    background: ${({ theme }) => theme.gradients.accent};
  }
  div {
    display: grid;
    text-align: left;
  }
  small {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;
export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.lg};
  i {
    width: ${({ theme }) => theme.spacing.xs};
    height: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.colors.border.strong};
  }
  i:last-child {
    width: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.accent.primary};
  }
`;
