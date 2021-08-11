const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: {
		mode: 'all',
		preserveHtmlElements: false,
		content: [
			'./pages/**/*.{js,ts,jsx,tsx}',
			'./components/**/*.{js,ts,jsx,tsx}'
		]
	},
	darkMode: 'class',
	theme: {
		fontFamily: {
			mono: ['"iA Quattro"', 'Monaco', 'Menlo', 'Liberation Mono', 'ui-monospace', 'monospace'],
			sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
		},
		colors: {
			white: '#fff',
			gray: colors.trueGray,
			'gray-1000': '#050505',
			violet: colors.violet
		},
		extends: {}
	},
	plugins: [
		require('@tailwindcss/forms')
	]
};
