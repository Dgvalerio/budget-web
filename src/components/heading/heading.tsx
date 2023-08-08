import React, { FC, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { tv, VariantProps } from 'tailwind-variants';

const headingVariants = tv({
  variants: {
    size: {
      md: 'text-md font-medium tracking-[1.25px]',
      lg: 'text-lg font-normal tracking-[0.25px]',
    },
  },
});

export interface HeadingProps
  extends Omit<VariantProps<typeof headingVariants>, 'class'> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({
  size,
  asChild,
  children,
  className,
}) => {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component className={headingVariants({ size, className })}>
      {children}
    </Component>
  );
};
