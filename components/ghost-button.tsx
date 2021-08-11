import {ButtonHTMLAttributes} from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	shouldHover?: boolean;
}

const GhostButton = (props: Props) => {
	const {shouldHover, ...rest} = props;

	return (
		<button
			{...rest}
			className={`${shouldHover ? 'bg-gray-800 text-gray-50' : 'text-gray-400'} hover:text-gray-50 hover:bg-gray-800 rounded-md w-40 font-bold text-sm`}
		>
			{props.children}
		</button>
	);
};

export default GhostButton;
