const { mergeConfig } = require("vite");
module.exports = {
  stories: [
    "../design/**/*.stories.mdx",
    "../design/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      // Insert any custom Vite config here.
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
