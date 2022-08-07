import type {ButtonHTMLAttributes} from 'react';
import type {IconType} from 'react-icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: IconType;
	children: string;
}

const Button = (props: Props) => {
	const {icon, children, ...rest} = props;

	return (
		<>
			{/* @ts-expect-error This doesn't matter */}
			<button
				{...rest}
				className='font-semibold bg-gray-600 dark:bg-gray-800 border border-gray-900 dark:border-gray-600 hover:opacity-90 dark:hover:border-gray-600 p-2 px-2 rounded-md text-gray-200 transition tracking-wider flex justify-center items-center select-none max-w-[15rem]'
				type='button'
			>
				{icon}
				<p className={icon && 'ml-2'}>{children}</p>
			</button>
		</>
	);
};

export default Button;
