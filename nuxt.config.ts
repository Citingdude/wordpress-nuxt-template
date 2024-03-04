// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			BASE_URL: "",
			BASE_API_WP: "",
			BASE_API_WC: "",
		},
	},
	modules: ["@nuxtjs/tailwindcss"],
});
