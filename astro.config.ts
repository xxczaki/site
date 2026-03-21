import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import smartypants from 'remark-smartypants';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.xxczaki.com',
	integrations: [
		mdx(),
		sitemap({ filter: (page) => !page.includes('/impressum') }),
		robotsTxt(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		// @ts-expect-error Not fully compatible with newer versions of Astro (?)
		remarkPlugins: [smartypants],
	},
	fonts: [
		{
			name: 'Whyte',
			cssVariable: '--font-whyte',
			provider: fontProviders.local(),
			weights: ['400 500'],
			styles: ['normal'],
			display: 'optional',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/fonts/ABCWhyteVariableEdu.woff2'],
						weight: '400 500',
					},
				],
			},
		},
		{
			name: 'Favorit Mono',
			cssVariable: '--font-favorit-mono',
			provider: fontProviders.local(),
			weights: ['300'],
			styles: ['normal'],
			display: 'swap',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						src: ['./src/fonts/ABCFavoritMonoVariableEdu.woff2'],
						weight: '300',
					},
				],
			},
		},
	],
	security: {
		csp: true,
	},
});
