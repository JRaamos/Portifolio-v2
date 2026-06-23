import styled from 'styled-components';

export const ContainerRoot = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.containers.content};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.spacing.page};
`;
