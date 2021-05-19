import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

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
					<meta name="description" content="Personal website of Antoni Kepinski, a full stack developer, open-source enthusiast and classical music enjoyer, currently based near Poznań, Poland."/>
					<meta name="theme-color" content="black"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<meta property="og:title" content="Antoni Kepinski"/>
					<meta property="og:description" content="Personal website of Antoni Kepinski, a full stack developer, open-source enthusiast and classical music enjoyer, currently based near Poznań, Poland."/>
					<meta property="og:url" content="https://www.kepinski.ch"/>
					<meta property="og:locale" content="en_US"/>
					<meta property="og:type" content="website"/>
					<link rel="canonical" href="https://www.kepinski.ch"/>
					<link rel="icon" href="/favicon.ico"/>
					<link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
					<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
					<link rel="manifest" href="/manifest.webmanifest"/>
				</Head>
				<body className="items-center justify-center bg-white dark:bg-black text-black dark:text-white font-sans text-lg overflow-x-hidden">
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
