import {motion, useAnimation} from 'framer-motion';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {FiArrowUp} from 'react-icons/fi';

const BackToTop = () => {
	const controls = useAnimation();

	useScrollPosition(async ({currPos}) => {
		await (currPos.y < -450 ? controls.start('visible') : controls.start('hidden'));
	});

	return (
		<motion.button
			className='fixed top-0 p-2 rounded-lg w-40 backdrop-filter bg-[#ffffffaa] dark:bg-[#171717aa] backdrop-blur-sm border border-gray-600 hover:border-gray-500 text-center drop-shadow-lg cursor-pointer flex justify-evenly items-center z-10'
			onClick={() => {
				window.scrollTo({top: 0, behavior: 'smooth'});
			}}
			initial='hidden'
			animate={controls}
			variants={{
				visible: {y: 16, opacity: 1, display: 'flex'},
				hidden: {
					y: 0,
					opacity: 0,
					transitionEnd: {
						display: 'none',
					},
				},
			}}
			transition={{
				type: 'spring',
			}}
		>
			<FiArrowUp/>
			<p className='font-medium'>Back to top</p>
		</motion.button>
	);
};

export default BackToTop;

