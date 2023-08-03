import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: ReactNode;
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  asChild,
  children,
  className,
  ...props
}) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...props}
      className={clsx(
        'rounded text-sm font-medium uppercase tracking-[1.25px] transition-colors focus:outline-indigo-200',
        {
          'bg-indigo-500 px-4 py-2 text-gray-100 hover:bg-indigo-300 active:bg-indigo-500':
            variant === 'primary',
          'bg-gray-100 px-4 py-2 text-gray-900 hover:bg-gray-800 active:bg-gray-100':
            variant === 'secondary',
          'bg-gray-100 px-1 py-1 text-gray-900 hover:bg-gray-800 hover:text-gray-100 active:bg-gray-100':
            variant === 'icon',
        },
        className
      )}
    >
      {children}
    </Component>
  );
};
