const NavBar = () => {
	return (
		<>
			<nav className='font-Raleway py-6 flex justify-center items-center space-x-6 sm:space-x-14'>
				{[
					['About', '/dashboard'],
					['Skills', '/team'],
					['Proyect', '/projects'],
					['Contact', '/reports'],
				].map(([title, url]) => (
					<a
						href={url}
						key={title}
						className=' text-color font-semibold rounded-lg  backdrop-blur-0 drop-shadow-lg 
												py-2 text-lg sm:px-4 sm:py-6 sm:text-2xl'
					>
						{title}
					</a>
				))}
			</nav>
		</>
	);
};

export default NavBar;
