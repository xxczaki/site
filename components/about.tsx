import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {BlurhashCanvas} from 'react-blurhash';
import Tilt from 'react-parallax-tilt';
import {useReducedMotion} from '../hooks/use-reduced-motion';

import Header from './header';
import ExtLink from './extlink';
import getAge from '../utils/get-age';

import me from '../public/images/me.jpg';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap-reverse;
	justify-content: space-between;
	width: 100%;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 1.25em;
	width: 100%;
	max-width: 36rem;
`;

const Tilted = styled(Tilt)`
	@media (min-width: 150px) and (max-width: 891px) {
		display: none;
	}
`;

const Me = styled(Image)`
	user-select: none;
	border-radius: var(--inline-radius);
`;

const Divider = styled.hr`
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
	const shouldReduceMotion = useReducedMotion();

	return (
		<>
			<Container>
				<Box>
					<h1>Hi, my name is Antoni 👋</h1>
					<p>
						Thanks for visiting my site! Below you can find more information about me and projects.
						If you need anything else please just drop me a <ExtLink href="https://twitter.com/dokwadratu"><b>Tweet</b></ExtLink> or <ExtLink href="mailto:a@kepinski.me"><b>email</b></ExtLink> &lt;3
					</p>
				</Box>
				<Tilted tiltMaxAngleX={shouldReduceMotion ? 0 : 10} tiltMaxAngleY={shouldReduceMotion ? 0 : 10}>
					<BlurhashCanvas
						hash="LPE:9w.9GWM}?^%hbdS0Y6o%%2Rk"
						width={32}
						height={32}
						punch={1}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							width: 'calc(100% - 1px)',
							height: 'calc(100% - 12px)',
							borderRadius: 'var(--radius)'
						}}
					/>
					<Me
						src={me}
						draggable={false}
						alt="Selfie made in Switzerland"
						width={260}
						height={260}
						priority={true}
					/>
				</Tilted>
			</Container>
			<Divider/>
			<Header>About</Header>
			<p>
				I&apos;m a {getAge()} years old developer, currently based near Poznań, Poland.
				Since late 2019 I&apos;m helping maintain <ExtLink href="https://github.com/node-fetch/node-fetch">node-fetch</ExtLink>, a lightweight library, which brings Fetch API to Node.js.
				I also maintain a collection of my own open source projects.
			</p>
			<p>When it comes to offline activities, I hugely enjoy travelling, riding a bike and listening to music.</p>
		</>
	);
};

export default About;
