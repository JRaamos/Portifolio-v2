import type { PropsWithChildren } from 'react';
import { BadgeRoot } from './styled';

export function Badge({ children }: PropsWithChildren) {
  return <BadgeRoot>{children}</BadgeRoot>;
}
