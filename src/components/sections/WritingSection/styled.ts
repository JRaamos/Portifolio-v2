import styled from 'styled-components';
export const WritingTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  button {
    color: ${({ theme }) => theme.colors.text.muted};
    background: transparent;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: start;
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  margin: ${({ theme }) => `${theme.spacing.lg} 0 0`};
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
`;
export const ArticleList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;
export const ArticleCard = styled.article`
  display: grid;
  grid-template-columns: 12rem 1fr auto;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.glass.surface};
  div {
    display: grid;
    gap: ${({ theme }) => theme.spacing.sm};
  }
  small,
  time,
  span {
    color: ${({ theme }) => theme.colors.text.muted};
    font-family: ${({ theme }) => theme.typography.family.mono};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
  h3,
  p {
    margin: 0;
  }
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
