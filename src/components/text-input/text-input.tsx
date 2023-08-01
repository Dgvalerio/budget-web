import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

import { Slot } from '@radix-ui/react-slot';

import styles from '@/components/text-input/text-input.styles.module.scss';
import { Text } from '@/components/text/text';

export namespace TextInputProps {
  export interface Root {
    children: ReactNode;
    error?: boolean;
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
  <div className={[styles['text-input'], error ? styles.error : ''].join(' ')}>
    {children}
  </div>
);

const TextInputIcon: FC<TextInputProps.Icon> = ({ children }) => (
  <Slot className={styles.icon}>{children}</Slot>
);

export const TextInputInput: FC<TextInputProps.Input> = ({
  className,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <input
      className={[styles.input, className].join(' ')}
      {...props}
      {...register(props.name)}
    />
  );
};

const TextInputError: FC<TextInputProps.Error> = ({ error }) =>
  error ? <Text size="sm">{error.message}</Text> : <></>;

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Error: TextInputError,
};
