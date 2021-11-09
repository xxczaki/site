import smartypants from '@silvenon/remark-smartypants';
import math from 'remark-math';
import katex from 'rehype-katex';
import withMDX from '@next/mdx';

const cspProd = 'default-src \'self\'; style-src \'self\' \'unsafe-inline\' https://hcaptcha.com https://*.hcaptcha.com https://cdn.jsdelivr.net; script-src \'self\' \'unsafe-inline\' https://hcaptcha.com https://*.hcaptcha.com https://cdn.splitbee.io; img-src \'self\' data:; frame-src https://hcaptcha.com https://*.hcaptcha.com; connect-src \'self\' https://hcaptcha.com https://*.hcaptcha.com; object-src data:; font-src \'self\' https://cdn.jsdelivr.net';
const cspDev = 'default-src \'self\'; style-src \'self\' \'unsafe-inline\' https://hcaptcha.com https://*.hcaptcha.com https://cdn.jsdelivr.net; script-src \'self\' \'unsafe-eval\' \'unsafe-inline\' https://hcaptcha.com https://*.hcaptcha.com https://cdn.splitbee.io; img-src \'self\' data:; frame-src https://hcaptcha.com https://*.hcaptcha.com; connect-src \'self\' https://hcaptcha.com https://*.hcaptcha.com; object-src data:; font-src \'self\' https://cdn.jsdelivr.net';
const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'Permissions-Policy',
		value: 'accelerometer=(), ambient-light-sensor=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), xr-spatial-tracking=()',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Referrer-Policy',
		value: 'no-referrer',
	},
	{
		key: 'Content-Security-Policy',
		value: process.env.NODE_ENV === 'production' ? cspProd : cspDev,
	},
	{
		key: 'Sec-GPC',
		value: '1',
	},
];

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizeImages: true,
		optimizeCss: true,
	},
	future: {
		strictPostcssConfiguration: true,
	},
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
	pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],
	async rewrites() {
		return [
			{
				source: '/bee.js',
				destination: 'https://cdn.splitbee.io/sb.js',
			},
			{
				source: '/_hive/:slug',
				destination: 'https://hive.splitbee.io/:slug',
			},
		];
	},
};

export default withMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: '@mdx-js/react',
		remarkPlugins: [
			math,
			smartypants,
		],
		rehypePlugins: [
			katex,
		],
	},
})(nextConfig);

