import React from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';

import Center from '../components/center';
import Link from '../components/link';
import Button from '../components/button';

const Index: NextPage<unknown> = () => {
	const router = useRouter();

	return (
		<Center>
			<div className="grid gap-5">
				<p className="text-lg text-gray-200 leading-8 tracking-wide">
					Hey, I'm Antoni! I'm a developer, <Link href="https://github.com/xxczaki" isExternal text="open source maintainer"/>, and <Link href="https://parsify.app" isExternal text="indie hacker"/>. Right now I'm a full stack engineer at <Link href="https://mypolitics.eu" isExternal text="myPolitics"/>.
				</p>
				<p className="text-lg text-gray-200 leading-8 tracking-wide">
					Besides that I'm still a student &mdash; currently in grade 12 of high school, focusing on math, physics, and computer science.
				</p>
			</div>
			<div className="inline-grid grid-cols-2 gap-4 max-w-xs">
				<Button
					isCTA
					onMouseEnter={async () => router.prefetch('/contact')}
					onClick={async () => router.push('/contact')}
				>
					Get in touch
				</Button>
				<Button
					onMouseEnter={async () => router.prefetch('/about')}
					onClick={async () => router.push('/about')}
				>
					About me
				</Button>
			</div>
		</Center>
	);
};

export default Index;
