import React, {ReactNode, useState, useEffect, Fragment} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Twitter, GitHub, Linkedin, Key, Sun, Moon, Menu, Home, Code, Settings, X} from 'react-feather';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {useTheme} from 'next-themes';
import {Popover, Transition} from '@headlessui/react';

interface Props {
	children: React.ReactNode;
}

interface BoxProps {
	href: string;
	label: string;
	onClick?: () => void;
	children: ReactNode;
}

const solutions = [
	{
		name: 'Home',
		description: 'Main page with general information',
		href: '/',
		icon: Home
	},
	{
		name: 'Projects',
		description: 'Redirects to my GitHub profile',
		href: 'https://github.com/xxczaki',
		icon: Code,
		isExternal: true
	},
	{
		name: 'Uses',
		description: 'My apps and settings.',
		href: '/uses',
		icon: Settings
	}
];

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
	const [open, setOpen] = useState(false);
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
						<button
							type="button"
							aria-label="Menu"
							className="cursor-pointer hover:bg-gray-300 p-1 dark:hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-30 rounded-md"
							disabled={!mounted}
							onClick={() => {
								setOpen(!open);
							}}
						>
							<abbr title={`${open ? 'Close' : 'Open'} menu`}>
								{open ? <X size={30} aria-hidden="true"/> : <Menu size={30} aria-hidden="true"/>}
							</abbr>
						</button>
					</nav>
				</div>
			</header>
			<Popover className="relative">
				<Transition
					show={open}
					as={Fragment}
					enter="transition ease-out duration-200"
					enterFrom="opacity-0 translate-y-1"
					enterTo="opacity-100 translate-y-0"
					leave="transition ease-in duration-150"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-1"
				>
					<Popover.Panel
						static
						className="fixed z-10 w-screen max-w-sm px-4 -mt-5 left-1/2 transform -translate-x-1/2 sm:px-0 lg:max-w-lg"
					>
						<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="relative grid gap-8 bg-white dark:bg-gray-900 p-7">
								{solutions.map(item => {
									if (item.isExternal) {
										return (
											<a
												key={item.name}
												href={item.href}
												target="_blank"
												rel="noopener noreferrer"
										className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
									>
										<div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
											<item.icon size={35} aria-hidden="true" className="rounded-md bg-gray-100 dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-400"/>
										</div>
										<div className="ml-4">
											<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
												{item.name}
											</p>
											<p className="text-sm text-gray-500 dark:text-gray-300">
												{item.description}
											</p>
										</div>
									</a>
										)
									} else {

										return (
											<Link key={item.name} href={item.href}>
									<a
										className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
									>
										<div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
											<item.icon size={35} aria-hidden="true" className="rounded-md bg-gray-100 dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-400"/>
										</div>
										<div className="ml-4">
											<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
												{item.name}
											</p>
											<p className="text-sm text-gray-500 dark:text-gray-300">
												{item.description}
											</p>
										</div>
									</a>
												</Link>
										)
									}
								})}
							</div>
							<div className="flex p-4 bg-gray-100 dark:bg-gray-800 justify-end w-full">
								<button
									type="button"
									className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
									disabled={!mounted}
									onClick={() => {
										setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
									}}
								>
									<span className="flex items-center">
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
										<span className="text-sm font-medium text-gray-900 dark:text-gray-200 ml-2">
											Switch theme
										</span>
									</span>
								</button>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
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
