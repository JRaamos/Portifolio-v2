import type { PropsWithChildren } from 'react';
import { ContainerRoot } from './styled';

export function Container({ children }: PropsWithChildren) {
  return <ContainerRoot>{children}</ContainerRoot>;
}
