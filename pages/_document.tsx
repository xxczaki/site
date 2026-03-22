import React from 'react';
import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='utf8'/>

				<meta name='description' content='Personal website of Antoni Kępiński, full stack developer, open-source enthusiast, and classical music enjoyer, based in Warsaw, Poland.'/>
				<meta property='og:title' content='Antoni Kępiński'/>
				<meta property='og:description' content='Personal website of Antoni Kępiński, full stack developer, open-source enthusiast, and classical music enjoyer, based in Warsaw, Poland.'/>
				<meta property='og:image' content='https://og.kepinski.ch/**Personal%20Site%20of%20Antoni%20K%C4%99pi%C5%84ski**.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fraw.githubusercontent.com%2Fxxczaki%2Fassets%2Fmain%2F3d.jpg&widths=350&heights=350'/>
				<meta property='og:image:alt' content='Personal website of Antoni Kępiński'/>
				<meta property='og:locale' content='en_US'/>
				<meta property='og:type' content='website'/>
				<meta property='og:url' content='https://www.kepinski.ch'/>
				<meta name='twitter:card' content='summary_large_image'/>
				<link rel='canonical' href='https://www.kepinski.ch'/>

				<link rel='icon' href='/favicon.ico'/>
				<link rel='icon' href='/favicon.svg' type='image/svg+xml'/>
				<link rel='apple-touch-icon' href='/apple-icon-180.png'/>
				<link rel='manifest' href='/manifest.webmanifest' />

				<link
					rel='preload'
					href='/fonts/ABCWhyteVariableEdu.woff2'
					crossOrigin='anonymous'
					as='font'
				/>
				<link
					rel='preload'
					href='/fonts/ABCLaicaAItalicVariableEdu.woff2'
					crossOrigin='anonymous'
					as='font'
				/>
				<link
					rel='preload'
					href='/fonts/ABCFavoritMonoVariableEdu.woff2'
					crossOrigin='anonymous'
					as='font'
				/>
			</Head>
			<body className='bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-300 relative min-h-screen h-full font-sans w-full'>
				<Main/>
				<NextScript />
			</body>
		</Html>
	);
}
