import React, {ReactNode, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Twitter, GitHub, Linkedin, Key} from 'react-feather';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

import NavLink from './navlink';

interface Props {
	children: React.ReactNode;
}

interface BoxProps {
	href: string;
	label: string;
	onClick?: () => void;
	children: ReactNode;
}

const Box = ({href, label, onClick, children}: BoxProps) => (
	<a
		target="_blank"
		rel="noopener noreferrer"
		href={href}
		aria-label={label}
		className="items-center justify-center cursor-pointer transition-colors rounded-md select-none w-7 h-7"
		onClick={onClick}
	>
		{children}
	</a>
);

const Container = ({children}: Props): JSX.Element => {
	const [scrolled, setScrolled] = useState(false);

	useScrollPosition(({currPos}) => {
		if (currPos.y <= -20) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}, [scrolled]);

	return (
		<>
			<header
				className={`z-10 pt-10 pb-1 mb-10 pl-0 top-0 right-0 left-0 transition border-b ${scrolled ? 'bg-gray-800 bg-opacity-70 border-gray-400' : 'bg-transparent border-transparent'} sticky w-screen`}
				style={{backdropFilter: 'blur(5px)'}}
			>
				<div className="h-0 pb-9 pl-5 max-w-4xl w-full flex items-center justify-between m-auto">
					<Link href="/">
						<Image
							className="cursor-pointer transition-colors flex !p-1 rounded-md mr-8 hover:bg-gray-700 text-lg"
							src="/images/logo.svg"
							alt="Logo"
							width={45}
							height={45}
						/>
					</Link>
					<nav className="flex items-center justify-between pr-4">
						<NavLink title="Home" href="/"/>
						<NavLink title="Projects" href="https://github.com/xxczaki"/>
					</nav>
				</div>
			</header>
			{children}
			<footer className="mb-9 pb-0 pl-6 max-w-4xl flex items-center justify-between text-sm opacity-50 m-auto pt-20 pr-5">
				<p>Antoni Kepinski &copy; {new Date().getFullYear()}</p>
				<div className="flex justify-between w-44">
					<Box href="https://twitter.com/dokwadratu" label="Twitter">
						<abbr title="Twitter">
							<Twitter size={35} className="hover:bg-gray-700 p-1 rounded-md"/>
						</abbr>
					</Box>
					<Box href="https://github.com/xxczaki" label="GitHub">
						<abbr title="GitHub">
							<GitHub size={35} className="hover:bg-gray-700 p-1 rounded-md"/>
						</abbr>
					</Box>
					<Box href="https://linkedin.com/in/akepinski" label="LinkedIn">
						<abbr title="LinkedIn">
							<Linkedin size={35} className="hover:bg-gray-700 p-1 rounded-md"/>
						</abbr>
					</Box>
					<Box
						href="/key.asc"
						label="PGP Public Key"
						onClick={() => {
							// eslint-disable-next-line no-alert
							alert('PGP fingerprint:\n F2D9 43C8 E24D 4C2D 1E35 F603 264B 02F9 7E4E CDE8');
						}}
					>
						<abbr title="PGP Public Key">
							<Key size={35} className="hover:bg-gray-700 p-1 rounded-md"/>
						</abbr>
					</Box>
				</div>
			</footer>
			<p className="text-center text-sm opacity-50 pb-4 pt-10">🍪 No cookies, no trackers, no analytics.</p>
		</>
	);
};

export default Container;
