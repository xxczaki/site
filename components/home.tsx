import React from 'react';
import {MDXProvider} from '@mdx-js/react';

import Link from './link';
import Center from './center';

interface Props {
	children: React.ReactNode;
}

interface MDXProps {
	children: string;
	// Only in the anchor tag
	href?: string;
}

const mdxComponents = {
	p: (props: MDXProps) => (
		<div className="text-lg text-gray-200 leading-8 tracking-wide">
			<p {...props} />
		</div>
	),
	a: (props: MDXProps) => (
		<Link href={props.href!} isExternal text={props.children} />
	),
};

const Home = ({children}: Props) => (
	<MDXProvider components={mdxComponents}>
		<Center>
			{children}
		</Center>
	</MDXProvider>
);

export default Home;
