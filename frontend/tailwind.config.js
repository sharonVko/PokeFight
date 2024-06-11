/** @type {import('tailwindcss').Config} */
export default {
  content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
  theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		}
  },
  plugins: [],
}

