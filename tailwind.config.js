const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			serif: ['"Laica"', ...defaultTheme.fontFamily.serif],
			sans: ['"Whyte"', ...defaultTheme.fontFamily.sans],
			mono: ['"Favorit Mono"', ...defaultTheme.fontFamily.mono],
		},
		colors: {
			white: '#fff',
			gray: colors.neutral,
			'gray-1000': '#050505',
			violet: colors.violet,
			blue: colors.blue,
			amber: colors.amber,
			red: colors.red,
			emerald: colors.emerald,
		},
		screens: {
			...defaultTheme.screens,
			'2xl': '1700px',
		},
	},
};
