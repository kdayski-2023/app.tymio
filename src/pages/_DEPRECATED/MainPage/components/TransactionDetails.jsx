import React from 'react';

import { useTransactionDetails } from '../hooks';
import * as TymioUI from '../../../components';
import * as Styled from '../styled';

const TransactionDetails = ({ order }) => {
  const { error, loading, transactionDetails } = useTransactionDetails(order);
  return (
    <Styled.OrderInfoWrapper>
      {loading && <TymioUI.LoadingSpinner />}
      {error && <TymioUI.Message message={error} />}

      {!loading && !error && (
        <Styled.TDUl aria-label="Transaction details">
          {transactionDetails.map(({ name, value, type }, i) => (
            <Styled.TDLi key={i}>
              {name}
              <br />
              {type === 'link' ? (
                <Styled.Link href={value} target="_blank" rel="noreferrer">
                  {value}
                </Styled.Link>
              ) : (
                value
              )}
            </Styled.TDLi>
          ))}
        </Styled.TDUl>
      )}
    </Styled.OrderInfoWrapper>
  );
};

export default TransactionDetails;
