import React, { FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('font-normal tracking-[0.4px]', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
    },
  },
});

export interface TextProps
  extends Omit<VariantProps<typeof textVariants>, 'class'> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Text: FC<TextProps> = ({ size, asChild, children, className }) => {
  const Component = asChild ? Slot : 'p';

  return (
    <Component className={textVariants({ size, className })}>
      {children}
    </Component>
  );
};
