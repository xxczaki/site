const presets = [
	['next/babel', {
		'preset-env': {
			targets: '>2%, not dead'
		}
	}]
];

const plugins = [
	['babel-plugin-styled-components', {
		ssr: true,
		pure: true
	}]
]

module.exports = {presets, plugins};
