// eslint-disable-next-line no-restricted-imports
import './storybook.styles.scss';

import { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { PartialStoryFn } from '@storybook/types';

const inter = Inter({ subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [
    (Story: PartialStoryFn): ReactNode => (
      <main className={inter.className}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
