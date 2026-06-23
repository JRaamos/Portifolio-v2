import type { PropsWithChildren } from 'react';
import { GlassPanelRoot } from './styled';

export function GlassPanel({ children }: PropsWithChildren) {
  return <GlassPanelRoot>{children}</GlassPanelRoot>;
}
