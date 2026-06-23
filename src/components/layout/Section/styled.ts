import styled from 'styled-components';

export const SectionRoot = styled.section`
  position: relative;
  padding-block: ${({ theme }) => theme.spacing.section};
  scroll-margin-top: ${({ theme }) => theme.sizes.header};
`;
