import React from 'react';
import Image from 'next/image';

import photo from '../public/images/me.jpg';
import signature from '../public/images/signature.svg';

const Signature = () => (
	<section
		className="grid grid-cols-2 w-44"
	>
		<div className="w-20">
			<Image
				src={photo}
				alt="My face"
				placeholder="blur"
				className="rounded-full"
				draggable={false}
			/>
		</div>
		<div className="flex flex-col w-40 justify-evenly items-center">
			<div className="h-12">
				<Image src={signature} alt="Signature"/>
			</div>
			<div>
				<hr className="h-px w-32 bg-gray-300"/>
				<p className="text-gray-400 font-sm">Antoni Kępiński</p>
			</div>
		</div>
	</section>
);

export default Signature;

