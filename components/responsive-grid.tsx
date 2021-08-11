import React from 'react';

interface Props {
	children: React.ReactNode;
}

const ResponsiveGrid = ({children}: Props) => (
	<section
		className="grid gap-5"
		style={{gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))'}}
	>
		{children}
	</section>
);

export default ResponsiveGrid;

