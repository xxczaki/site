import React from 'react';

interface Props {
	children: React.ReactNode;
}

const Container = ({children}: Props) => (
	<div className='w-full flex justify-center relative'>
		{children}
	</div>
);

export default Container;
