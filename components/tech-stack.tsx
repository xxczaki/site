import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Header from './header';

interface Props {
	background: string;
	color?: string;
}

const Section = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	width: 100%;
	height: 10em;

	::-webkit-scrollbar {
		width: 0px;
		background-color: rgba(255, 255, 255, 0.1);
		height: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #fff;
		height: 2px;
	}

	::-webkit-scrollbar-track {
		background-color: rgba(255, 255, 255, 0.05);
		height: 4px;
	}
`;

const Wrapper = styled.div`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, 1fr);
	grid-auto-flow: column;
`;

const Block = styled.a<Props>`
	background: ${props => props.background};
	color: ${props => props.color ?? '#121212'};
    display: flex;
	flex-direction: column;
    width: 165px;
    height: 100px;
    padding: 20px;
    flex: 0 0 auto;
    border-bottom-style: none;
    border-radius: var(--radius);
    transition: all 200ms ease-in-out;
	text-decoration: none;
	user-select: none;
	align-items: center;

	&:hover {
		opacity: 0.8;
    	box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
	}
`;

const Heading = styled.h3`
	font-size: 1em;
	text-align: center;
	margin-top: .5rem;
`;

const TechStack = (): JSX.Element => (
	<>
		<Header>Things I use</Header>
		<Section>
			<Wrapper>
				<Block background="#f0db4f" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/" target="_blank" rel="noopener noreferrer" aria-label="JavaScript">
					<Image
						src="/images/logo-javascript.svg"
						draggable={false}
						alt="JavaScript"
						width={65}
						height={65}
					/>
					<Heading>JavaScript (ES6+)</Heading>
				</Block>
				<Block background="#3178c6" color="#fff" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" aria-label="TypeScript">
					<Image
						src="/images/logo-typescript.svg"
						draggable={false}
						alt="TypeScript"
						width={65}
						height={65}
					/>
					<Heading>TypeScript</Heading>
				</Block>
				<Block background="#61dafb" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="React">
					<Image
						src="/images/logo-react.svg"
						draggable={false}
						alt="React"
						width={65}
						height={65}
					/>
					<Heading>React</Heading>
				</Block>
				<Block background="#000" color="#fff" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Next.js">
					<Image
						src="/images/logo-nextjs.svg"
						draggable={false}
						alt="Next.js"
						width={100}
						height={65}
					/>
					<Heading>Next.js</Heading>
				</Block>
				<Block background="#663399" color="#fff" href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Gatsby">
					<Image
						src="/images/logo-gatsby.svg"
						draggable={false}
						alt="Gatsby"
						width={65}
						height={65}
					/>
					<Heading>Gatsby</Heading>
				</Block>
				<Block background="#61dafb" href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" aria-label="React Native">
					<Image
						src="/images/logo-react.svg"
						draggable={false}
						alt="React Native"
						width={65}
						height={65}
					/>
					<Heading>React Native</Heading>
				</Block>
				<Block background="#2b2e3b" color="#fff" href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Electron">
					<Image
						src="/images/logo-electron.svg"
						draggable={false}
						alt="Electron"
						width={65}
						height={65}
					/>
					<Heading>Electron</Heading>
				</Block>
				<Block background="#68A063" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" aria-label="Node.js">
					<Image
						src="/images/logo-nodejs.svg"
						draggable={false}
						alt="Node.js"
						width={65}
						height={65}
					/>
					<Heading>Node.js</Heading>
				</Block>
				<Block background="#dea584" href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer" aria-label="Rust">
					<Image
						src="/images/logo-rust.svg"
						draggable={false}
						alt="Rust"
						width={65}
						height={65}
					/>
					<Heading>Rust</Heading>
				</Block>
				<Block background="#654ff0" color="#fff" href="https://webassembly.org/" target="_blank" rel="noopener noreferrer" aria-label="WebAssembly">
					<Image
						src="/images/logo-wasm.svg"
						draggable={false}
						alt="WebAssembly"
						width={65}
						height={65}
					/>
					<Heading>WebAssembly</Heading>
				</Block>
			</Wrapper>
		</Section>
	</>
);

export default TechStack;
