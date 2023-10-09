import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
	SessionService,
	ConfigService,
	MessageDialogService,
} from './services';
import { useSession, useConfig, useBallance } from './hooks';
import { Layout } from './components/_DEPRECATED';

const ProfilePage = React.lazy(() => import('./pages/ProfilePage/ProfilePage'));
const MainPage = React.lazy(() => import('./pages/MainPage/MainPage'));

const App = () => {
	const {
		loading: loadingSession,
		error: errorSession,
		sessionInfo,
	} = useSession();
	const { loading: loadingConfig, error: errorConfig, config } = useConfig();
	useBallance();

	useEffect(() => {
		SessionService.getSession();
		ConfigService.getConfig();
	}, []);

	useEffect(() => {
		if (errorSession || errorConfig)
			MessageDialogService.showError(errorSession || errorConfig);
	}, [errorSession, errorConfig]);

	return (
		<React.Suspense fallback={<div></div>}>
			{!loadingSession && !loadingConfig && (
				<Routes>
					<Route path="/" element={<Layout sessionInfo={sessionInfo} />}>
						<Route path="/" element={<MainPage config={config} />} />
						<Route path="/code/:ref" element={<MainPage config={config} />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="*" element={<MainPage config={config} />} />
					</Route>
				</Routes>
			)}
		</React.Suspense>
	);
};

export default App;
