import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {MDXProvider} from '@mdx-js/react';
import Image from 'next/image';
import NextLink from 'next/link';
import {useRouter} from 'next/router';

import Container from '../components/container';
import Link from '../components/link';
import InfoBox from '../components/info-box';
import BackToTop from '../components/back-to-top';

import '../public/css/tailwind.css';
// Import '../public/css/katex.css';
// import 'prism-theme-one-light-dark/prism-onedark.css';

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	const router = useRouter();

	useEffect(() => {
		console.log(String.raw`
 ____  ____                 _
|_   ||   _|               | |
  | |__| |  .---.   _   __ | |
  |  __  | / /__\\ [ \ [  ]| |
 _| |  | |_| \__.,  \ '/ / |_|
|____||____|'.__.'[\_:  /  (_)
                   \__.'
`);
		console.log('Looking for the source code? Here ya go: https://github.com/xxczaki/site');
	}, []);

	return (
		<>
			<Head>
				<title>Antoni Kępiński</title>
				<meta name='theme-color' content='#171717' />
			</Head>
			<Script data-api='/_hive' src='/bee.js'/>
			<Container>
				<BackToTop/>
				<MDXProvider
					components={{
						h1(props) {
							const seoTitle = props.children === 'Antoni Kępiński' ? 'Resume' : props.children as string;

							console.log(router.pathname)

							return (
								<>
									<Head>
										<title>{seoTitle} | Antoni Kępiński</title>
										<meta property='og:title' content={`${seoTitle} | Antoni Kępiński`}/>
									</Head>
									<header className={router.pathname === '/' ? 'cursor-default' : 'cursor-pointer'}>
										<NextLink href='/' passHref>
												<abbr title={router.pathname === '/' ? undefined : 'Click to go back to home page'} className='transition no-underline'>
													<h1 className={`${(props.children as string).length >= 15 ? 'text-3xl' : 'text-5xl'} font-bold w-fit italic leading-tight font-serif content`} {...props} />
												</abbr>
										</NextLink>
									</header>
								</>
							);
						},
						h2: props => <h1 className='text-2xl font-bold pt-6 -mb-4' {...props} />,
						p(props) {
							if (router.pathname === '/') {
								const {children} = props;
								// @ts-expect-error Unsafe
								const descriptor = typeof children === 'object' ? children[0].split(' ')[0] : children.split(' ')[0];
								// @ts-expect-error Unsafe
								const content = typeof children === 'object' ? children.map((c, i) => i === 0 ? c.replace(descriptor, '') : c) : children.replace(descriptor, '');

								return (
									<div className='flex items-baseline relative gap-2'>
										<span style={{writingMode: 'vertical-rl'}} className='h-fit font-mono rotate-180 lg:absolute lg:-left-8 cursor-vertical-text text-gray-600 dark:text-gray-400 uppercase text-xs mt-2 select-none'>{descriptor}</span>
										<p className='text-lg leading-8 tracking-wide'>{content}</p>
									</div>
								);
							}

							return (
								<p className='text-lg leading-8 tracking-wide' {...props}/>
							);
						},
						a: props => (
							<Link href={props.href} text={props.children as string} isExternal/>
						),
						ul: props => (
							<ul className='list-disc list-inside' {...props} />
						),
						blockquote: props => (
							<InfoBox type='quote' children={props.children} />
						),
						img: props => (
							<figure className='grid gap-2 justify-center w-full h-52 relative'>
								{/* @ts-expect-error No need to worry right now */}
								<Image
									draggable={false}
									layout='fill'
									objectFit='contain'
									{...props}
								/>
								<figcaption className='text-xs text-right text-gray-400'>{props.title}</figcaption>
							</figure>
						),
						em: props => (
							<em className='font-serif' {...props}/>
						),
					}}
				>
					<Component {...pageProps} />
				</MDXProvider>
			</Container>
			<div className='h-32'/>
			<footer className='text-right text-xs dark:text-gray-400 absolute bottom-2 px-5 lg:px-0 pb-8 lg:pb-3 w-full flex justify-center'>
				<div className='max-w-4xl flex justify-between w-full'>
					<div className='flex gap-2'>
						<Link href='/colophon' text='Colophon'/>
						<small>&bull;</small>
						<Link href='/uses' text='Uses'/>
					</div>
					<p>&copy; {new Date().getFullYear()} Antoni Kępiński</p>
				</div>
			</footer>
		</>
	);
};

export default App;
