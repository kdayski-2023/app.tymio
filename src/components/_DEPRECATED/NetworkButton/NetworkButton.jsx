import React, { useState, useEffect, useRef } from 'react';

import * as TymioUI from '..';
import * as Styled from './styled';

import { WalletService } from '../../../services';

import { useConfig, useWallet } from '../../../hooks';
import { isMobile } from '../../../lib/lib';

const NetworkButton = () => {
	const ref = useRef(null);

	const [mobile, setMobile] = useState(true);
	const { chainId, providerType } = useWallet();
	const { config, loading } = useConfig();

	const [show, setShow] = useState(false);
	const [selectedChain, setSelectedChain] = useState(null);

	const handleSelect = async (chain_id) => {
		await WalletService.changeNetwork(chain_id);
		setShow(false);
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		setMobile(isMobile() || providerType === 'wc');
	}, [providerType]);

	useEffect(() => {
		setSelectedChain(chainId);
	}, [chainId]);

	return (
		<Styled.Wrapper>
			{!loading && config && config.CHAIN_NAMES && chainId && (
				<TymioUI.Select ref={ref} width={mobile ? 40 : 64}>
					<TymioUI.Select.Value
						onClick={() => setShow((prevState) => !prevState)}>
						{config.CHAIN_NAMES[selectedChain] ? (
							<TymioUI.CurrencyIcon chainId={selectedChain} size={'xs'} />
						) : (
							<TymioUI.CurrencyIcon chainId={0} size={'xs'} />
						)}
						{!mobile && (
							<TymioUI.Chevron
								height={8}
								width={8}
								stroke={0.1}
								color={'alt_chevron'}
								direction={show ? 'top' : 'bottom'}
							/>
						)}
					</TymioUI.Select.Value>

					{!mobile && (
						<TymioUI.Select.Options show={show} side={'left'}>
							{Object.keys(config.CHAIN_NAMES).map((chain_id, index) => (
								<TymioUI.Select.Option
									key={index}
									active={String(chainId) === String(chain_id)}
									onClick={() => handleSelect(chain_id)}>
									<TymioUI.CurrencyIcon chainId={chain_id} size={'xs'} />
									<span>{config.CHAIN_NAMES[chain_id]}</span>
								</TymioUI.Select.Option>
							))}
						</TymioUI.Select.Options>
					)}
				</TymioUI.Select>
			)}
		</Styled.Wrapper>
	);
};

export default NetworkButton;
