import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {setup} from 'goober';
import {prefix} from 'goober/prefixer';

import Container from '../components/container';

setup(React.createElement, prefix);

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	return (
		<>
			<Head>
				<title>Antoni Kepinski</title>
			</Head>
			<Container>
				<Component {...pageProps}/>
			</Container>
		</>
	);
};

export default App;
