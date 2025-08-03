import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import smartypants from 'remark-smartypants';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.xxczaki.com',
	integrations: [mdx(), sitemap(), robotsTxt()],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		// @ts-expect-error Not fully compatible with newer versions of Astro (?)
		remarkPlugins: [smartypants],
	},
});
