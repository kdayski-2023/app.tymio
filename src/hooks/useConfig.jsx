import { useEffect, useState } from 'react';
import ConfigService from '../services/config.service';
import MessageDialogService from '../services/message-dialog.service';

const useConfig = () => {
	const [loading, setLoading] = useState(ConfigService.state.loading);
	const [error, setError] = useState(ConfigService.state.error);
	const [config, setConfig] = useState(ConfigService.state.config);

	useEffect(() => {
		let isMounted = true;
		if (isMounted && !config) {
			ConfigService.getConfig();
		}

		const state$ = ConfigService.state$.subscribe((state) => {
			setLoading(state.loading);
			setError(state.error);
			setConfig(state.config);
			if (state.error) {
				MessageDialogService.showError(error);
			}
		});

		return () => {
			isMounted = false;
			state$.unsubscribe();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { error, loading, config };
};

export default useConfig;
