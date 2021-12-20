import React, {useState} from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {MDXProvider} from '@mdx-js/react';

import Container from '../components/container';
import Link from '../components/link';
import InfoBox from '../components/info-box';
import BackToTop from '../components/back-to-top';

import '../public/css/tailwind.css';
import 'prism-theme-one-light-dark/prism-onedark.css';

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	const [color, setColor] = useState('#171717');

	useScrollPosition(({currPos}) => {
		if (currPos.y < -55) {
			setColor('#050505');
		} else {
			setColor('#171717');
		}
	});

	return (
		<>
			<Head>
				<title>Antoni Kępiński</title>
				<meta name="theme-color" content={color} />
				{/* TODO: Consider self-hosting */}
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css" integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs" crossOrigin="anonymous"/>
			</Head>
			<Script data-api="/_hive" src="/bee.js"/>
			<Container>
				<BackToTop/>
				<MDXProvider
					components={{
						h1: props => (
							<>
								<Head>
									<title>{props.children} | Antoni Kępiński</title>
									<meta property="og:title" content={`${props.children as string} | Antoni Kępiński`}/>
									<meta property="og:type" content="article"/>
								</Head>
								<header>
									<h1 className={`${(props.children as string).length > 20 ? 'text-3xl' : 'text-5xl'} font-bold italic leading-tight`} {...props} />
								</header>
							</>
						),
						h2: props => <h1 className="text-2xl font-bold pt-6" {...props} />,
						p: props => (
							<div className="text-lg text-gray-200 leading-8 tracking-wide">
								<p {...props} />
							</div>
						),
						a: props => (
							<Link href={props.href!} text={props.children as string} />
						),
						ul: props => (
							<ul className="list-disc list-inside" {...props} />
						),
						blockquote: props => (
							<InfoBox type="quote" children={props.children} />
						),
						img: props => (
							<figure className="grid gap-2 justify-center">
								<img className="rounded-md" draggable={false} {...props} />
								<figcaption className="text-xs text-right text-gray-400">{props.title}</figcaption>
							</figure>
						),
					}}
				>
					<Component {...pageProps} />
				</MDXProvider>
			</Container>
		</>
	);
};

export default App;
