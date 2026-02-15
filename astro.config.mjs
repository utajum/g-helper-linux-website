// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://g-helper-linux.elevatech.xyz",
  output: "static",
  integrations: [sitemap()],

  vite: {
    build: {
      // Ensure service worker is not hashed
      rollupOptions: {
        output: {
          entryFileNames: "[name].js",
        },
      },
    },
  },

  adapter: netlify(),
});
