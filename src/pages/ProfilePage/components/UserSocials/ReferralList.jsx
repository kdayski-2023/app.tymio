import React, { useState } from 'react';

import * as Hook from '../../hooks';

import { spliceAddress } from '../../../../lib/lib';
import {
	Accordion,
	Card,
	LoadingSpinner,
	Table,
} from '../../../../components/_DEPRECATED';
import { COLORS } from '../../../../models/colors';
import * as TymioUI from '../../../../components';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import * as Styled from './styled';
import { ReferralService, Web3Service } from '../../../../services';
import { useWallet } from '../../../../hooks';
import { useEffect } from 'react';

const ReferralList = ({ referrals, totals, balance }) => {
	const pageSize = 5;
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [referralsDisplay, setReferralsDisplay] = useState([]);
	const [offset, setOffset] = useState(0);
	const { userAddress } = useWallet();
	const { loading } = Hook.useReferral();
	const [sending, setSending] = useState(false);

	useEffect(() => {
		setTotalCount(referrals.length);
	}, [referrals]);

	useEffect(() => {
		setOffset((currentPage - 1) * pageSize);
	}, [referrals, currentPage]);

	useEffect(() => {
		setReferralsDisplay(
			JSON.parse(JSON.stringify(referrals)).splice(offset, pageSize),
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [offset]);

	const handleWithdraw = async (amount) => {
		setSending(true);
		try {
			await Web3Service.withdraw(amount);
			ReferralService.getData(userAddress);
		} catch (e) {
			console.log(e);
		}
		setSending(false);
	};

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<>
			{loading && <LoadingSpinner />}
			{!loading && (
				<Accordion
					heightTrigger={referralsDisplay}
					type={'block'}
					trigger={'Referral list'}
					content={
						<Card
							width={'100%'}
							background={COLORS.RICH_BLACK2}
							gap={'30px'}
							xsPadding={'20px'}>
							{totals && (
								<Card.Header>
									<Styled.ReferralBadge>
										<TymioUI.Typography
											size={TYPOGRAPHY_SIZE.SMALL}
											lh={'100%'}>
											Linked wallets: {totals.wallets}
										</TymioUI.Typography>
										<TymioUI.Typography
											size={TYPOGRAPHY_SIZE.SMALL}
											lh={'100%'}>
											Transactions: {totals.transactions}
										</TymioUI.Typography>
									</Styled.ReferralBadge>
								</Card.Header>
							)}

							<Card.Body>
								<Table padding={'0'} color={'inherit'}>
									<Table.Head>
										<Table.Head.Tr grid_template_columns={'2fr 1fr 1fr'}>
											<Table.Th align={'left'}>Address</Table.Th>
											<Table.Th>Earn</Table.Th>
											<Table.Th align={'right'}>Paid</Table.Th>
										</Table.Head.Tr>
									</Table.Head>
									<Table.Body hr>
										{referralsDisplay.map((referral, i) => (
											<Table.Tr key={i} grid_template_columns={'2fr 1fr 1fr'}>
												<Table.Td align={'left'} mono>
													{spliceAddress(referral.address, 8)}
												</Table.Td>
												<Table.Td>${referral.earn}</Table.Td>
												<Table.Td align={'right'}>
													<TymioUI.Typography
														color={
															Number(referral.paid) > 0
																? COLORS.LEMON
																: COLORS.GRAY
														}>
														${referral.paid}
													</TymioUI.Typography>
												</Table.Td>
											</Table.Tr>
										))}
									</Table.Body>
									<Table.Footer>
										<TymioUI.Pagination
											currentPage={currentPage}
											totalCount={totalCount}
											pageSize={pageSize}
											onPageChange={(page) => onPageChange(page)}
										/>
									</Table.Footer>
								</Table>
							</Card.Body>

							{totals && (
								<Card.Footer>
									<Styled.Withdraw>
										<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
											Available: ${balance}
										</TymioUI.Typography>
										<Styled.ProfileButton
											onClick={() => handleWithdraw(balance)}
											disabled={sending || !balance || !Number(balance)}>
											WITHDRAW
										</Styled.ProfileButton>
									</Styled.Withdraw>
								</Card.Footer>
							)}
						</Card>
					}
				/>
			)}
		</>
	);
};

export default ReferralList;
