/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				rose: "hsl(330, 100%, 98%)",
				darkBerry : "hsl(332, 51%, 32%)",
				nut : "hsl(14, 45%, 36%)",
				lightGrey: "hsl(30, 18%, 87%)",
 				

			}
		},
	},
	plugins: [],
}
