import React, { useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';

import { useWallet } from '../../../../hooks';
import { useAirdrop } from '../../hooks';
import Participant from './Participant';
import { Card, LoadingSpinner } from '../../../../components/_DEPRECATED';
import * as TymioUI from '../../../../components';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

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
		<Card gap={'30px'} xsPadding={'30px 20px'}>
			<Card.Header
				display={'flex'}
				justify={'space-between'}
				alignItems={'flex-start'}
				xsDirection={'column'}
				gap={'20px'}>
				<TymioUI.H2 lh={'100%'}>Airdrop 10K</TymioUI.H2>
				<Styled.AirdropBadge>
					<TymioUI.Typography uppercase>10K USDC for first</TymioUI.Typography>
					<TymioUI.Typography uppercase>100 loyal users</TymioUI.Typography>
				</Styled.AirdropBadge>
			</Card.Header>
			<TymioUI.Typography>CONDITIONS:</TymioUI.Typography>
			<Card.Body>
				<Styled.Conditions mt={'0'} gap={'30px'}>
					<Styled.Condition>
						<Styled.Number>
							<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL} lh={'100%'}>
								1
							</TymioUI.Typography>
						</Styled.Number>
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
							Made at least three consecutive deals (next deal should be within
							one week after previous) on Tymio.
						</TymioUI.Typography>
					</Styled.Condition>
					<Styled.Condition>
						<Styled.Number>
							<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL} lh={'100%'}>
								2
							</TymioUI.Typography>
						</Styled.Number>
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
							Posted about Tymio in any well-known social network, using active
							link →
						</TymioUI.Typography>
					</Styled.Condition>
					<Styled.Condition>
						<Styled.Number>
							<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL} lh={'100%'}>
								3
							</TymioUI.Typography>
						</Styled.Number>
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
							Get 10K USDC or equivalent in Tymio tokens, as soon as Tymio
							valuation hits 150M (our estimation — the end of 2024). Threshold
							will be determined using last investment round valuation or token
							market cap.
						</TymioUI.Typography>
					</Styled.Condition>
				</Styled.Conditions>
			</Card.Body>
			<Card.Footer>
				{loading && <LoadingSpinner />}
				{!loading && airdropParticipant && (
					<Participant
						airdrop={airdrop}
						airdropParticipant={airdropParticipant}
					/>
				)}
			</Card.Footer>
		</Card>
	);
};

export default Airdrop;
