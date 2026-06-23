import styled from 'styled-components';
export const QuoteRoot = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.page}`};
  background: ${({ theme }) => theme.gradients.quote};
  text-align: center;
`;
export const QuoteText = styled.blockquote`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.family.display};
  font-size: ${({ theme }) => theme.typography.size.section};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
  span,
  em {
    display: block;
  }
  em {
    font-style: normal;
    background: ${({ theme }) => theme.gradients.accent};
    background-clip: text;
    color: transparent;
  }
`;
