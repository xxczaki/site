import gfm from 'remark-gfm';
import prism from 'remark-prism';
import smartypants from 'remark-smartypants';
import math from 'remark-math';
import katex from 'rehype-katex';
import withMDX from '@next/mdx';

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
		value: 'accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), xr-spatial-tracking=()',
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
		key: 'Sec-GPC',
		value: '1',
	},
];

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizeCss: true,
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
};

export default withMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: '@mdx-js/react',
		remarkPlugins: [
			gfm,
			smartypants,
			prism,
			math,
		],
		rehypePlugins: [
			katex,
		],
	},
})(nextConfig);

