import React, { useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';
import Subscribe from './Subscribe';
import Airdrop from './Airdrop';
import ReferralCode from './ReferralCode';
import UserPoints from './UserPoints';

import { useWallet } from '../../../../hooks';
import { useSubscribe, useAirdrop, useUserPoints } from '../../hooks';

const UserSocials = () => {
	const { userAddress, connected } = useWallet();
	const { subscription } = useSubscribe(userAddress);
	const { airdrop, airdropParticipant } = useAirdrop(userAddress);
	const { userPoints } = useUserPoints(userAddress);

	useEffect(() => {
		if (connected && userAddress) {
			Service.UserPointsService.getData(userAddress);
			Service.SubscribeService.getData(userAddress);
			Service.ReferralService.getData(userAddress);
			Service.AirdropService.getData();
		} else {
			Service.UserPointsService.reset();
			Service.SubscribeService.reset();
			Service.ReferralService.reset();
			Service.AirdropService.reset();
		}
	}, [userAddress, connected]);

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
			<ReferralCode />
			<UserPoints points={userPoints} />
			{airdrop &&
				airdropParticipant &&
				airdropParticipant.serial_number <= airdrop.participant_limit && (
					<Airdrop airdrop={airdrop} airdropParticipant={airdropParticipant} />
				)}
		</Styled.UserSocials>
	);
};

export default UserSocials;
