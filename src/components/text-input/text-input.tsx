import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

import { Slot } from '@radix-ui/react-slot';

import { Text } from '@/components/text/text';

import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const textInputRootVariants = tv({
  base: 'flex flex-1 items-center gap-2 rounded bg-gray-850 p-2 text-gray-900 ring-indigo-200 transition-colors duration-75 focus-within:text-gray-100 focus-within:ring-1',
  variants: {
    error: { true: 'bg-red-900/20 text-red-900/80 ring-1 ring-red-900/80' },
  },
});

export namespace TextInputProps {
  export interface Root extends VariantProps<typeof textInputRootVariants> {
    children: ReactNode;
  }

  export interface Icon {
    children: ReactNode;
  }

  export interface Input extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
  }

  export interface Error {
    error?: FieldError;
  }
}

const TextInputRoot: FC<TextInputProps.Root> = ({ children, error }) => (
  <div className={textInputRootVariants({ error })}>{children}</div>
);

const TextInputIcon: FC<TextInputProps.Icon> = ({ children }) => (
  <Slot className="h-4 w-4">{children}</Slot>
);

export const TextInputInput: FC<TextInputProps.Input> = ({
  className,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <input
      className={twMerge(
        'flex-1 bg-transparent text-sm font-normal tracking-[0.4px] text-gray-100 placeholder-gray-600 outline-none',
        className
      )}
      {...props}
      {...register(props.name)}
    />
  );
};

const TextInputError: FC<TextInputProps.Error> = ({ error, ...props }) =>
  error ? (
    <Text size="sm" {...props}>
      {error.message}
    </Text>
  ) : (
    <></>
  );

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Error: TextInputError,
};
