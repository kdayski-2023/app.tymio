import React from 'react';

import * as Hook from '../../hooks';

import { formatDate, trimAddress } from '../../../../lib/lib';
import {
	Card,
	LoadingSpinner,
	Table,
} from '../../../../components/_DEPRECATED';
import { COLORS } from '../../../../models/colors';
import * as TymioUI from '../../../../components';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import * as Styled from './styled';

const ReferralList = ({ referrals, totals }) => {
	const { loading } = Hook.useReferral();

	return (
		<>
			{loading && <LoadingSpinner />}
			{!loading && (
				<>
					<Card
						width={'100%'}
						background={COLORS.RICH_BLACK2}
						gap={'30px'}
						xsPadding={'20px'}>
						{totals && (
							<Card.Header>
								<Styled.ReferralBadge>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL} lh={'100%'}>
										Linked wallets: {totals.wallets}
									</TymioUI.Typography>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL} lh={'100%'}>
										Transactions: {totals.transactions}
									</TymioUI.Typography>
								</Styled.ReferralBadge>
							</Card.Header>
						)}

						<Card.Body>
							<Table padding={'0'} color={'inherit'}>
								<Table.Head>
									<Table.Head.Tr grid_template_columns={'2fr 2fr 2fr 1fr'}>
										<Table.Th align={'left'}>Address</Table.Th>
										<Table.Th>Earn</Table.Th>
										<Table.Th>Paid</Table.Th>
										<Table.Th align={'right'}>Info</Table.Th>
									</Table.Head.Tr>
								</Table.Head>
								<Table.Body hr>
									{referrals.map((referral, i) => (
										<Table.Tr key={i} grid_template_columns={'2fr 2fr 2fr 1fr'}>
											<Table.Td align={'left'}>
												{trimAddress(referral.address)}
											</Table.Td>
											<Table.Td>${referral.earn.toFixed(2)}</Table.Td>
											<Table.Td
												color={referral.paid > 0 ? COLORS.LEMON : COLORS.GRAY}>
												${referral.paid.toFixed(2)}
											</Table.Td>
											<Table.Td align={'right'}>
												<TymioUI.Typography
													size={TYPOGRAPHY_SIZE.SMALL}
													color={COLORS.PURPLE_BRIGHT}>
													Details
												</TymioUI.Typography>
											</Table.Td>
										</Table.Tr>
									))}
								</Table.Body>
							</Table>
						</Card.Body>

						{totals && (
							<Card.Footer>
								<TymioUI.Typography
									size={TYPOGRAPHY_SIZE.SMALL}
									style={{ marginLeft: 'auto' }}>
									Update: {`${formatDate(totals.nextUpdate, 'dot')}`}
								</TymioUI.Typography>
							</Card.Footer>
						)}
					</Card>
				</>
			)}
		</>
	);
};

export default ReferralList;
