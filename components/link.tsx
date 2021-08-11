import NextLink from 'next/link';

interface Props {
	href: string;
	text: string;
	isExternal?: boolean;
}

const Link = ({href, text, isExternal}: Props) => {
	if (isExternal) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="underline font-medium transition"
				style={{
					textDecorationColor: '#525252',
					textUnderlinePosition: 'under',
					textDecorationThickness: '.15rem',
				}}
			>
				{text}
			</a>
		);
	}

	return (
		<NextLink href={href} passHref>
			<a
				className="underline font-medium transition"
				style={{
					textDecorationColor: '#525252',
					textUnderlinePosition: 'under',
					textDecorationThickness: '.15rem',
				}}
			>
				{text}
			</a>
		</NextLink>
	);
};

export default Link;
