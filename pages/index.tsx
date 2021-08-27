import React from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Center from '../components/center';
import Link from '../components/link';
import Button from '../components/button';

const Index: NextPage<unknown> = () => {
	const router = useRouter();
	const {t} = useTranslation('home');

	return (
		<Center>
			<div className="grid gap-5">
				<p className="text-lg text-gray-200 leading-8 tracking-wide">
					{t('intro.1')} <Link href="https://github.com/xxczaki" isExternal text={t('intro.2')}/>{t('intro.3')} <Link href="https://parsify.app" isExternal text={t('intro.4')}/>. {t('intro.5')} <Link href="https://mypolitics.eu" isExternal text="myPolitics"/>.
				</p>
				<p className="text-lg text-gray-200 leading-8 tracking-wide">
					{t('intro.6')}
				</p>
			</div>
			<div className="inline-grid grid-cols-2 gap-4 max-w-xs">
				<Button
					isCTA
					onMouseEnter={async () => router.prefetch('/contact')}
					onClick={async () => router.push('/contact')}
				>
					{t('cta.contact')}
				</Button>
				<Button
					onMouseEnter={async () => router.prefetch('/about')}
					onClick={async () => router.push('/about')}
				>
					{t('cta.more')}
				</Button>
			</div>
		</Center>
	);
};

export default Index;
