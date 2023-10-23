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
			path: 'http://tymio.com/how_it_work',
			target: '_blank',
		},
		{
			label: 'Use cases',
			path: 'http://tymio.com/use_cases',
			target: '_blank',
		},
		{
			label: 'Safety',
			path: 'http://tymio.com/safety',
			target: '_blank',
		},
		{
			label: 'FAQ',
			path: 'http://tymio.com/faq',
			target: '_blank',
		},
		{
			label: 'Ambassadors',
			path: 'http://tymio.com/ambassadors',
			target: '_blank',
		},
		{
			label: 'White Paper',
			path: 'http://tymio.com/whitepaper',
			target: '_blank',
		},
		{
			label: 'Terms Of Use',
			path: 'https://app.tymio.com/terms',
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
			path: 'http://tymio.com/how_it_work',
			target: '_blank',
		},
		{
			label: 'Use cases',
			path: 'http://tymio.com/use_cases',
			target: '_blank',
		},
		{
			label: 'Safety',
			path: 'http://tymio.com/safety',
			target: '_blank',
		},
		{ label: 'FAQ', path: 'http://tymio.com/faq', target: '_blank' },
		{
			label: 'Ambassadors',
			path: 'http://tymio.com/ambassadors',
			target: '_blank',
		},
		{
			label: 'White Paper',
			path: 'http://tymio.com/whitepaper',
			target: '_blank',
		},
		{
			label: 'Terms Of Use',
			path: 'https://tymio.com/terms',
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
