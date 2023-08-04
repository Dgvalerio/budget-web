import React, { FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import clsx from 'clsx';

export interface HeadingProps {
  size?: 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({
  size = 'md',
  asChild,
  children,
  className,
}) => {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component
      className={clsx(
        {
          'text-md font-medium tracking-[1.25px]': size === 'md',
          'text-lg font-normal tracking-[0.25px]': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  );
};
