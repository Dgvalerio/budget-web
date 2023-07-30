import type { Meta, StoryObj } from '@storybook/react';

import { Footer, FooterProps } from '@/components/footer/footer';

const meta = {
  title: 'Part/Footer',
  component: Footer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
    size: { options: ['md', 'lg'], control: 'inline-radio' },
  },
} satisfies Meta<FooterProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Footer Large',
    size: 'lg',
  },
};
