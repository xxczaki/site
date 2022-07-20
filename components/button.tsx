import type {ButtonHTMLAttributes} from 'react';
import type {IconType} from 'react-icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: IconType;
	colorScheme?: 'violet' | 'twitter';
	extendWidth?: boolean;
	children: string;
}

const getSchemeStyles = (scheme?: Pick<Props, 'colorScheme'>) => {
	switch (scheme) {
		case 'violet':
			return 'bg-violet-600 hover:opacity-90';
		case 'twitter':
			return 'bg-[#1DA1F2] text-[#14171A] hover:opacity-90 border-[#657786]';
		default:
			return 'bg-gray-800 border border-gray-600 hover:border-gray-500';
	}
};

const Button = (props: Props) => {
	const {icon, colorScheme, extendWidth, children, ...rest} = props;

	return (
		<>
			{/* @ts-expect-error This doesn't matter */}
			<button
				{...rest}
				// @ts-expect-error Invalid error
				className={`font-sans font-semibold ${getSchemeStyles(colorScheme)} p-2 ${extendWidth ? 'px-4' : 'px-2'} rounded-md text-gray-200 transition tracking-wider flex justify-center items-center select-none`}
				style={{maxWidth: '15rem'}}
				type='button'
			>
				{icon}
				<p className={icon && 'ml-2'}>{children}</p>
			</button>
		</>
	);
};

export default Button;
