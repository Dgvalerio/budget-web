import type { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from '@/components/heading/heading';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
    size: { options: ['md', 'lg'], control: 'inline-radio' },
  },
} satisfies Meta<HeadingProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: 'Heading Large',
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    children: 'Heading Medium',
    size: 'md',
  },
};

export const CustomComponent: Story = {
  args: { asChild: true, children: <h1>Heading with H1</h1> },
};
