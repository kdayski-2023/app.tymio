import React from 'react';

import { LoadingSpinner, Message } from '../../../../components/_DEPRECATED';
import * as Styled from './styled';
import { useTransactionDetails } from '../../hooks';
import Arrow from '../../../../assets/img/icons/arrow-up-right.svg';

const TransactionDetails = ({ order }) => {
	const { error, loading, transactionDetails } = useTransactionDetails(order);
	return (
		<Styled.OrderInfoWrapper>
			{loading && <LoadingSpinner />}
			{error && <Message message={error} />}

			{!loading && !error && (
				<Styled.TDUl aria-label="Transaction details">
					{transactionDetails.map(({ name, value, type }, i) => (
						<Styled.TDLi key={i}>
							<span>{name}</span>
							<span>
								{type === 'link' ? (
									<Styled.Link href={value} target="_blank" rel="noreferrer">
										Open <img width={12} height={12} src={Arrow} alt={''} />
									</Styled.Link>
								) : (
									value
								)}
							</span>
						</Styled.TDLi>
					))}
				</Styled.TDUl>
			)}
		</Styled.OrderInfoWrapper>
	);
};

export default TransactionDetails;
