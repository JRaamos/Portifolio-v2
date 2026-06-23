import styled from 'styled-components';
export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(20rem, 32.5rem);
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: start;
  p {
    max-width: ${({ theme }) => theme.containers.text};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const ContactTitle = styled.h2`
  display: grid;
  margin: ${({ theme }) => `${theme.spacing.lg} 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  span {
    background: ${({ theme }) => theme.gradients.accent};
    background-clip: text;
    color: transparent;
  }
`;
export const ContactLinks = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
  }
`;
export const Form = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
`;
export const Field = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  label {
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
    text-transform: uppercase;
  }
  input,
  textarea {
    width: 100%;
    border: ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.radius.md};
    padding: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background.secondary};
    resize: vertical;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;
export const Submit = styled.button`
  height: ${({ theme }) => theme.sizes.button};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.accent.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;
`;
