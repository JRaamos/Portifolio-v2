import type { PropsWithChildren } from 'react';
import { CardRoot } from './styled';

export function Card({ children }: PropsWithChildren) {
  return <CardRoot>{children}</CardRoot>;
}
