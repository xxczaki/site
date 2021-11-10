const BackToTop = () => (
	<button
		className="fixed top-4 p-2 pt-3 pb-3 rounded-lg w-40 backdrop-filter backdrop-blur-sm border border-gray-600 hover:border-gray-500 text-center drop-shadow-lg transition-all cursor-pointer"
		onClick={() => {
			window.scrollTo({top: 0, behavior: 'smooth'});
		}}
	>
		<b>Back to top</b>
	</button>
);

export default BackToTop;

