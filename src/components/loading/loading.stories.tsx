import type { Meta, StoryObj } from '@storybook/react';

import { Loading, LoadingProps } from '@/components/loading/loading';

const meta = {
  title: 'Part/Loading',
  component: Loading,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<LoadingProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
