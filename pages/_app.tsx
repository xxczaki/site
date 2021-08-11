import React, {useState} from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {Toaster} from 'react-hot-toast';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

import Container from '../components/container';

import '../public/css/tailwind.css';

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	const [color, setColor] = useState('#171717');

	useScrollPosition(({currPos}) => {
		if (currPos.y < -55) {
			setColor('#050505');
		} else {
			setColor('#171717');
		}
	});

	return (
		<>
			<Head>
				<title>Antoni Kępiński</title>
				<meta name="theme-color" content={color} />
			</Head>
			<Script data-api="/_hive" src="/bee.js"/>
			<Container>
				<Component {...pageProps} />
				<Toaster toastOptions={{
					style: {
						border: '1px solid #52525B',
						backgroundColor: '#404040',
						color: '#E4E4E7',
					},
				}}/>
			</Container>
		</>
	);
};

export default App;
