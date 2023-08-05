import { ReactElement } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TopBar, TopBarProps } from '@/components/top-bar/top-bar';

const meta = {
  title: 'Part/TopBar',
  component: TopBar,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story): ReactElement => (
      <div className="m-[-1rem] h-screen w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<TopBarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
