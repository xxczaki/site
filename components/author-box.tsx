import Image from 'next/image';

import photo from '../public/images/me.jpg';

interface Props {
	published: Date;
	readingTime: number;
}

const AuthorInfo = ({published, readingTime}: Props) => (
	<div className="grid gap-2">
		<div className="w-20 hidden 2xl:block">
			<Image
				src={photo}
				alt="Author's photo"
				placeholder="blur"
				className="rounded-full"
				draggable={false}
			/>
		</div>
		<h2 className="text-2xl font-bold">Antoni Kępiński</h2>
		<p className="text-sm pb-4">Full Stack Developer, author of this blog</p>
		<p>✍️ Published: <i>{published.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}</i></p>
		<p>☕ Read it in <i>{readingTime} {readingTime > 1 ? 'minutes' : 'minute'}</i></p>
	</div>
);

const AuthorBox = (props: Props) => (
	<section className="2xl:absolute -right-96 top-10 2xl:max-w-sm grid gap-4">
		<div className={'border-gray-500 bg-gray-900 rounded-md border-l-4 p-6 grid gap-2'}>
			<AuthorInfo {...props}/>
		</div>
	</section>
);

export default AuthorBox;

