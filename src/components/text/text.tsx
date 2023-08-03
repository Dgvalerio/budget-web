import React, { FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import clsx from 'clsx';

export interface TextProps {
  size?: 'sm' | 'md';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Text: FC<TextProps> = ({
  size = 'md',
  asChild,
  children,
  className,
}) => {
  const Component = asChild ? Slot : 'p';

  return (
    <Component
      className={clsx(
        'font-normal tracking-[0.4px]',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
        },
        className
      )}
    >
      {children}
    </Component>
  );
};
