import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ButtonRoot } from './styled';

export interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'quiet';
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <ButtonRoot $variant={variant} {...props}>
      {children}
    </ButtonRoot>
  );
}
