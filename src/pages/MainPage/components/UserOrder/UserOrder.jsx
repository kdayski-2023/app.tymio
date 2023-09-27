import React, { useEffect } from 'react';

import { OrderService } from '../../../../services';
import { useDirection, useWallet } from '../../../../hooks';
import { useUserOrders } from '../../hooks';
import {
	LoadingSpinner,
	Message,
	Card,
	Table,
} from '../../../../components/_DEPRECATED';
import UserOrderTr from '../UserOrderTr/UserOrderTr';

const UserOrder = () => {
	const { error, loading, orders } = useUserOrders();
	const { connected, userAddress } = useWallet();
	const { direction: appType } = useDirection();

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

	return (
		<>
			{loading && <LoadingSpinner />}

			{error && <Message message={error} />}

			{!loading && !error && orders.length && userAddress ? (
				<Card>
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
				</Card>
			) : (
				''
			)}
		</>
	);
};

export default UserOrder;
