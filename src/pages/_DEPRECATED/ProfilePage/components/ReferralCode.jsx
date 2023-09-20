import React, { useState, useEffect } from 'react';

import * as Service from '../../../services';
import * as TymioUI from '../../../components';
import * as Styled from '../styled';
import * as Hook from '../hooks';

const ReferralCode = ({ referral }) => {
  const { loading, error } = Hook.useReferral();
  const [copyText, setCopyText] = useState('Copy');
  let timeout;

  useEffect(() => {
    if (error) {
      Service.MessageDialogService.showError(error);
    }
  }, [error]);

  const copyHandler = (e, data) => {
    e.preventDefault();
    navigator.clipboard.writeText(data);
    setCopyText('Copied');

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setCopyText('Copy');
    }, 2000);
  };

  return (
    <>
      {loading && <TymioUI.LoadingSpinner />}
      {!loading && (
        <TymioUI.Card>
          <TymioUI.Card.Header>Referral program</TymioUI.Card.Header>
          <Styled.Conditions>
            <p>
              Earn 5% from the yield paid to wallets you have invited with personal referral link below. No time limits. Perpetual stream of passive income.
            </p>
          </Styled.Conditions>
          <Styled.ProfileSheet>
            <Styled.ProfileText>{`${window.location.origin}/code/${referral}`}</Styled.ProfileText>
            <Styled.ProfileButton
              main
              onClick={(e) =>
                copyHandler(e, `${window.location.origin}/code/${referral}`)
              }
            >
              {copyText}
            </Styled.ProfileButton>
          </Styled.ProfileSheet>
        </TymioUI.Card>
      )}
    </>
  );
};

export default ReferralCode;
