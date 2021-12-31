module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				lg: '3px 3px 3px rgba(104, 119, 200, 0.8)',
				'small-lg': '2px 2px 2px rgba(104, 119, 200, 0.5)',
			},
		},
		colors: {
			bg: '#12121A',
			color: '#FEFEFE',
			'color-secundary': '#FDFDFD',
			secundary: '#14131D',
			blue: '#89AEFF',
			cyan: '#6277D7',
		},
		fontFamily: {
			Lato: ['Lato', 'sans-serif'],
			Raleway: ['Raleway', 'sans-serif'],
		},
	},
	plugins: [],
};
