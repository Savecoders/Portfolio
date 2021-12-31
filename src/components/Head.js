import NavBar from './Navbar';
const Head = () => {
	return (
		<header className='bg-bg w-screen h-screen'>
			<NavBar />
			<section
				className='mt-10 mx-auto max-w-screen-2xl px-8 
											sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24'
			>
				<h4 className='font-Lato py-6 text-blue text-3xl'>Hi, I'm</h4>
				<h2
					className='font-Lato font-semibold text-color drop-shadow-small-lg 
											text-7xl py-5'
				>
					Pablo Pincay
				</h2>
				<h3 className='font-Lato py-6 text-blue text-4xl'>Frontend Developer</h3>

				<button className='bg-cyan text-color-secundary w-40 h-12 text-xl font-Lato rounded-md mt-5'>
					Download CV
				</button>
			</section>
			<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
				<img
					className='h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full opacity-20'
					src='https://cdn.devdojo.com/tails/images/gradient-blob.svg'
					alt=''
				/>
			</div>
		</header>
	);
};

export default Head;
