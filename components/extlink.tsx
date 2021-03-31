import React from 'react';

interface Props {
	href: string;
	children: React.ReactNode;
}

const ExtLink = ({href, children}: Props) => (
	<a
		href={href}
		className="border-b-2 border-gray-600 transition hover:bg-gray-600 rounded-sm"
		target="_blank"
		rel="noopener noreferrer"
	>
		{children}
	</a>
);

export default ExtLink;
