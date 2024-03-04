export default defineNuxtPlugin((nuxtApp) => {
	const { BASE_API_WP } = useRuntimeConfig().public;

	const wpFetch = $fetch.create({
		baseURL: BASE_API_WP,
	});

	return {
		provide: {
			wpFetch,
		},
	};
});
