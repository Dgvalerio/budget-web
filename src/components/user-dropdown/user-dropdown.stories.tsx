import { ReactElement } from 'react';

import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { UserDropdown } from '@/components/user-dropdown/user-dropdown';

const meta = {
  title: 'Part/UserDropdown',
  component: UserDropdown,
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
      <div className="m-[-1rem] h-32 w-32">
        <div className="float-right">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Closed: Story = {};

export const Opened: Story = {
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));

    await expect(canvas.getByText('Sair')).toBeInTheDocument();
  },
};
