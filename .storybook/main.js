const { mergeConfig } = require("vite");

const { svgr } = require("vite-plugin-react-svgr");

module.exports = {
  core: {},
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [
    "../design/**/*.stories.mdx",
    "../design/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};
