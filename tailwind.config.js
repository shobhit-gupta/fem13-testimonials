const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '375px',
			...defaultTheme.screens
		},
		extend: {
			colors: {
				moderateViolet: 'hsl(263, 55%, 52%)',
				veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
				veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
				lightGray: 'hsl(0, 0%, 81%)',
				lightGrayishBlue: 'hsl(210, 46%, 95%)'
			},
			fontFamily: {
				sans: ['Barlow Semi Condensed', 'sans-serif']
			},
			fontSize: {
				xs: '0.6875rem',
				sm: '0.8125rem'
			}
		}
	},
	plugins: []
};
