import Cookies from 'js-cookie';
import { MESSAGES } from '../models/messages';
import { WalletStatusService } from '../services';

const convertToQueryParams = (params = {}) => {
	let queryString = '';
	Object.keys(params).forEach((key, index) => {
		if (index === 0) queryString += `?${key}=${params[key]}`;
		else queryString += `&${key}=${params[key]}`;
	});
	return queryString;
};

export const GET = (url = '', params = {}) => {
	return new Promise((resolve, reject) => {
		let address;
		url += convertToQueryParams(params);
		const walletLS = window.localStorage.getItem('wallet');

		if (walletLS && JSON.parse(walletLS)) {
			const jsonWalletLS = JSON.parse(walletLS);
			address = jsonWalletLS.address;
		}
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Direction-Type':
					params.direction || WalletStatusService.state.direction,
				'Session-Token': params.sessionToken || Cookies.get('sessionToken'),
				'User-Address': params.userAddress || address,
			},
		};
		fetch(url, options)
			.then(async (response) => {
				if (response.status === 418) {
					reject(new Error(response.status));
				}
				if (!response.ok) {
					reject(
						new Error(
							`${response.statusText || MESSAGES.FETCH_DATA_ERROR}\n${url}`,
						),
					);
				}

				const json = await response.json();
				resolve(json);
			})
			.catch((e) => {
				reject(new Error(`${e.message}\n${url}`));
			});
	});
};

export const POST = (url = '', data = {}) => {
	return new Promise((resolve, reject) => {
		let address;
		const walletLS = window.localStorage.getItem('wallet');
		if (walletLS && JSON.parse(walletLS)) {
			const jsonWalletLS = JSON.parse(walletLS);
			address = jsonWalletLS.address;
		}
		const options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Direction-Type': data.direction || WalletStatusService.state.direction,
				'Session-Token': data.sessionToken || Cookies.get('sessionToken'),
				'User-Address': data.userAddress || address,
			},
			body: JSON.stringify(data),
		};

		fetch(url, options)
			.then((response) => {
				if (response.status === 418) {
					reject(new Error(response.status));
				}
				if (!response.ok) {
					reject(
						new Error(
							`${
								response.statusText || MESSAGES.POST_DATA_ERROR
							}\n${url}\n${JSON.stringify(data)}`,
						),
					);
				}

				resolve(response.json());
			})
			.catch((e) => {
				reject(new Error(`${e.message}\n${url}`));
			});
	});
};

export const PUT = async (url = '', data = {}) => {
	return new Promise((resolve, reject) => {
		let address;
		const walletLS = window.localStorage.getItem('wallet');
		if (walletLS && JSON.parse(walletLS)) {
			const jsonWalletLS = JSON.parse(walletLS);
			address = jsonWalletLS.address;
		}
		const options = {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Direction-Type': data.direction || WalletStatusService.state.direction,
				'Session-Token': data.sessionToken || Cookies.get('sessionToken'),
				'User-Address': data.userAddress || address,
			},
			body: JSON.stringify(data),
		};
		fetch(url, options)
			.then((response) => {
				if (response.status === 418) {
					reject(new Error(response.status));
				}
				resolve(response.json());
			})
			.catch((e) => {
				reject(new Error(e.message));
			});
	});
};
