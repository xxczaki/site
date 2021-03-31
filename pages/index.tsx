import React from 'react';
import {NextPage} from 'next';

import About from '../components/about';
import TechStack from '../components/tech-stack';

const Index: NextPage<unknown> = () => (
	<>
		<About/>
		<TechStack/>
	</>
);

export default Index;
