import React, { FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import styles from '@/components/text/text.styles.module.scss';

export interface TextProps {
  size?: 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export const Text: FC<TextProps> = ({ size = 'md', asChild, children }) => {
  const Component = asChild ? Slot : 'p';

  return (
    <Component className={`${styles.text} ${styles[size]}`}>
      {children}
    </Component>
  );
};
