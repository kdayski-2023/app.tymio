import WalletService from './wallet.service';
import ERC20Abi from '../abi/ERC20.json';
import { convertFloatToBnString } from '../lib/lib';

class Web3Service {
	constructor() {
		this.wallet$ = WalletService.state$.subscribe((state) => {
			this.walletState = state;
		});
	}

	checkNetwork = async (networkId) => {
		if (this.walletState && this.walletState.connected) {
			if (this.walletState.chainId !== networkId) {
				try {
					await WalletService.changeNetwork(networkId);
				} catch (e) {
					throw new Error(e.message);
				}
			}
		}
	};

	depositUSDC = async (data, networkId, config) => {
		if (this.walletState && this.walletState.connected) {
			await this.checkNetwork(networkId);
			try {
				return await new Promise(async (resolve, reject) => {
					try {
						const { PAYOUT_CONTRACT_ADDRESS, WITHDRAWAL_TOKEN_ADDRESS } =
							config;
						const { amount: rawAmount, price } = data;
						const amount = Number(rawAmount) * Number(price);
						const contract = new WalletService.web3.eth.Contract(
							ERC20Abi,
							WITHDRAWAL_TOKEN_ADDRESS[networkId],
							{ from: this.walletState.address },
						);
						const decimals = (
							await contract.methods.decimals().call()
						).toString();
						const value = convertFloatToBnString(amount, decimals);

						let gas, gasPrice;
						try {
							gas = (
								await contract.methods
									.transfer(PAYOUT_CONTRACT_ADDRESS[networkId], value)
									.estimateGas({ from: this.walletState.address })
							).toString();
						} catch (e) {
							if (amount > WalletService.state.balanceUSDC) {
								reject(new Error('You have not enough tokens on your balance'));
								return;
							}
						}
						try {
							gasPrice =
								networkId === 42161
									? WalletService.web3.utils.toWei('0.1', 'gwei').toString()
									: undefined;
						} catch (e) {
							console.log('Unable to count gasPrice');
						}

						const transferData = contract.methods
							.transfer(PAYOUT_CONTRACT_ADDRESS[networkId], value)
							.encodeABI();

						WalletService.web3.eth
							.sendTransaction({
								to: WITHDRAWAL_TOKEN_ADDRESS[networkId],
								data: transferData,
								from: this.walletState.address,
								gas,
								gasPrice,
							})
							.on('transactionHash', (hash) => {
								console.log({ hash });
								resolve(hash);
							})
							.on('error', (error) => {
								console.log({ error });
								reject(error);
							})
							.catch((error) => {
								console.log({ error });
								reject(error);
							});
					} catch (e) {
						reject(new Error(e.message.split('{')[0]));
					}
				});
			} catch (e) {
				throw e;
			}
		}
	};

	depositCustom = async (data, networkId, config) => {
		if (this.walletState && this.walletState.connected) {
			await this.checkNetwork(networkId);
			try {
				return await new Promise(async (resolve, reject) => {
					try {
						const { PAYOUT_CONTRACT_ADDRESS } = config;
						const { amount: rawAmount, tokenAddress } = data;
						const amount = Number(rawAmount);

						const contract = new WalletService.web3.eth.Contract(
							ERC20Abi,
							tokenAddress,
							{ from: this.walletState.address },
						);
						const decimals = (
							await contract.methods.decimals().call()
						).toString();
						const value = convertFloatToBnString(amount, decimals);

						let gas, gasPrice;
						try {
							gas = (
								await contract.methods
									.transfer(PAYOUT_CONTRACT_ADDRESS[networkId], value)
									.estimateGas({ from: this.walletState.address })
							).toString();
						} catch (e) {
							if (amount > WalletService.state.balance) {
								reject(new Error('You have not enough tokens on your balance'));
								return;
							}
						}
						try {
							gasPrice =
								networkId === 42161
									? WalletService.web3.utils.toWei('0.1', 'gwei').toString()
									: undefined;
						} catch (e) {
							console.log('Unable to count gasPrice');
						}

						const transferData = contract.methods
							.transfer(PAYOUT_CONTRACT_ADDRESS[networkId], value)
							.encodeABI();

						WalletService.web3.eth
							.sendTransaction({
								to: tokenAddress,
								data: transferData,
								from: this.walletState.address,
								gas,
								gasPrice,
							})
							.on('transactionHash', (hash) => {
								console.log({ hash });
								resolve(hash);
							})
							.on('error', (error) => {
								console.log({ error });
								reject(error);
							})
							.catch((error) => {
								console.log({ error });
								reject(error);
							});
					} catch (e) {
						reject(new Error(e.message.split('{')[0]));
					}
				});
			} catch (e) {
				throw e;
			}
		}
	};

	depositETH = async (data, networkId, config) => {
		if (this.walletState && this.walletState.connected) {
			await this.checkNetwork(networkId);
			try {
				const { amount, tokenAddress, tokenSymbol } = data;

				const res = await this.#createTokenRequest({
					amount,
					tokenAddress,
					tokenSymbol,
					networkId,
					config,
				});
				return res;
			} catch (e) {
				throw e;
			}
		}
	};

	deposit = async (data, networkId, direction, config) => {
		try {
			switch (direction) {
				case 'sell':
					if (data.tokenSymbol === 'ETH') {
						return await this.depositETH(data, networkId, config);
					} else {
						return await this.depositCustom(data, networkId, config);
					}
				case 'buy':
					return await this.depositUSDC(data, networkId, config);
				default:
					break;
			}
		} catch (e) {
			throw e;
		}
	};

	getFeePrice = async (estimated_delivery_price, direction) => {
		let gasAmount = 0;
		switch (direction) {
			case 'sell':
				gasAmount = 22000;
				break;
			case 'buy':
				gasAmount = 48525;
				break;
			default:
				break;
		}
		if (!gasAmount) return 0;
		const gasPrice = await WalletService.web3.eth.getGasPrice();
		const fee = gasPrice * gasAmount;
		const eth = WalletService.web3.utils.fromWei(`${fee}`, 'ether');
		const feePrice = estimated_delivery_price * eth;
		return feePrice;
	};

	#createTokenRequest = async (data) => {
		const { amount, tokenSymbol, networkId, config } = data;
		const { PAYOUT_CONTRACT_ADDRESS, CHAIN_GAS_LIMITS } = config;
		const from = this.walletState.address;
		const to = PAYOUT_CONTRACT_ADDRESS[networkId];
		const value = WalletService.web3.utils.toWei(amount, 'ether').toString();
		const gas = CHAIN_GAS_LIMITS[networkId][tokenSymbol];
		let gasPrice;

		try {
			gasPrice = await WalletService.web3.eth.getGasPrice();
		} catch (error) {
			console.log(error);
		}

		if (networkId === 42161)
			gasPrice = WalletService.web3.utils.toWei('0.1', 'gwei').toString();
		if (networkId === 421613)
			gasPrice = WalletService.web3.utils.toWei('10', 'gwei').toString();

		return new Promise((resolve, reject) => {
			console.log({ from, to, value, gas, gasPrice });
			WalletService.web3.eth
				.sendTransaction({
					from,
					to,
					value,
					gas,
					gasPrice,
				})
				.on('transactionHash', (hash) => {
					console.log({ hash });
					resolve(hash);
				})
				.on('error', (error) => {
					console.log({ error });
					reject(error);
				})
				.catch((error) => {
					console.log({ error });
					reject(error);
				});
		});
	};
}

const Web3ServiceInstance = new Web3Service();
export default Web3ServiceInstance;
