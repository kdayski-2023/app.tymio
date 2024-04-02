import React, { useState, useEffect, useRef } from 'react';

import * as TymioUI from '../_DEPRECATED';
import * as Styled from './styled';

import { WalletService } from '../../services';

import { useConfig, useWallet } from '../../hooks';
import { isMobile } from '../../lib/lib';
import NetworkMenuArrow from '../Icons/NetworkMenuArrow/NetworkMenuArrow';
import Tooltip from '../Tooltip/Tooltip';

const NetworkSelector = () => {
	const ref = useRef(null);

	const [mobile, setMobile] = useState(true);
	const { chainId, providerType, isNotSupportedNetwork } = useWallet();
	const { config, loading } = useConfig();

	const [show, setShow] = useState(false);
	const [selectedChain, setSelectedChain] = useState(null);
	const [showTooltip, setShowTooltip] = useState(false);

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
				<Tooltip
					showTooltip={showTooltip}
					position={'right'}
					top={'35px'}
					text={"Your wallet's current network is not supported"}>
					<TymioUI.Select ref={ref} show={show}>
						<TymioUI.Select.Value
							onClick={() => setShow((prevState) => !prevState)}
							onMouseEnter={() => setShowTooltip(isNotSupportedNetwork)}
							onMouseLeave={() => setShowTooltip(false)}>
							{config.CHAIN_NAMES[selectedChain] ? (
								<TymioUI.CurrencyIcon chainId={selectedChain} size={'s'} />
							) : (
								<TymioUI.CurrencyIcon chainId={0} size={'s'} />
							)}
							{!mobile && <NetworkMenuArrow expanded={show} />}
						</TymioUI.Select.Value>

						{!mobile && (
							<TymioUI.Select.Options zIndex={1000} show={show} side={'left'}>
								{Object.keys(config.CHAIN_NAMES).map((chain_id, index) => (
									<TymioUI.Select.Option
										key={index}
										active={String(chainId) === String(chain_id)}
										onClick={() => handleSelect(chain_id)}>
										<TymioUI.CurrencyIcon chainId={chain_id} size={'s'} />
										<span>{config.CHAIN_NAMES[chain_id]}</span>
									</TymioUI.Select.Option>
								))}
							</TymioUI.Select.Options>
						)}
					</TymioUI.Select>
				</Tooltip>
			)}
		</Styled.Wrapper>
	);
};

export default NetworkSelector;
