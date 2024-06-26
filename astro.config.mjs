import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import robotsTxt from 'astro-robots-txt';
import smartypants from "remark-smartypants";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xxczaki.com',
  integrations: [tailwind(), mdx(), sitemap(), robotsTxt()],
  markdown: {
    remarkPlugins: [smartypants]
  },
  output: "hybrid",
  adapter: cloudflare({
    imageService: 'compile'
  })
});