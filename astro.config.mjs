import { defineConfig } from "astro/config";
// import { rssSchema } from "@astrojs/rss";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
});
