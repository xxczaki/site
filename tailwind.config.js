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
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	}
}
