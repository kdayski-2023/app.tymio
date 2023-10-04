import React, { useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';
import Subscribe from './Subscribe';
import Airdrop from './Airdrop';
import ReferralCode from './ReferralCode';
import ReferralList from './ReferralList';

import { useWallet } from '../../../../hooks';
import { useSubscribe, useAirdrop, useReferral } from '../../hooks';

const UserSocials = () => {
	const { userAddress } = useWallet();
	const { subscription } = useSubscribe(userAddress);
	const { airdrop, airdropParticipant } = useAirdrop(userAddress);
	const { referral, referrals, totals } = useReferral(userAddress);

	useEffect(() => {
		if (userAddress) {
			Service.SubscribeService.getData(userAddress);
			Service.ReferralService.getData(userAddress);
			Service.AirdropService.getData();
		}
	}, [userAddress]);

	useEffect(() => {
		if (userAddress && airdrop) {
			Service.AirdropService.getParticipant(userAddress, {
				airdrop_id: airdrop.id,
			});
		}
	}, [userAddress, airdrop]);

	return (
		<Styled.UserSocials>
			{subscription && <Subscribe subscription={subscription} />}
			{referral && <ReferralCode referral={referral} />}
			{referrals && referrals.length ? (
				<ReferralList referrals={referrals} totals={totals} />
			) : null}
			{airdrop && (
				<Airdrop airdrop={airdrop} airdropParticipant={airdropParticipant} />
			)}
		</Styled.UserSocials>
	);
};

export default UserSocials;
