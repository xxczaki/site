import React, {useState} from 'react';
import Link from 'next/link';
import styled, {ThemeProvider} from 'styled-components';
import {Mail, LogoTwitter, LogoGithub, LogoInstagram} from '@styled-icons/ionicons-solid';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {useRecoilState, useRecoilTransactionObserver_UNSTABLE} from 'recoil';

import GlobalStyle from './global-style';
import Logo from './logo';
import Nav from './nav';
import NavLink from './navlink';
import Light from './themes/light';
import Dark from './themes/dark';
import Footer from './footer';

import {themes} from '../utils/themes';
import {_theme} from '../lib/recoil-atoms';

interface Props {
	children: React.ReactNode;
}

const Header = styled.header<{scrolled: boolean}>`
	z-index: 2;
    position: sticky;
    padding: 2.5rem 0;
    top: 0;
	right: 0px;
	left: 0px;
    background-color: ${props => props.scrolled ? 'var(--header)' : 'transparent'};
    backdrop-filter: blur(5px);
    transition: border-bottom 150ms ease 0s, top 250ms ease 0s, background-color 300ms ease 0s;
	border-bottom: 1px solid ${props => props.scrolled ? 'var(--header-border)' : 'transparent'};
	align-items: center;
`;

const Wrapper = styled.div`
	height: 0px;
	margin: 0 auto;
	padding: 0 1.5rem;
	max-width: var(--main-content);
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Social = styled.div`
	display: flex;
	justify-content: space-between;
	width: 12rem;
`;

const Box = styled.a`
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color var(--transition);
	padding: 5px;
	border-radius: var(--inline-radius);
	user-select: none;

	&:hover {
		background-color: var(--hover);
	}
`;

const Container = ({children}: Props): JSX.Element => {
	const [scrolled, setScrolled] = useState(false);
	const [theme, setTheme] = useRecoilState(_theme);

	useScrollPosition(({currPos}) => {
		if (currPos.y <= -20) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}, [scrolled]);

	useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
		const theme = snapshot.getLoadable(_theme).contents;

		localStorage.setItem('theme', theme as 'dark' | 'light');
	});

	return (
		<ThemeProvider theme={themes[theme]}>
			<GlobalStyle/>
			<Header scrolled={scrolled}>
				<Wrapper>
					<Link href="/">
						<Logo title="Logo"/>
					</Link>
					<Nav>
						<NavLink title="Home" href="/"/>
						<NavLink title="Projects" href="/projects"/>
						{theme === 'dark' ? (
							<abbr title="Light mode">
								<Light title="Light mode" onClick={() => setTheme('light')}/>
							</abbr>
						) : (
							<abbr title="Dark mode">
								<Dark title="Dark mode" onClick={() => setTheme('dark')}/>
							</abbr>
						)}
					</Nav>
				</Wrapper>
			</Header>
			{children}
			<Footer>
				<p>Antoni Kepinski &copy; {new Date().getFullYear()}</p>
				<Social>
					<Box href="mailto:a@kepinski.me" target="_blank" rel="noopener noreferrer" aria-label="Email">
						<Mail title="Email" color="var(--text)" size="2rem"/>
					</Box>
					<Box href="https://twitter.com/dokwadratu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
						<LogoTwitter title="Twitter" color="var(--text)" size="2rem"/>
					</Box>
					<Box href="https://github.com/xxczaki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
						<LogoGithub title="GitHub" color="var(--text)" size="2rem"/>
					</Box>
					<Box href="https://instagram.com/akepinski" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
						<LogoInstagram title="Instagram" color="var(--text)" size="2rem"/>
					</Box>
				</Social>
			</Footer>
		</ThemeProvider>
	);
};

export default Container;
