/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		container: {
			center: true,
			padding: "5vmin",
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
