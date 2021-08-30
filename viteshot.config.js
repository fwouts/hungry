const playwrightShooter = require("viteshot/shooters/playwright");
const playwright = require("playwright");

module.exports = {
  framework: {
    type: "react",
  },
  shooter: playwrightShooter(playwright.chromium, {
    contexts: {
      mobile: playwright.devices["Pixel 2"],
    },
  }),
  filePathPattern: "**/*.screenshot.@(js|jsx|tsx)",
  wrapper: {
    path: "__reactpreview__/Wrapper.tsx",
    componentName: "Wrapper",
  },
};
