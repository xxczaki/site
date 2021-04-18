import React, {ReactNode, useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Twitter, GitHub, Linkedin, Key, Sun, Moon} from 'react-feather';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {useTheme} from 'next-themes';

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
	const [mounted, setMounted] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const {resolvedTheme, setTheme} = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

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
				className={`z-10 pt-10 pb-1 mb-10 pl-0 top-0 right-0 left-0 transition border-b ${scrolled ? 'border-gray-400' : 'bg-transparent border-transparent'} sticky w-screen backdrop-filter backdrop-blur-md`}
			>
				<div className="h-0 pb-9 pl-5 max-w-4xl w-full flex items-center justify-between m-auto">
					<Link href="/">
						<Image
							className="cursor-pointer transition-colors flex !p-1 rounded-md mr-8 hover:bg-gray-300 text-lg dark:filter dark:invert"
							src="/images/logo.svg"
							alt="Logo"
							width={45}
							height={45}
						/>
					</Link>
					<nav className="flex items-center justify-between pr-4">
						<NavLink title="Home" href="/"/>
						<NavLink title="Projects" href="https://github.com/xxczaki"/>
						<button
							type="button"
							aria-label="Change theme"
							className="cursor-pointer hover:bg-gray-300 p-1 dark:hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-30 rounded-md"
							disabled={!mounted}
							onClick={() => {
								setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
							}}
						>
							<abbr title="Switch theme">
								{resolvedTheme === 'light' ? (
									<Moon
										size={22}
										aria-label="Moon"
									/>
								) : (
									<Sun
										size={22}
										aria-label="Sun"
									/>
								)}
							</abbr>
						</button>
					</nav>
				</div>
			</header>
			{children}
			<footer className="mb-9 pb-0 pl-6 max-w-4xl flex items-center justify-between text-sm opacity-60 m-auto pt-20 pr-5">
				<p>Antoni Kepinski &copy; {new Date().getFullYear()}</p>
				<div className="flex justify-between w-44">
					<Box href="https://twitter.com/dokwadratu" label="Twitter">
						<abbr title="Twitter">
							<Twitter size={35} className="hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md" aria-label="Twitter"/>
						</abbr>
					</Box>
					<Box href="https://github.com/xxczaki" label="GitHub">
						<abbr title="GitHub">
							<GitHub size={35} className="hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md" aria-label="GitHub"/>
						</abbr>
					</Box>
					<Box href="https://linkedin.com/in/akepinski" label="LinkedIn">
						<abbr title="LinkedIn">
							<Linkedin size={35} className="hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md" aria-label="LinkedIn"/>
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
							<Key size={35} className="hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md" aria-label="PGP Public Key"/>
						</abbr>
					</Box>
				</div>
			</footer>
			<p className="text-center text-sm opacity-70 dark:opacity-50 pb-4 pt-10">🍪 No cookies, no trackers, no analytics.</p>
		</>
	);
};

export default Container;
