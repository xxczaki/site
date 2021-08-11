import React from 'react';

interface Props {
	children: React.ReactNode;
}

const Container = ({children}: Props) => {
	return (
		<main className="pt-10 md:pt-32 max-w-2xl p-5 grid grid-cols-1 gap-8">
			{children}
		</main>
	);
};

export default Container;
