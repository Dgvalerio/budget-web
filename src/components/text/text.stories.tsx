import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '@/components/text/text';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
    size: { options: ['sm', 'md'], control: 'inline-radio' },
  },
} satisfies Meta<TextProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Text Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Text Medium',
    size: 'md',
  },
};

export const CustomComponent: Story = {
  args: { asChild: true, children: <span>Text with span</span> },
};
