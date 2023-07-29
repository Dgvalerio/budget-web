import React, { FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import styles from '@/components/heading/heading.styles.module.scss';

export interface HeadingProps {
  size?: 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export const Heading: FC<HeadingProps> = ({
  size = 'md',
  asChild,
  children,
}) => {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component className={`${styles.heading} ${styles[size]}`}>
      {children}
    </Component>
  );
};
