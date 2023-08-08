import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'flex items-center justify-center gap-2 rounded text-sm font-medium uppercase tracking-[1.25px] transition-colors focus:outline-indigo-200',
  variants: {
    variant: {
      primary:
        'bg-indigo-500 px-4 py-2 text-gray-100 hover:bg-indigo-300 active:bg-indigo-500',
      secondary:
        'bg-gray-100 px-4 py-2 text-gray-900 hover:bg-gray-800 active:bg-gray-100',
      icon: 'bg-gray-100 px-1 py-1 text-gray-900 hover:bg-gray-800 hover:text-gray-100 active:bg-gray-100',
      ghost:
        'bg-transparent px-4 py-2 text-gray-100 hover:bg-gray-800 active:bg-gray-600',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant,
  asChild,
  children,
  className,
  ...props
}) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...(!asChild && !props.type && { type: 'button' })}
      {...props}
      className={buttonVariants({ variant, className })}
    >
      {children}
    </Component>
  );
};
