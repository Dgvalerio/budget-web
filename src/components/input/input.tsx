import React, {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { Root } from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';

import { Text } from '@/components/text/text';
import { cn } from '@/lib/utils';

import { cva, type VariantProps } from 'class-variance-authority';

const inputRootVariants = cva(
  'flex flex-1 items-center gap-2 rounded bg-gray-850 p-2 text-gray-900 ring-indigo-200 transition-colors duration-75 focus-within:text-gray-100 focus-within:ring-1',
  {
    variants: {
      error: { true: 'bg-red-900/20 text-red-900/80 ring-1 ring-red-900/80' },
    },
  }
);

export namespace InputProps {
  export interface Root extends VariantProps<typeof inputRootVariants> {
    children: ReactNode;
  }

  export interface Icon {
    children: ReactNode;
  }

  export interface Text extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
  }

  export interface Error {
    error?: string;
  }
}

const InputRoot: FC<InputProps.Root> = ({ children, error }) => (
  <div className={inputRootVariants({ error })}>{children}</div>
);

const InputLabel = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));

InputLabel.displayName = Root.displayName;

const InputIcon: FC<InputProps.Icon> = ({ children }) => (
  <Slot className="h-4 w-4">{children}</Slot>
);

export const InputText = forwardRef<HTMLInputElement, InputProps.Text>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'ring-offset-white flex-1 bg-transparent text-sm font-normal tracking-[0.4px] text-gray-100 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

InputText.displayName = 'InputText';

const InputError: FC<InputProps.Error> = ({ error, ...props }) =>
  error ? (
    <Text size="sm" {...props}>
      {error}
    </Text>
  ) : (
    <></>
  );

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Text: InputText,
  Icon: InputIcon,
  Error: InputError,
};
