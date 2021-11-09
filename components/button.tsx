import {ButtonHTMLAttributes} from 'react';
import {IconType} from 'react-icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: IconType;
	isCTA?: boolean;
	children: string;
}

const Button = (props: Props) => {
	const {icon, isCTA, children, ...rest} = props;

	return (
		<button
			className={`font-sans font-semibold ${isCTA ? 'bg-violet-600 hover:opacity-90' : 'bg-gray-800 border border-gray-600 hover:border-gray-500'} p-2 rounded-md text-gray-200 transition tracking-wider flex justify-center items-center select-none`}
			style={{maxWidth: '15rem'}}
			type="button"
			{...rest}
		>
			{icon}
			<p className={icon && 'ml-2'}>{children}</p>
		</button>
	);
};

export default Button;
