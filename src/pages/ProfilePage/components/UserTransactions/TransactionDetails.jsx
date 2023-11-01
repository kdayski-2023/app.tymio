import React from 'react';

import { LoadingSpinner, Message } from '../../../../components/_DEPRECATED';
import * as Styled from './styled';
import { useTransactionDetails } from '../../hooks';
import Arrow from '../../../../assets/img/icons/arrow-up-right.svg';
import { ModalService } from '../../../../services';
import Close from '../../../../assets/img/icons/cross-close.svg';

const TransactionDetails = ({ order }) => {
	const { error, loading, transactionDetails } = useTransactionDetails(order);
	return (
		<Styled.OrderInfoWrapper>
			<Styled.Header>
				<h3>Transaction details</h3>
				<Styled.CloseIcon onClick={() => ModalService.hide()}>
					<img width={25} height={25} src={Close} alt={''} />
				</Styled.CloseIcon>
			</Styled.Header>
			{loading && <LoadingSpinner />}
			{error && <Message message={error} />}
			
			{!loading && !error && (
				<Styled.TDUl aria-label="">
					{transactionDetails.map(({ name, value, type, styles }, i) => (
						<Styled.TDLi key={i} style={styles}>
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
