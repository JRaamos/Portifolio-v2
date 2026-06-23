import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { GlassButtonRoot } from './styled';

type GlassButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function GlassButton({ children, ...props }: GlassButtonProps) {
  return <GlassButtonRoot {...props}>{children}</GlassButtonRoot>;
}
