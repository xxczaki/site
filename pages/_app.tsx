import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from 'next-themes';

import Container from '../components/container';

import 'tailwindcss/tailwind.css';

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	return (
		<ThemeProvider attribute="class">
			<Head>
				<title>Antoni Kepinski</title>
			</Head>
			<Container>
				<main className="flex flex-col m-auto leading max-w-4xl items-start p-5">
					<Component {...pageProps}/>
				</main>
			</Container>
		</ThemeProvider>
	);
};

export default App;
