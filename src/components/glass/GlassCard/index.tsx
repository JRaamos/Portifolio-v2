import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { GlassCardRoot } from './styled';

type GlassCardProps = PropsWithChildren<ComponentPropsWithoutRef<'article'>>;

export function GlassCard({ children, ...props }: GlassCardProps) {
  return <GlassCardRoot {...props}>{children}</GlassCardRoot>;
}
