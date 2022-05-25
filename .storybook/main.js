module.exports = {
  core: {
    builder: "webpack5",
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
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => !Array.isArray(rule.test) && rule.test?.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false,
          },
        },
        "url-loader",
      ],
    });
    return config;
  },
};
