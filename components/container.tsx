import {useRouter} from 'next/dist/client/router';
import React from 'react';

import GhostButton from './ghost-button';

interface Props {
	children: React.ReactNode;
}

const Container = ({children}: Props) => {
	const router = useRouter();

	return (
		<>
			<div className='sticky h-14 border-b border-gray-800 bg-gray-900 flex justify-center'>
				<nav className='max-w-xl w-full flex content-center justify-between p-2 font-sans gap-1'>
					<GhostButton
						shouldHover={router.pathname === '/'}
						onMouseEnter={async () => router.prefetch('/')}
						onClick={async () => router.push('/')}
					>
						Home
					</GhostButton>
					<GhostButton
						shouldHover={router.pathname === '/about'}
						onMouseEnter={async () => router.prefetch('/about')}
						onClick={async () => router.push('/about')}
					>
						About
					</GhostButton>
					<GhostButton
						shouldHover={router.pathname === '/uses'}
						onMouseEnter={async () => router.prefetch('/uses')}
						onClick={async () => router.push('/uses')}
					>
						Uses
					</GhostButton>
				</nav>
			</div>
			<div className='w-full flex justify-center relative'>
				{children}
			</div>
		</>
	);
};

export default Container;
