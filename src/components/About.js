import scene from '../svg/Scene1.svg';

const About = () => {
	return (
		<section className='bg-secundary w-full '>
			<h5
				className=' flex justify-center items-center font-Lato text-color font-semibold 
                    rounded-lg  backdrop-blur-0 drop-shadow-lg text-lg
                    sm:px-4 sm:pt-14 sm:pb-20 sm:text-3xl'
			>
				About
			</h5>
			<div className='flex justify-evenly text-center p-10'>
				<img src={scene} alt='scene1' className='w-1/6' />
				<p className='text-color-secundary font-Lato w-72 h-24 text-center  text-xl '>
					Hello, I'm Pablo, web-developer based on Ecu. I have some experience in web
					development using some very useful frameworks and libraries and also in vanilla.
				</p>
				<aside className='flex flex-col w-28 h-20 mx-16'>
					<a href='/' className='bg-color-secundary text-color'>
						<box-icon name='github' type='logo'></box-icon>
					</a>
				</aside>
			</div>
		</section>
	);
};

export default About;
