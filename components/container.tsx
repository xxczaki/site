import {useRouter} from 'next/dist/client/router';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import GhostButton from './ghost-button';

interface Props {
	children: React.ReactNode;
}

const Container = ({children}: Props) => {
	const router = useRouter();
	const {t} = useTranslation('common');

	return (
		<>
			<div className="sticky h-14 border-b border-gray-800 bg-gray-900 flex justify-center">
				<nav className="max-w-xl w-full flex content-center justify-between p-2 font-sans">
					<GhostButton
						shouldHover={router.pathname === '/'}
						onMouseEnter={async () => router.prefetch('/')}
						onClick={async () => router.push('/')}
					>
						{t('home')}
					</GhostButton>
					<GhostButton
						shouldHover={router.pathname === '/about'}
						onMouseEnter={async () => router.prefetch('/about')}
						onClick={async () => router.push('/about')}
					>
						{t('about')}
					</GhostButton>
					<GhostButton
						shouldHover={router.pathname === '/uses'}
						onMouseEnter={async () => router.prefetch('/uses')}
						onClick={async () => router.push('/uses')}
					>
						{t('uses')}
					</GhostButton>
				</nav>
			</div>
			<div className="w-full flex justify-center">
				{children}
			</div>
		</>
	);
};

export default Container;
