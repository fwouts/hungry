const {
  mergeConfig
} = require("vite");
const {
  svgr
} = require("vite-plugin-react-svgr");
module.exports = {
  stories: ["../design/**/*.stories.mdx", "../design/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", {
    name: "@storybook/addon-styling",
    options: {
      postcssLoaderOptions: {
        implementation: require("postcss")
      }
    }
  }, "@storybook/addon-mdx-gfm"],
  async viteFinal(config, {
    configType
  }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [svgr({
        exportAs: "ReactComponent"
      })]
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};