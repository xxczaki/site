import React from 'react';
import {IconType} from 'react-icons';

interface Props {
	icon: IconType;
	title: string;
	description: string | JSX.Element;
}

const Item = ({icon, title, description}: Props) => {
	return (
		<div className="grid gap-2">
			<ul className="flex items-center gap-4">
				{icon}
				<p>{title}</p>
			</ul>
			<p className="text-sm text-gray-400">{description}</p>
		</div>
	);
};

export default Item;
