import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { OrderService } from '../../../../services';
import { useWallet } from '../../../../hooks';
import {
	LoadingSpinner,
	Message,
	Card,
} from '../../../../components/_DEPRECATED';
import * as TymioUI from '../../../../components';
import { useUserOrders } from '../../hooks';
import { COLORS } from '../../../../models/colors';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../../../models/types';
import * as Styled from './styled';
import { MESSAGES } from '../../../../models/messages';
import UserOrdersTable from './UserOrdersTable';

const UserOrder = () => {
	const navigate = useNavigate();
	const {
		error,
		loading,
		orders,
		total,
		activeOrders,
		closedOrders,
		activeSellOrders,
		activeBuyOrders,
		closedSellOrders,
		closedBuyOrders,
	} = useUserOrders();
	const { connected, userAddress } = useWallet();
	const [expanded, setExpanded] = useState(false);
	const [closedExpanded, setClosedExpanded] = useState(true);

	useEffect(() => {
		const interval = setInterval(async () => {
			if (!orders.find((order) => order.displayStatus === 'pending')) {
				clearInterval(interval);
				return;
			}
			OrderService.getUserOrders(userAddress, true);
		}, 10000);

		return () => {
			clearInterval(interval);
		};
		//	eslint-disable-next-line
	}, [orders]);

	useEffect(() => {
		const interval = setInterval(() => {
			OrderService.getUserOrders(userAddress, true);
		}, 50000);

		return () => {
			clearInterval(interval);
		};
		//	eslint-disable-next-line
	}, [userAddress]);

	useEffect(() => {
		if (connected && userAddress) {
			OrderService.getUserOrders(userAddress);
		}
	}, [connected, userAddress]);

	const handleClick = () => {
		navigate('/');
	};

	const handleExpand = () => {
		setExpanded((prevState) => !prevState);
	};

	const handleClosedExpand = () => {
		setClosedExpanded((prevState) => !prevState);
	};

	return (
		<Card
			background={COLORS.PURPLE_GRAY2}
			gap={expanded ? '30px' : '60px'}
			xsGap={'30px'}
			xsPadding={'30px 15px'}
			mh={357}>
			{loading && <LoadingSpinner margin={'auto'} />}

			{error && <Message message={error} />}

			{!loading && !error && (!orders.length || !userAddress) ? (
				<>
					<Card.Header>
						<TymioUI.H2 color={COLORS.BLACK}>Transactions: 0</TymioUI.H2>
					</Card.Header>
					<Card.Body>
						<TymioUI.Typography color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.BIG}>
							Yoy have no transactions yet
						</TymioUI.Typography>
					</Card.Body>
					<Card.Footer align={'flex-end'}>
						<TymioUI.TransactionIcon />
						<TymioUI.Button
							fixed
							type={BUTTON_TYPE.SECONDARY}
							onClick={handleClick}>
							<TymioUI.Typography color={COLORS.BLACK}>
								BACK TO APP
							</TymioUI.Typography>
						</TymioUI.Button>
					</Card.Footer>
				</>
			) : (
				''
			)}

			{!loading && !error && orders.length && userAddress ? (
				<>
					<Card.Header
						display={'flex'}
						justify={'space-between'}
						gap={'30px'}
						xsGap={'20px'}
						wrap>
						<Styled.TransactionsTitle>
							<TymioUI.H2 color={COLORS.BLACK} lh={'34px'}>
								Transactions: {orders.length}
							</TymioUI.H2>
						</Styled.TransactionsTitle>
						{total && (
							<>
								<Styled.AccordionTrigger onClick={handleExpand}>
									<TymioUI.Typography
										size={TYPOGRAPHY_SIZE.SMALL}
										color={COLORS.BLACK}
										lh={'100%'}>
										Earned:{' '}
									</TymioUI.Typography>
									<TymioUI.Typography lh={'100%'} color={COLORS.BLACK}>
										${total.earned.toFixed(0)}
									</TymioUI.Typography>
									<TymioUI.UserTransactionsArrow expanded={expanded} />
								</Styled.AccordionTrigger>
								<Styled.AccordionContent expanded={expanded}>
									{Object.keys(total).map((key) => (
										<>
											{key !== 'earned' && (
												<Styled.AccordionItem>
													<TymioUI.Typography
														color={COLORS.BLACK}
														size={TYPOGRAPHY_SIZE.SMALL}
														lh={'100%'}>
														{MESSAGES[key]}
													</TymioUI.Typography>
													<TymioUI.Typography color={COLORS.BLACK} lh={'100%'}>
														{total[key].toFixed(0)}
													</TymioUI.Typography>
												</Styled.AccordionItem>
											)}
										</>
									))}
								</Styled.AccordionContent>
							</>
						)}
					</Card.Header>
					<Card.Body gap={'30px'}>
						<Styled.ActiveOrders>
							<TymioUI.Typography color={COLORS.BLACK}>
								ACTIVE: {activeOrders.length}
							</TymioUI.Typography>

							<UserOrdersTable orders={activeSellOrders} direction={'Sell'} />
							<UserOrdersTable orders={activeBuyOrders} direction={'Buy'} />
						</Styled.ActiveOrders>
						{closedOrders.length ? (
							<Styled.ClosedOrders>
								<Styled.ClosedAccordionTrigger onClick={handleClosedExpand}>
									<TymioUI.Typography color={COLORS.BLACK} lh={'100%'}>
										CLOSED: {closedOrders.length}
									</TymioUI.Typography>
									{closedOrders.length ? (
										<TymioUI.UserTransactionsArrow expanded={closedExpanded} />
									) : (
										<></>
									)}
								</Styled.ClosedAccordionTrigger>
								<Styled.ClosedAccordionContent expanded={closedExpanded}>
									<UserOrdersTable
										orders={closedSellOrders}
										direction={'Sell'}
									/>
									<UserOrdersTable orders={closedBuyOrders} direction={'Buy'} />
								</Styled.ClosedAccordionContent>
							</Styled.ClosedOrders>
						) : (
							<></>
						)}
					</Card.Body>
				</>
			) : (
				''
			)}
		</Card>
	);
};

export default UserOrder;
