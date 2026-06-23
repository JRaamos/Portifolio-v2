import type { PropsWithChildren } from 'react';
import { SectionRoot } from './styled';

interface SectionProps extends PropsWithChildren {
  id: string;
  labelledBy?: string;
}

export function Section({ id, labelledBy, children }: SectionProps) {
  return (
    <SectionRoot id={id} aria-labelledby={labelledBy}>
      {children}
    </SectionRoot>
  );
}
