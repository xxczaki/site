import React from 'react';
import {styled} from 'goober';
import Image from 'next/image';

import Header from './header';
import ExtLink from './extlink';

const Container = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	gap: 1rem;
`;

const Box = styled('div')`
	display: flex;
	flex-direction: column;
	padding-right: 1.25em;
	width: 100%;
	max-width: 36rem;
	justify-content: center;
`;

const ImageBox = styled('div')`
	@media (max-width: 950px) {
		display: none;
	}
`;

const Cover = styled('div')`
	@media (max-width: 980px) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
`;

const Me = styled(Image)`
	user-select: none;
	border-radius: var(--inline-radius);
	transition: all var(--transition-slow);

	&:hover {
		filter: hue-rotate(90deg);
	}
`;

const Divider = styled('hr')`
	border: none;
	padding: var(--gap-double);

	&::after {
		content: "• • •";
		color: var(--light-accent);
		font-size: 24px;
		letter-spacing: 12px;
	}
`;

const About = (): JSX.Element => {
	return (
		<>
			<Container>
				<Box>
					<h1>Hi, my name is Antoni 👋</h1>
					<p>
						Thanks for visiting my site! Below you can find more information about me and my projects.
						If you need anything else please just drop me a <ExtLink href="https://twitter.com/dokwadratu"><b>Tweet</b></ExtLink> or <ExtLink href="mailto:antoni@kepinski.ch"><b>email</b></ExtLink> &lt;3
					</p>
				</Box>
				<ImageBox>
					<Me
						priority
						src="/images/me.jpg"
						draggable={false}
						alt="My face"
						width={260}
						height={260}
					/>
				</ImageBox>
			</Container>
			<Divider/>
			<Header>About</Header>
			<p>
				Hey, I’m Antoni. I’m a full stack developer and open-source enthusiast.
				Since late 2019 I&apos;m maintaining <ExtLink href="https://github.com/node-fetch/node-fetch">node-fetch</ExtLink>, a lightweight library, which brings Fetch API to Node.js.
				I also maintain a collection of my own open source projects.
				I&apos;m currently in the 2nd year of high school (grade 11), focusing mainly on math, physics and computer science.
			</p>
			<p>I spend my free time riding a bike, listening to <ExtLink href="https://open.spotify.com/playlist/5uSQ5tEGfTf6BAEwNRtsr1?si=ExHFeCz_TSmoQJyxVLu-2Q">classical music</ExtLink> or playing computer games with my friends.</p>
		</>
	);
};

export default About;
