import React from 'react';
import Image from 'next/image';

import ExtLink from './extlink';

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12">
			<div className="flex justify-between h-full">
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">Hi, I&apos;m Antoni 👋</h1>
					<p>
						Thanks for visiting my site! Below you can find more information about me and my projects.
						If you need anything else please just drop me a <ExtLink href="https://twitter.com/dokwadratu"><b>Tweet</b></ExtLink> or <ExtLink href="mailto:antoni@kepinski.ch"><b>email</b></ExtLink> &lt;3
					</p>
				</div>
				<div className="hidden md:block rounded-md relative overflow-hidden">
					<img
						aria-hidden="true"
						src="/images/me-placeholder.jpg"
						alt=""
						draggable={false}
						width={260}
						height={260}
						loading="eager"
						className="absolute top-0 bottom-0 left-0 right-0 rounded-md object-cover object-center filter blur-sm"
					/>
					<Image
						className="select-none transition-all hover:filter hue-rotate-90 pointer-events-none rounded-md"
						src="/images/me.jpg"
						draggable={false}
						alt="My face"
						width={260}
						height={260}
					/>
				</div>
			</div>
			<h2 className="text-2xl font-bold">About</h2>
			<p>
				I’m a full stack developer and open-source enthusiast.
				Since late 2019 I&apos;m maintaining <ExtLink href="https://github.com/node-fetch/node-fetch">node-fetch</ExtLink>, a lightweight library, which brings Fetch API to Node.js.
				I also maintain a collection of my own open source projects.
				I&apos;m currently in the 2nd year of high school (grade 11), focusing mainly on math, physics and computer science.
			</p>
			<p>I spend my free time riding a bike, listening to <ExtLink href="https://open.spotify.com/playlist/5uSQ5tEGfTf6BAEwNRtsr1?si=ExHFeCz_TSmoQJyxVLu-2Q">classical music</ExtLink> or playing computer games with my friends.</p>
		</section>
	);
};

export default About;
