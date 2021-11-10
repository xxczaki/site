import {useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {FiArrowUp} from 'react-icons/fi';

const BackToTop = () => {
	const [isUp, setUp] = useState(false);
	const controls = useAnimation();

	useScrollPosition(({currPos}) => {
		if (currPos.y < -450) {
			controls.start('visible');
			setUp(true);
		} else {
			controls.start('hidden');

			setTimeout(() => {
				setUp(false);
			}, 250);
		}
	});

	return (
		<motion.button
			className={`fixed top-0 p-2 rounded-lg w-40 backdrop-filter backdrop-blur-sm border border-gray-600 hover:border-gray-500 text-center drop-shadow-lg cursor-pointer flex justify-evenly items-center ${!isUp && 'hidden'}`}
			onClick={() => {
				window.scrollTo({top: 0, behavior: 'smooth'});
			}}
			initial={'hidden'}
  			animate={controls}
			variants={{
				visible: {y: 16, opacity: 1},
				hidden: {y: 0, opacity: 0},
			}}
			transition={{
				type: 'spring',
			}}
		>
			<FiArrowUp/>
			<b>Back to top</b>
		</motion.button>
	);
};

export default BackToTop;

