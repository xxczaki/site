const withTranslate = require('next-translate')
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
});

const cspProd = 'default-src \'self\'; style-src \'self\' \'unsafe-inline\' https://hcaptcha.com https://*.hcaptcha.com; script-src \'self\' \'unsafe-inline\' https://hcaptcha.com https://*.hcaptcha.com https://cdn.splitbee.io; img-src \'self\' data:; frame-src https://hcaptcha.com https://*.hcaptcha.com; connect-src \'self\' https://hcaptcha.com https://*.hcaptcha.com; object-src data:';
const cspDev = 'default-src \'self\'; style-src \'self\' \'unsafe-inline\' https://hcaptcha.com https://*.hcaptcha.com; script-src \'self\' \'unsafe-eval\' \'unsafe-inline\' https://hcaptcha.com https://*.hcaptcha.com https://cdn.splitbee.io; img-src \'self\' data:; frame-src https://hcaptcha.com https://*.hcaptcha.com; connect-src \'self\' https://hcaptcha.com https://*.hcaptcha.com; object-src data:';
const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block'
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN'
	},
	{
		key: 'Permissions-Policy',
		value: 'accelerometer=(), ambient-light-sensor=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), xr-spatial-tracking=()'
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	{
		key: 'Referrer-Policy',
		value: 'no-referrer'
	},
	{
		key: 'Content-Security-Policy',
		value: process.env.NODE_ENV === 'production' ? cspProd : cspDev
	},
	{
		key: 'Sec-GPC',
		value: '1'
	}
];

const nextConfig = {
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	},
	reactStrictMode: true,
	experimental: {
		optimizeImages: true,
		optimizeCss: true
	},
	future: {
		strictPostcssConfiguration: true
	},
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders
			}
		];
	},
	pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],
	async rewrites() {
		return [
			{
				source: '/bee.js',
				destination: 'https://cdn.splitbee.io/sb.js'
			},
			{
				source: '/_hive/:slug',
				destination: 'https://hive.splitbee.io/:slug'
			}
		];
	}
};

module.exports = withTranslate(withMDX(nextConfig));

