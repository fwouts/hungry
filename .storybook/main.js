const { mergeConfig } = require("vite");

const { svgr } = require("vite-plugin-react-svgr");

module.exports = {
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: "@storybook/react",
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

  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [
        svgr({
          exportAs: "ReactComponent",
        }),
      ],
    });
  },
};
