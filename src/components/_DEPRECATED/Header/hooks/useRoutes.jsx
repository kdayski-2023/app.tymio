const useRoutes = () => {
  const main = {
    title: 'Main',
    path: '/',
  };
  const routes = [
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'FAQ',
      path: '/faq',
    },
    {
      title: 'Profile',
      path: '/profile',
    },
  ];

  const allRoutes = [main, ...routes];
  return {
    main,
    routes,
    allRoutes,
  };
};

export default useRoutes;
