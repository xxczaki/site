import React, {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Twitter, GitHub, Linkedin, Key} from 'react-feather';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

import GlobalStyle from './global-style';
import Logo from './logo';
import Nav from './nav';
import NavLink from './navlink';
import Footer from './footer';

interface Props {
	children: React.ReactNode;
}

const Header = styled.header<{scrolled: boolean}>`
	z-index: 2;
    position: sticky;
    padding: 2.5rem 0;
    top: -1px;
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
	width: 1.8rem;
	height: 1.8rem;

	&:hover {
		background-color: var(--hover);
	}
`;

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
			<GlobalStyle/>
			<Header scrolled={scrolled}>
				<Wrapper>
					<Link href="/">
						<Logo src="/images/logo.svg" alt="Logo" width={55} height={55}/>
					</Link>
					<Nav>
						<NavLink title="Home" href="/"/>
						<NavLink title="Projects" href="/projects"/>
					</Nav>
				</Wrapper>
			</Header>
			{children}
			<Footer>
				<p>Antoni Kepinski &copy; {new Date().getFullYear()}</p>
				<Social>
					<Box href="https://twitter.com/dokwadratu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
						<abbr title="Twitter">
							<Twitter color="var(--text)" size="1.8rem"/>
						</abbr>
					</Box>
					<Box href="https://github.com/xxczaki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
						<abbr title="GitHub">
							<GitHub color="var(--text)" size="1.8rem"/>
						</abbr>
					</Box>
					<Box href="https://linkedin.com/in/akepinski" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
						<abbr title="LinkedIn">
							<Linkedin color="var(--text)" size="1.8rem"/>
						</abbr>
					</Box>
					<Box
						href="/key.asc"
						aria-label="PGP Public Key"
						onClick={() => {
							// eslint-disable-next-line no-alert
							alert('PGP fingerprint: F2D9 43C8 E24D 4C2D 1E35  F603 264B 02F9 7E4E CDE8');
						}}
					>
						<abbr title="PGP Public Key">
							<Key color="var(--text)" size="1.8rem"/>
						</abbr>
					</Box>
				</Social>
			</Footer>
		</>
	);
};

export default Container;
