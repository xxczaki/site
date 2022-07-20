import {Toaster} from 'react-hot-toast';

interface Props {
	children: React.ReactNode;
}

const Article = ({children}: Props) => (
	<>
		<main className='pt-10 max-w-4xl p-5 grid grid-cols-1 gap-8 relative'>
			{children}
		</main>
		<Toaster toastOptions={{
			style: {
				border: '1px solid #52525B',
				backgroundColor: '#303030',
				color: '#E4E4E7',
			},
			position: 'bottom-right',
		}}/>
	</>
);

export default Article;

