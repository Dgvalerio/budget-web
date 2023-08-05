import type { Meta, StoryObj } from '@storybook/react';

import { TopBar, TopBarProps } from '@/components/top-bar/top-bar';

const meta = {
  title: 'Part/TopBar',
  component: TopBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<TopBarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
