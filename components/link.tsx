import NextLink from 'next/link';
import {forwardRef} from 'react';

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

const BaseLink = forwardRef(({isExternal, text, ...rest}: Props, ref) => {
	const rel = getRel(text, isExternal);

	return (
		<a
			target={isExternal ? '_blank' : '_self'}
			rel={rel}
			className='underline font-medium tracking-wide transition decoration-gray-400 hover:decoration-gray-500 dark:decoration-gray-600 dark:hover:decoration-gray-500 cursor-pointer'
			style={{
				textUnderlinePosition: 'from-font',
				textDecorationThickness: '.15rem',
			}}
			// @ts-expect-error Legacy ref
			ref={ref}
			{...rest}
		>
			{text}
		</a>
	)
});

const Link = ({isExternal, href = '/', text}: Props) => {
	if (isExternal) {
		return <BaseLink href={href} text={text} isExternal/>;
	}

	return (
		<NextLink href={href} passHref>
			<BaseLink text={text}/>
		</NextLink>
	);
};

export default Link;
