import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Whyte', ...defaultTheme.fontFamily.sans],
				serif: ['Playfair', ...defaultTheme.fontFamily.serif],
				mono: ['Favorit Mono', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				...defaultTheme.colors,
				gray: colors.neutral,
			},
			screens: {
				...defaultTheme.screens,
				'2xl': '1700px',
			},
		},
	},
	plugins: [],
};
