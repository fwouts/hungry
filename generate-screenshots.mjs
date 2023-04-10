import reactPlugin from "@previewjs/plugin-react";
import { generateScreenshots } from "@previewjs/screenshot";
import os from "os";
import path from "path";
import playwright from "playwright";

const viewports = [["mobile", playwright.devices["Pixel 2"]]];
const browser = await playwright.chromium.launch();
for (const [viewport, deviceDescriptor] of viewports) {
  const context = await browser.newContext(deviceDescriptor);
  const page = await context.newPage();
  await generateScreenshots({
    page,
    frameworkPlugins: [reactPlugin],
    filePathPattern: "**/*.stories.{js,jsx,ts,tsx}",
    generateScreenshotPath({ filePath, name }) {
      const baseName = path.basename(filePath);
      const baseNameNoExt = baseName.substring(
        0,
        baseName.length - path.extname(baseName).length
      );
      return `${path.dirname(
        filePath
      )}/__screenshots__/${os.platform()}/${viewport}/${baseNameNoExt}-${name}.png`;
    },
    onScreenshot({ filePath, name }) {
      console.log(`${filePath} 📸 ${name}`);
    },
  });
}
await browser.close();
