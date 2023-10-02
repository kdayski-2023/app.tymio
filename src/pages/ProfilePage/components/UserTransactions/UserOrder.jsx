import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { OrderService } from '../../../../services';
import { useDirection, useWallet } from '../../../../hooks';
import {
	LoadingSpinner,
	Message,
	Card,
	Table,
} from '../../../../components/_DEPRECATED';
import * as TymioUI from '../../../../components';
import UserOrderTr from './UserOrderTr';
import { useUserOrders } from '../../hooks';
import { COLORS } from '../../../../models/colors';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../../../models/types';
import * as Styled from './styled';

const UserOrder = () => {
	const navigate = useNavigate();
	const { error, loading, orders, total } = useUserOrders();
	const { connected, userAddress } = useWallet();
	const { direction: appType } = useDirection();
	const [expanded, setExpanded] = useState(false);

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
	}, []);

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

	return (
		<Card background={COLORS.PURPLE_LIGHT} gap={'60px'}>
			{loading && <LoadingSpinner />}

			{error && <Message message={error} />}

			{!loading && !error && !orders.length && userAddress ? (
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
						wrap>
						<TymioUI.H2 color={COLORS.BLACK} lh={'34px'}>
							Transactions: {orders.length}
						</TymioUI.H2>
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
							samara
						</Styled.AccordionContent>
					</Card.Header>
					<Card.Body>
						<Table>
							<Table.Head>
								<Table.Head.Tr>
									<Table.Th>{appType}ing</Table.Th>
									<Table.Th>Earn</Table.Th>
									<Table.Th>Status</Table.Th>
								</Table.Head.Tr>
							</Table.Head>
							<Table.Body hr>
								{orders.map((order, i) => (
									<UserOrderTr key={i} order={order} />
								))}
							</Table.Body>
						</Table>
					</Card.Body>
				</>
			) : (
				''
			)}
		</Card>
	);
};

export default UserOrder;
