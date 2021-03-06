import NavBar from './Navbar';
import background from '../svg/Ellipse.svg';
const Head = () => {
	return (
		<header className='bg-bg min-w-screen min-h-screen'>
			<NavBar />
			<div className='flex justify-center '>
				<section
					className='mt-10 mx-auto max-w-screen-2xl px-8 
				sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-24'
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
				<section className='m-auto p-8 w-2/5 h-2/4'>
					<img
						className='rounded-3xl absoute right-0 z-0 opacity-75'
						src={background}
						alt='background'
					/>
				</section>
				<aside className=' flex flex-col justify-center  xl:max-h-screen xl:mr-16 mb-16'>
					<i className='text-color-secundary text-3xl backdrop-blur-0 drop-shadow-small-lg mb-4  bx bxl-github'></i>
					<i className='text-color-secundary text-3xl backdrop-blur-0 drop-shadow-small-lg mb-4  bx bxl-linkedin-square'></i>
					<i className='text-color-secundary text-3xl backdrop-blur-0 drop-shadow-small-lg mb-4  bx bxl-twitter'></i>
				</aside>
			</div>
		</header>
	);
};

export default Head;
