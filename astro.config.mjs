import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import cloudflare from "@astrojs/cloudflare";
import smartypants from "remark-smartypants";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [smartypants]
  },
  output: "hybrid",
  adapter: cloudflare({imageService: 'compile'})
});