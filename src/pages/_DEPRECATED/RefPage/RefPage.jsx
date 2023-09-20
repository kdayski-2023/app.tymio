import React, { useState, useEffect } from 'react';

import * as Service from '../../services';
import * as TymioUI from '../../components';
import * as Styled from './styled';
import * as Hook from './hooks';
import { useWallet } from '../../hooks';
import { spliceAddress } from '../../lib/lib';

const RefPage = () => {
  const { userAddress, connecting } = useWallet();
  const { referral, referrals, loading, error } = Hook.useReferral();
  const [copyText, setCopyText] = useState('copy');
  let timeout;

  useEffect(() => {
    if (userAddress) {
      Service.ReferralService.getData(userAddress);
    } else {
      if (connecting === false) {
        Service.MessageDialogService.showWarning('Connect your wallet first');
      }
    }
  }, [userAddress, connecting]);

  useEffect(() => {
    if (error) {
      Service.MessageDialogService.showError(error);
    }
  }, [error]);

  const copyHandler = (e, data) => {
    e.preventDefault();
    navigator.clipboard.writeText(data);
    setCopyText('copied');

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setCopyText('copy');
    }, 2000);
  };

  return (
    <TymioUI.Container>
      {loading && <TymioUI.LoadingSpinner />}
      {!loading && (
        <>
          {!userAddress && <TymioUI.WalletButton />}
          {referral && (
            <Styled.RefSheet>
              <Styled.RefText>{`${window.location.origin}/code/${referral}`}</Styled.RefText>
              <Styled.RefButton
                main
                onClick={(e) =>
                  copyHandler(e, `${window.location.origin}/code/${referral}`)
                }
              >
                {copyText}
              </Styled.RefButton>
            </Styled.RefSheet>
          )}
          {referrals && referrals.length ? (
            <>
              <TymioUI.TransitionArrow />
              <TymioUI.Card>
                <TymioUI.Table>
                  <TymioUI.Table.Head>
                    <TymioUI.Table.Head.Tr columns={3}>
                      <TymioUI.Table.Th>Address</TymioUI.Table.Th>
                      <TymioUI.Table.Th>Earn</TymioUI.Table.Th>
                      <TymioUI.Table.Th>Paid</TymioUI.Table.Th>
                    </TymioUI.Table.Head.Tr>
                  </TymioUI.Table.Head>
                  <TymioUI.Table.Body hr>
                    {referrals.map((referral, i) => (
                      <TymioUI.Table.Tr key={i} columns={3}>
                        <TymioUI.Table.Td>
                          {spliceAddress(referral.address)}
                        </TymioUI.Table.Td>
                        <TymioUI.Table.Td>{referral.earn}</TymioUI.Table.Td>
                        <TymioUI.Table.Td>
                          {referral.paid ? 'Yes' : 'No'}
                        </TymioUI.Table.Td>
                      </TymioUI.Table.Tr>
                    ))}
                  </TymioUI.Table.Body>
                </TymioUI.Table>
              </TymioUI.Card>
            </>
          ) : null}
        </>
      )}
    </TymioUI.Container>
  );
};

export default RefPage;
