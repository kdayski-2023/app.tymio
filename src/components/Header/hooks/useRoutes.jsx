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
	const footer = [
		{
			label: 'How it works',
			path: 'https://tymio.com',
		},
		{
			label: 'Use cases',
			path: 'https://tymio.com',
		},
		{
			label: 'Safety',
			path: 'https://tymio.com',
		},
		{
			label: 'FAQ',
			path: 'https://tymio.com',
		},
		{
			label: 'Ambassadors',
			path: 'https://tymio.com',
		},
		{
			label: 'White Paper',
			path: 'https://tymio.com',
		},
		{
			label: 'Terms Of Use',
			path: 'https://tymio.com',
		},
	];

	const allRoutes = [...header, ...footer];

	return {
		header,
		footer,
		allRoutes,
	};
};

export default useRoutes;
