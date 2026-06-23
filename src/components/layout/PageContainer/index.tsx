import type { PropsWithChildren } from 'react';
import { PageRoot } from './styled';

export function PageContainer({ children }: PropsWithChildren) {
  return <PageRoot>{children}</PageRoot>;
}
