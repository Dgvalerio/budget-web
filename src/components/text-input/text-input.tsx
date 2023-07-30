import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import styles from '@/components/text-input/text-input.styles.module.scss';

export namespace TextInputProps {
  export interface Root {
    children: ReactNode;
  }
  export interface Icon {
    children: ReactNode;
  }
  export interface Input extends InputHTMLAttributes<HTMLInputElement> {}
}

const TextInputRoot: FC<TextInputProps.Root> = ({ children }) => (
  <div className={styles['text-input']}>{children}</div>
);

const TextInputIcon: FC<TextInputProps.Icon> = ({ children }) => (
  <Slot className={styles.icon}>{children}</Slot>
);

const TextInputInput: FC<TextInputProps.Input> = (props) => (
  <input className={styles.input} {...props} />
);

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
