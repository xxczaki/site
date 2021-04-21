import React from 'react';
import Image from 'next/image';

interface Props {
	background: string;
	color: string;
	href: string;
	name: string;
	img: string;
}

const Block = ({background, color, href, name, img}: Props) => (
	<a
		className={`flex flex-col items-center justify-evenly rounded-lg ${!color && 'text-gray-800'} no-underline w-56 h-40 transition-opacity hover:opacity-80 hover:shadow text-${color}`}
		style={{background}}
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={`Technology: ${name}`}
	>
		<Image
			src={`/images/logo-${img}.svg`}
			draggable={false}
			alt={`Logo ${name}`}
			// Small fix
			width={name === 'Next.js' ? 100 : 64}
			height={64}
		/>
		<h3 className="font-bold m-0">{name}</h3>
	</a>
);

const TechStack = (): JSX.Element => (
	<section className="grid pt-10 gap-12 w-full">
		<h2 className="text-2xl font-bold">Things I use</h2>
		<div className="overflow-x-scroll overflow-y-hidden h-48">
			<div className="grid gap-4 grid-flow-col">
				<Block
					background="#f0db4f"
					color="black"
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
					name="JavaScript (ES6+)"
					img="javascript"
				/>
				<Block
					background="#3178c6"
					color="white"
					href="https://www.typescriptlang.org/"
					name="TypeScript"
					img="typescript"
				/>
				<Block
					background="#61dafb"
					color="black"
					href="https://reactjs.org/"
					name="React"
					img="react"
				/>
				<Block
					background="black"
					color="white"
					href="https://nextjs.org/"
					name="Next.js"
					img="nextjs"
				/>
				<Block
					background="#663399"
					color="white"
					href="https://www.gatsbyjs.org/"
					name="Gatsby"
					img="gatsby"
				/>
				<Block
					background="#61dafb"
					color="black"
					href="https://reactnative.dev/"
					name="React Native"
					img="react"
				/>
				<Block
					background="#2b2e3b"
					color="white"
					href="https://www.electronjs.org/"
					name="Electron"
					img="electron"
				/>
				<Block
					background="#68a063"
					color="black"
					href="https://nodejs.org/"
					name="Node.js"
					img="nodejs"
				/>
			</div>
		</div>
	</section>
);

export default TechStack;
