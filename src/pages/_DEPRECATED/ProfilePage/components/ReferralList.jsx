import React from 'react';

import * as TymioUI from '../../../components';
import * as Hook from '../hooks';

import { formatDate, spliceAddress } from '../../../lib/lib';

const ReferralList = ({ referrals, totals }) => {
  const { loading } = Hook.useReferral();

  return (
    <>
      {loading && <TymioUI.LoadingSpinner />}
      {!loading && (
        <>
          <TymioUI.Card>
            {totals && (
              <TymioUI.Card.Header>
                <div>Linked wallets: {totals.wallets}</div>
                <div>Transactions: {totals.transactions}</div>
              </TymioUI.Card.Header>
            )}

            <TymioUI.Card.Body>
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
                      <TymioUI.Table.Td>
                        ${referral.earn.toFixed(2)}
                      </TymioUI.Table.Td>
                      <TymioUI.Table.Td>
                        ${referral.paid.toFixed(2)}
                      </TymioUI.Table.Td>
                    </TymioUI.Table.Tr>
                  ))}
                </TymioUI.Table.Body>
              </TymioUI.Table>
            </TymioUI.Card.Body>

            {totals && (
              <TymioUI.Card.Footer>
                <div>
                  Available (next update{' '}
                  {`${formatDate(totals.nextUpdate, 'utc')}`}
                  ): ${totals.available.toFixed(2)}
                </div>
              </TymioUI.Card.Footer>
            )}
          </TymioUI.Card>
        </>
      )}
    </>
  );
};

export default ReferralList;
