import {FiAlertTriangle, FiCheckCircle, FiInfo, FiXCircle} from 'react-icons/fi';

interface Props {
	children: string;
	type?: 'info' | 'warning' | 'error' | 'success' | 'quote';
}

const getColorsFromType = (type: Pick<Props, 'type'>) => {
	switch (type) {
		case 'info':
			return {
				border: 'border-blue-600',
				iconColor: 'text-blue-600',
				icon: FiInfo,
			};
		case 'warning':
			return {
				border: 'border-amber-500',
				iconColor: 'text-amber-500',
				icon: FiAlertTriangle,
			};
		case 'error':
			return {
				border: 'border-red-600',
				iconColor: 'text-red-600',
				icon: FiXCircle,
			};
		case 'success':
			return {
				border: 'border-emerald-500',
				iconColor: 'text-emerald-500',
				icon: FiCheckCircle,
			};
		case 'quote':
			return {
				border: 'border-gray-500',
				iconColor: 'text-gray-500',
				icon: () => null,
			};
		default:
			return {
				border: 'border-blue-600',
				iconColor: 'text-blue-600',
				icon: FiInfo,
			};
	}
};

const InfoBox = (props: Props) => {
	const {children, type} = props;
	// @ts-expect-error Invalid TypeScript error
	const colors = getColorsFromType(type ?? 'info');

	const Icon = colors.icon;

	return (
		<div className="relative">
			<div className={`${colors.border} ${type === 'quote' ? 'italic' : 'not-italic'} bg-gray-900 rounded-md border-l-4 p-6 grid gap-2`}>
				{children}
			</div>
			{type !== 'quote' && (
				<div className="rounded-full bg-gray-1000 w-11 h-11 absolute -top-6 -left-5">
					<Icon size="2.75rem" className={`${colors.iconColor} p-2`}/>
				</div>
			)}
		</div>
	);
};

export default InfoBox;
