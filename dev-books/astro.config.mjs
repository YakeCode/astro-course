// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: "server",
        access: "public",
      }),
    },
  },
});
