import type { Meta, StoryObj } from '@storybook/react';

import { TextInput, TextInputProps } from '@/components/text-input/text-input';

import { Mail } from 'lucide-react';

const meta = {
  title: 'Input/TextInput',
  component: TextInput.Root,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<TextInputProps.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    children: <TextInput.Input placeholder="Digite seu e-mail" />,
  },
};

export const InputWithIcon: Story = {
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Mail />
        </TextInput.Icon>
        <TextInput.Input placeholder="Digite seu e-mail" />
      </>
    ),
  },
};
