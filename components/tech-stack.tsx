import React from 'react';
import Image from 'next/image';
import {styled} from 'goober';

import Header from './header';

interface Props {
	background: string;
	color?: string;
}

const Section = styled('div')`
	overflow-x: scroll;
	overflow-y: hidden;
	width: 100%;
	height: 12rem;

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

const Wrapper = styled('div')`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, 1fr);
	grid-auto-flow: column;
`;

const Block = styled('a')<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: var(--radius);
    background-color: ${props => props.background};
    color: ${props => props.color ?? 'black'};
    text-decoration: none;
    width: 13rem;
    height: 10rem;
    transition: opacity var(--transition);

    h3 {
        margin: 0;
    }

    &:hover {
        opacity: .8;
        box-shadow: 0px 1px 20px var(--accent);
    }
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
						width={64}
						height={64}
					/>
					<h3>JavaScript (ES6+)</h3>
				</Block>
				<Block background="#3178c6" color="#fff" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" aria-label="TypeScript">
					<Image
						src="/images/logo-typescript.svg"
						draggable={false}
						alt="TypeScript"
						width={64}
						height={64}
					/>
					<h3>TypeScript</h3>
				</Block>
				<Block background="#61dafb" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="React">
					<Image
						src="/images/logo-react.svg"
						draggable={false}
						alt="React"
						width={64}
						height={64}
					/>
					<h3>React</h3>
				</Block>
				<Block background="#000" color="#fff" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Next.js">
					<Image
						src="/images/logo-nextjs.svg"
						draggable={false}
						alt="Next.js"
						width={100}
						height={64}
					/>
					<h3>Next.js</h3>
				</Block>
				<Block background="#663399" color="#fff" href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Gatsby">
					<Image
						src="/images/logo-gatsby.svg"
						draggable={false}
						alt="Gatsby"
						width={64}
						height={64}
					/>
					<h3>Gatsby</h3>
				</Block>
				<Block background="#61dafb" href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" aria-label="React Native">
					<Image
						src="/images/logo-react.svg"
						draggable={false}
						alt="React Native"
						width={64}
						height={64}
					/>
					<h3>React Native</h3>
				</Block>
				<Block background="#2b2e3b" color="#fff" href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Electron">
					<Image
						src="/images/logo-electron.svg"
						draggable={false}
						alt="Electron"
						width={64}
						height={64}
					/>
					<h3>Electron</h3>
				</Block>
				<Block background="#68A063" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" aria-label="Node.js">
					<Image
						src="/images/logo-nodejs.svg"
						draggable={false}
						alt="Node.js"
						width={64}
						height={64}
					/>
					<h3>Node.js</h3>
				</Block>
				<Block background="#dea584" href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer" aria-label="Rust">
					<Image
						src="/images/logo-rust.svg"
						draggable={false}
						alt="Rust"
						width={64}
						height={64}
					/>
					<h3>Rust</h3>
				</Block>
				<Block background="#654ff0" color="#fff" href="https://webassembly.org/" target="_blank" rel="noopener noreferrer" aria-label="WebAssembly">
					<Image
						src="/images/logo-wasm.svg"
						draggable={false}
						alt="WebAssembly"
						width={64}
						height={64}
					/>
					<h3>WebAssembly</h3>
				</Block>
			</Wrapper>
		</Section>
	</>
);

export default TechStack;
