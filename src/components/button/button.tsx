import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import styles from '@/components/button/button.styles.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: ReactNode;
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  asChild,
  children,
  ...props
}) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </Component>
  );
};
