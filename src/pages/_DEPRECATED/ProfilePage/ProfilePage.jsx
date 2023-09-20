import React, { useEffect } from 'react';

import * as Service from '../../services';
import * as TymioUI from '../../components';
import * as Styled from './styled';
import * as Components from './components';

import { useWallet } from '../../hooks';
import { useSubscribe, useAirdrop, useReferral } from './hooks';

const ProfilePage = () => {
  const { userAddress, connecting } = useWallet();
  const { subscription } = useSubscribe(userAddress);
  const { airdrop, airdropParticipant } = useAirdrop(userAddress);
  const { referral, referrals, totals } = useReferral(userAddress);

  useEffect(() => {
    if (userAddress) {
      Service.SubscribeService.getData(userAddress);
      Service.ReferralService.getData(userAddress);
      Service.AirdropService.getData();
    } else {
      if (connecting === false) {
        Service.MessageDialogService.showWarning('Connect your wallet first');
      }
    }
  }, [userAddress, connecting]);

  useEffect(() => {
    if (userAddress && airdrop) {
      Service.AirdropService.getParticipant(userAddress, {
        airdrop_id: airdrop.id,
      });
    }
  }, [userAddress, airdrop]);

  return (
    <TymioUI.Container>
      {!userAddress && <TymioUI.WalletButton />}
      {userAddress && (
        <Styled.Content>
          {subscription && <Components.Subscribe subscription={subscription} />}
          {airdrop && (
            <Components.Airdrop
              airdrop={airdrop}
              airdropParticipant={airdropParticipant}
            />
          )}
          {referral && <Components.ReferralCode referral={referral} />}
          {referrals && referrals.length ? (
            <Components.ReferralList referrals={referrals} totals={totals} />
          ) : null}
        </Styled.Content>
      )}
    </TymioUI.Container>
  );
};

export default ProfilePage;
