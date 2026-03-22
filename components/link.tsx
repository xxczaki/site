import NextLink from 'next/link';

interface Props {
	href?: string;
	text: string;
	isExternal?: boolean;
}

const getRel = (text: string, isExternal?: boolean) => {
	if (isExternal) {
		return 'noopener noreferrer'
	}

	if (text === 'Mastodon') {
		return 'me';
	}
}

const BaseLink = ({isExternal, text, href}: Props) => {
	const rel = getRel(text, isExternal);

	return (
		<a
			href={href}
			target={isExternal ? '_blank' : '_self'}
			rel={rel}
			className='underline font-medium tracking-wide transition decoration-gray-400 hover:decoration-gray-500 dark:decoration-gray-600 dark:hover:decoration-gray-500 cursor-pointer'
			style={{
				textUnderlinePosition: 'from-font',
				textDecorationThickness: '.15rem',
			}}
		>
			{text}
		</a>
	)
};

const Link = ({isExternal, href = '/', text}: Props) => {
	if (isExternal) {
		return <BaseLink href={href} text={text} isExternal/>;
	}

	return (
		<NextLink 
			href={href} 
			className='underline font-medium tracking-wide transition decoration-gray-400 hover:decoration-gray-500 dark:decoration-gray-600 dark:hover:decoration-gray-500 cursor-pointer'
			style={{
				textUnderlinePosition: 'from-font',
				textDecorationThickness: '.15rem',
			}}
		>
			{text}
		</NextLink>
	);
};

export default Link;
