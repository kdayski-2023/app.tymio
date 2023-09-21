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
	const footer = [];

	const allRoutes = [...header, ...footer];
	return {
		header,
		footer,
		allRoutes,
	};
};

export default useRoutes;
