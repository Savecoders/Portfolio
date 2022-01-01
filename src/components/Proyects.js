import image1 from '../img/image1.png';
import image3 from '../img/image3.png';
const Proyects = () => {
	return (
		<section className='bg-bg w-full max-h-screen '>
			<h5
				className=' flex justify-center items-center font-Lato text-color font-semibold 
                    rounded-lg  backdrop-blur-0 drop-shadow-lg text-lg
                    sm:px-4 sm:pt-14 sm:pb-20 sm:text-3xl'
			>
				Proyects
			</h5>
			<section className=' flex justify-center'>
				<div class='grid grid-flow-col grid-rows-3 grid-cols-3 gap-8'>
					<div class='transform scale-110 -rotate-6'>
						<img src={image1} alt='' />
					</div>
					<div class='col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15'>
						<img src={image3} alt='' />
					</div>
				</div>
			</section>
		</section>
	);
};
export default Proyects;
