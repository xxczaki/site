import React from 'react';
import {NextPage} from 'next';

import Main from '../components/main';
import About from '../components/about';
import TechStack from '../components/tech-stack';

const Index: NextPage<unknown> = () => (
	<Main>
		<About/>
		<TechStack/>
	</Main>
);

export default Index;
