module.exports = {
  stories: [
    "../design/**/*.stories.mdx",
    "../design/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
  ],
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false,
          },
        },
      ],
    });
    return config;
  },
};
