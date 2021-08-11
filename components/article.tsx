import React from 'react';
import Head from 'next/head';
import {MDXProvider} from '@mdx-js/react';

import Link from './link';

interface Props {
	children: React.ReactNode;
}

interface MDXProps {
	children: string;
	// Only in the anchor tag
	href?: string;
}

const mdxComponents = {
	h1: (props: MDXProps) => (
		<>
			<Head>
				<title>{props.children} | Antoni Kępiński</title>
				<meta property="og:title" content={`${props.children} | Antoni Kępiński`}/>
			</Head>
			<header>
				<h1 className="text-5xl font-bold italic leading-tight" {...props} />
			</header>
		</>
	),
	h2: (props: MDXProps) => <h1 className="text-2xl font-bold pt-6" {...props} />,
	p: (props: MDXProps) => (
		<div className="text-lg">
			<p {...props} />
		</div>
	),
	a: (props: MDXProps) => (
		<Link href={props.href!} isExternal text={props.children} />
	),
	ul: (props: MDXProps) => (
		<ul className="list-disc list-inside" {...props} />
	),
};

const Article = ({children}: Props) => {
	return (
		<MDXProvider components={mdxComponents}>
			<div className="pt-10 max-w-4xl p-5 grid grid-cols-1 gap-8">
				{children}
			</div>
		</MDXProvider>
	);
};

export default Article;
