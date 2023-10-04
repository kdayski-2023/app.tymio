import React, { useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';

import { useWallet } from '../../../../hooks';
import { useAirdrop } from '../../hooks';
import Participant from './Participant';
import { Card, LoadingSpinner } from '../../../../components/_DEPRECATED';

const Airdrop = ({ airdrop, airdropParticipant }) => {
	const { userAddress } = useWallet();
	const { loading } = useAirdrop();

	useEffect(() => {
		if (userAddress && airdrop && !loading && !airdropParticipant) {
			Service.AirdropService.addParticipantToAirdrop(userAddress, {
				airdrop_id: airdrop.id,
			});
		}
	}, [userAddress, airdrop, airdropParticipant, loading]);

	return (
		<Card>
			<Card.Header>Airdrop</Card.Header>
			{loading && <LoadingSpinner />}
			{!loading && (
				<Card.Body>
					<Styled.Subtitle>
						10K USDC airdrop for first 100 loyal users
					</Styled.Subtitle>
					<Styled.Conditions>
						Conditions:
						<br />
						<p>
							First 100 users who has made at least three consecutive deals
							(next deal should be within one week after previous) on TYMIO and
							posted about TYMIO in any well-known social network, using active
							links to sell-high.io or buy-low.io, will get 10K USDC or
							equivalent in TYMIO tokens, as soon as TYMIO valuation hits 150M.
							Threshold will be determined using last investment round valuation
							or token market cap.
						</p>
						<p>
							How? Directly to the eligible wallets. Yes, 10K USD. You got it
							right.
						</p>
						<p>
							When? Our estimation that we will hit 150M valuation at the end of
							2024.
						</p>
						<p>Why? We appreciate your loyalty and we need your support NOW!</p>
					</Styled.Conditions>
					{airdropParticipant && (
						<Participant
							airdrop={airdrop}
							airdropParticipant={airdropParticipant}
						/>
					)}
				</Card.Body>
			)}
		</Card>
	);
};

export default Airdrop;
