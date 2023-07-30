import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "auto"
  },
  integrations: [preact(), compress()],
  output: "server",
  adapter: vercel({
    analytics: true
  })
});