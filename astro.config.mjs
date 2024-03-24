import { defineConfig, squooshImageService } from "astro/config";
import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  integrations: [tailwind(), sitemap(), robots(), react(), mdx()],
  output: "server"
});
