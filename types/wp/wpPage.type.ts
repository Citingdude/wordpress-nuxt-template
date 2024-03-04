export default interface WpPage {
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
	type: "page";
	link: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
		protected: boolean;
	};
	excerpt: {
		rendered: string;
		protected: boolean;
	};
	author: number;
	featured_media: number;
	parent: number;
	menu_order: number;
	comment_status: "closed";
	ping_status: "open";
	template: string;
	meta: {
		footnotes: string;
	};
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
		"predecessor-version": [
			{
				id: number;
				href: string;
			},
		];
		"wp:attachment": [
			{
				href: string;
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
