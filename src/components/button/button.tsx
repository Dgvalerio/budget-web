import React, { FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import styles from '@/components/button/button.styles.module.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'icon';
  children: ReactNode;
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  asChild,
  children,
}) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component className={`${styles.button} ${styles[variant]}`}>
      {children}
    </Component>
  );
};
