
import type { StorybookConfig } from "@storybook/nextjs";

import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-styling",
      options: {
        name: "@storybook/addon-styling",
        options: {
          sass: {
            implementation: require("sass"),
          },
        },
      },
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    const customConfig = { ...config };

    if (customConfig.resolve && customConfig.resolve.alias) {
      customConfig.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    }

    return customConfig;
  },
};
export default config;
