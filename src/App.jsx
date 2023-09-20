import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
	SessionService,
	ConfigService,
	MessageDialogService,
} from './services';
import { useSession, useConfig, useBallance } from './hooks';
import { Layout } from './components/_DEPRECATED';

const UIDemo = React.lazy(() => import('./pages/UIDemo/UIDemo'));

const App = () => {
	const { loading: loadingSession, error: errorSession } = useSession();
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
		<Routes>
			<Route path="/" element={<Layout />}>
				{!loadingSession && !loadingConfig && (
					<>
						{/* <Route path="/" element={<MainPage config={config} />} /> */}
						<Route path="/" element={<UIDemo />} />
						<Route path="/ui" element={<UIDemo />} />
						<Route path="*" element={<UIDemo />} />
						{/* <Route path="*" element={<MainPage config={config} />} /> */}
					</>
				)}
			</Route>
		</Routes>
	);
};

export default App;
