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
const Leaderboard = React.lazy(() => import('./pages/Leaderboard/Leaderboard'));
const IPBlockPage = React.lazy(() => import('./pages/IPBlockPage/IPBlockPage'));

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
		<React.Suspense
			fallback={
				<div
					style={{
						background:
							'linear-gradient(115deg, rgb(28, 16, 47) 0%, rgb(43, 28, 77) 52.09%, rgb(28, 16, 47) 100%)',
						height: '100vh',
						width: '100vw',
					}}
				/>
			}>
			{(errorSession === '418' || errorConfig === '418') && <IPBlockPage />}
			{!loadingSession && !loadingConfig && !errorSession && !errorConfig && (
				<Routes>
					<Route path="/" element={<Layout sessionInfo={sessionInfo} />}>
						<Route path="/" element={<MainPage config={config} />} />
						<Route path="/:ref" element={<MainPage config={config} />} />
						<Route path="/code/:ref" element={<MainPage config={config} />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
						<Route path="*" element={<MainPage config={config} />} />
					</Route>
				</Routes>
			)}
		</React.Suspense>
	);
};

export default App;
