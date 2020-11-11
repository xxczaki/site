const presets = [
	'next/babel'
];

const plugins = [
	['babel-plugin-styled-components', {
		ssr: true,
		pure: true
	}]
]

module.exports = {presets, plugins};
