import React from 'react';
import {NextPage} from 'next';

const Index: NextPage<unknown> = () => (
	<section className="flex flex-col gap-12">
		<h1 className="text-4xl font-bold">This page cannot be found.</h1>
		<blockquote
			className="italic m-0 pl-4 border-l-4 border-gray-400 flex flex-col gap-5"
			cite="https://www.opensourceshakespeare.org/views/plays/play_view.php?WorkID=henry6p3&Act=3&Scene=3&Scope=scene"
		>
			<p>Having nothing, nothing can he lose.</p>
			<footer>
				— William Shakespeare
			</footer>
		</blockquote>
	</section>
);

export default Index;
