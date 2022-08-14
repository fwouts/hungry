import { defineConfig } from "vite";
import { svgr } from "vite-plugin-react-svgr";

export default defineConfig({
  plugins: [
    svgr({
      exportAs: "ReactComponent",
    }),
  ],
  define: {
    process: JSON.stringify({
      env: {},
    }),
  },
});
