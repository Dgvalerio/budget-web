import Image from 'next/image';

import type { Meta, StoryObj } from '@storybook/react';

import googleSvg from '@/assets/google.svg';
import { Button, ButtonProps } from '@/components/button/button';

const meta = {
  title: 'Input/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
    variant: {
      options: ['primary', 'secondary', 'icon'],
      control: 'inline-radio',
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    variant: 'secondary',
  },
};

export const Icon: Story = {
  args: {
    children: (
      <>
        <Image height={24} width={24} src={googleSvg} alt="Google Logo" />
      </>
    ),
    variant: 'icon',
  },
};

export const CustomComponent: Story = {
  args: { asChild: true, children: <a>Button with a</a> },
};
