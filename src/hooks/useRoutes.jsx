const useRoutes = () => {
	const header = [
		{
			label: 'App',
			path: '/',
		},
		{
			label: 'Profile',
			path: '/profile',
		},
	];
	const burger = [
		{
			label: 'App',
			path: '/',
		},
		{
			label: 'Profile',
			path: '/profile',
		},
		{
			label: 'How it works',
			path: 'http://localhost:5212/how_it_work',
			target: '_blank',
		},
		{
			label: 'Use cases',
			path: 'http://localhost:5212/use_cases',
			target: '_blank',
		},
		{
			label: 'Safety',
			path: 'http://localhost:5212/safety',
			target: '_blank',
		},
		{
			label: 'FAQ',
			path: 'http://localhost:5212/faq',
			target: '_blank',
		},
		{
			label: 'Ambassadors',
			path: 'http://localhost:5212/ambassadors',
			target: '_blank',
		},
		{
			label: 'White Paper',
			path: 'http://localhost:5212/whitepaper',
			target: '_blank',
		},
		{
			label: 'Terms Of Use',
			path: 'https://sell-high.io/terms',
			target: '_blank',
		},
	];
	const media = [
		{
			label: 'DeBank',
			path: 'https://debank.com/official-account/111827',
			target: '_blank',
		},
		{ label: 'Telegram', path: 'https://t.me/tymioapp', target: '_blank' },
		{
			label: 'Twitter',
			path: 'https://twitter.com/TYMIOapp',
			target: '_blank',
		},
		{ label: 'info@Tymio.com', path: 'mailto:info@Tymio.com' },
	];
	const footer = [
		{
			label: 'How it works',
			path: 'http://localhost:5212/how_it_work',
			target: '_blank',
		},
		{
			label: 'Use cases',
			path: 'http://localhost:5212/use_cases',
			target: '_blank',
		},
		{ label: 'Safety', path: 'http://localhost:5212/safety', target: '_blank' },
		{ label: 'FAQ', path: 'http://localhost:5212/faq', target: '_blank' },
		{
			label: 'Ambassadors',
			path: 'http://localhost:5212/ambassadors',
			target: '_blank',
		},
		{
			label: 'White Paper',
			path: 'http://localhost:5212/whitepaper',
			target: '_blank',
		},
		{
			label: 'Terms Of Use',
			path: 'https://sell-high.io/terms',
			target: '_blank',
		},
	];

	const allRoutes = [...header, ...media, ...burger, ...footer];

	return {
		header,
		media,
		burger,
		footer,
		allRoutes,
	};
};

export default useRoutes;
