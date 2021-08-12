import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import Link from '../components/link';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const page = ctx.renderPage();

		return {...page};
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>

					<meta name="description" content="Personal website of Antoni Kępiński, full stack developer, open-source enthusiast and classical music enjoyer, currently based near Poznań, Poland."/>
					<meta property="og:title" content="Antoni Kępiński"/>
					<meta property="og:description" content="Personal website of Antoni Kępiński, full stack developer, open-source enthusiast and classical music enjoyer, currently based near Poznań, Poland."/>
					<meta property="og:image" content="https://og.kepinski.ch/Personal%20Website%20of%20Antoni%20K%C4%99pi%C5%84ski.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Frawcdn.githack.com%2Fxxczaki%2Fassets%2F2c49d0b632fb757796aaa26ab4c422254d497b13%2Ffavicon.svg&widths=500&heights=500"/>
					<meta property="og:image:alt" content="Personal website of Antoni Kępiński"/>
					<meta property="og:locale" content="en_US"/>
					<meta property="og:type" content="website"/>
					<meta property="og:url" content="https://www.kepinski.ch"/>
					<meta name="twitter:card" content="summary_large_image"/>
					<link rel="canonical" href="https://www.kepinski.ch"/>

					<link rel="icon" href="/favicon.ico"/>
					<link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
					<link rel="apple-touch-icon" href="/apple-icon-180.png"/>
					<link rel="manifest" href="/manifest.webmanifest" />

					<link
						rel="preload"
						href="/public/fonts/iAWriterQuattroV.woff2"
						crossOrigin="anonymous"
						as="font"
					/>
					<link
						rel="preload"
						href="/public/fonts/iAWriterQuattroV-Italic.woff2"
						crossOrigin="anonymous"
						as="font"
					/>
				</Head>
				<body className="bg-gray-1000 text-gray-200 relative h-full min-h-screen">
					<Main/>
					<NextScript />
					<footer className="text-right text-xs text-gray-400 absolute bottom-2 right-4">
						<p>&copy; {new Date().getFullYear()} Antoni Kępiński &mdash; <Link href="/legal" text="Legal"/></p>
					</footer>
				</body>
			</Html>
		);
	}
}
