import { defineConfig } from "vite";
import { svgr } from "vite-plugin-react-svgr";

export default defineConfig({
  plugins: [
    svgr({
      exportAs: "ReactComponent",
    }),
  ],
  define: {
    "process.env.__NEXT_HAS_REWRITES": JSON.stringify(false),
    "process.env.__NEXT_I18N_SUPPORT": JSON.stringify(false),
    "process.env.__NEXT_MANUAL_CLIENT_BASE_PATH": JSON.stringify(""),
    "process.env.__NEXT_NEW_LINK_BEHAVIOR": JSON.stringify(0),
    "process.env.__NEXT_ROUTER_BASEPATH": JSON.stringify(""),
    "process.env.__NEXT_SCROLL_RESTORATION": JSON.stringify(null),
    "process.env.__NEXT_TRAILING_SLASH": JSON.stringify(false),
  },
});
