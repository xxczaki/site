import {useRouter} from 'next/router';
import Button from './button';

const HomeButtons = () => {
	const router = useRouter();

	return (
		<div className="inline-grid grid-cols-2 gap-4 max-w-xs">
			<Button
				isCTA
				onMouseEnter={async () => router.prefetch('/contact')}
				onClick={async () => router.push('/contact')}
			>
				Get in touch
			</Button>
			<Button
				onMouseEnter={async () => router.prefetch('/about')}
				onClick={async () => router.push('/about')}
			>
				About me
			</Button>
		</div>
	);
};

export default HomeButtons;

