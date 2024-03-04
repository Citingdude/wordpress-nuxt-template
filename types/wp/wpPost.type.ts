export default interface WpPost {
	id: number;
	date: string;
	date_gmt: string;
	guid: {
		rendered: string;
	};
	modified: string;
	modified_gmt: string;
	slug: string;
	status: "publish";
	type: "post";
	link: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
		protected: false;
	};
	excerpt: {
		rendered: string;
		protected: boolean;
	};
	author: number;
	featured_media: number;
	comment_status: "open";
	ping_status: "open";
	sticky: boolean;
	template: string;
	format: string;
	meta: {
		footnotes: string;
	};
	categories: number[];
	tags: number[];
	_links: {
		self: [
			{
				href: string;
			},
		];
		collection: [
			{
				href: string;
			},
		];
		about: [
			{
				href: string;
			},
		];
		author: [
			{
				embeddable: boolean;
				href: string;
			},
		];
		replies: [
			{
				embeddable: boolean;
				href: string;
			},
		];
		"version-history": [
			{
				count: number;
				href: string;
			},
		];
		"wp:attachment": [
			{
				href: string;
			},
		];
		"wp:term": [
			{
				taxonomy: "category";
				embeddable: boolean;
				href: "http://wordpress.vibefusion.be/wp-json/wp/v2/categories?post=1";
			},
			{
				taxonomy: "post_tag";
				embeddable: boolean;
				href: "http://wordpress.vibefusion.be/wp-json/wp/v2/tags?post=1";
			},
		];
		curies: [
			{
				name: "wp";
				href: "https://api.w.org/{rel}";
				templated: boolean;
			},
		];
	};
}
