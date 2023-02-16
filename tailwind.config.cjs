/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['/index.html', './src/**/*.{jsx,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				proDisplay: ['SF Pro Display', 'serif'],
			},
		},
	},
	plugins: [],
}
