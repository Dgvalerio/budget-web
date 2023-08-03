import { FC, PropsWithChildren, ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';

import { TextInput, TextInputProps } from '@/components/text-input/text-input';

import { Mail } from 'lucide-react';
import { z } from 'zod';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const form = useForm<{ email: string }>({
    resolver: zodResolver(
      z.object({
        email: z.string().nonempty({ message: 'Você deve informar um e-mail' }),
      })
    ),
  });

  return (
    <FormProvider {...form}>
      <form>{children}</form>
    </FormProvider>
  );
};

const meta = {
  title: 'Input/TextInput',
  component: TextInput.Root,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    children: { table: { disable: true } },
  },
  decorators: [
    (Story): ReactElement => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} satisfies Meta<TextInputProps.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    children: <TextInput.Input name="email" placeholder="Digite seu e-mail" />,
  },
};

export const InputWithIcon: Story = {
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Mail />
        </TextInput.Icon>
        <TextInput.Input name="email" placeholder="Digite seu e-mail" />
      </>
    ),
  },
};

export const InputWithError: Story = {
  args: {
    error: true,
    children: (
      <>
        <TextInput.Icon>
          <Mail />
        </TextInput.Icon>
        <TextInput.Input name="email" placeholder="Digite seu e-mail" />
      </>
    ),
  },
};
