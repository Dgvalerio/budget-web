import { FC, PropsWithChildren, ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from '@/components/input/input';

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
  title: 'Input/Input',
  component: Input.Root,
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
} satisfies Meta<InputProps.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    children: <Input.Text name="email" placeholder="Digite seu e-mail" />,
  },
};

export const InputWithIcon: Story = {
  args: {
    children: (
      <>
        <Input.Icon>
          <Mail />
        </Input.Icon>
        <Input.Text name="email" placeholder="Digite seu e-mail" />
      </>
    ),
  },
};

export const InputWithError: Story = {
  args: {
    error: true,
    children: (
      <>
        <Input.Icon>
          <Mail />
        </Input.Icon>
        <Input.Text name="email" placeholder="Digite seu e-mail" />
      </>
    ),
  },
};
