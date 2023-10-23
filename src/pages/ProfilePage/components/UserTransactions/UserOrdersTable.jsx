import React, { useEffect, useState } from 'react';
import { Table } from '../../../../components/_DEPRECATED';
import * as TymioUI from '../../../../components';
import UserOrderTr from './UserOrderTr';
import { COLORS } from '../../../../models/colors';

const UserOrdersTable = ({ orders, direction }) => {
	const pageSize = 5;
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [ordersDisplay, setOrdersDisplay] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setTotalCount(orders.length);
	}, [orders]);

	useEffect(() => {
		setOffset((currentPage - 1) * pageSize);
	}, [orders, currentPage]);

	useEffect(() => {
		setOrdersDisplay(
			JSON.parse(JSON.stringify(orders)).splice(offset, pageSize),
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [offset]);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<>
			{orders.length ? (
				<Table color={COLORS.RICH_PURPLE}>
					<Table.Head>
						<Table.Head.Tr>
							<Table.Th align={'left'}>{direction}</Table.Th>
							<Table.Th />
							<Table.Th>Earned</Table.Th>
							<Table.Th align={'right'}>Info</Table.Th>
						</Table.Head.Tr>
					</Table.Head>
					<Table.Body hr>
						{ordersDisplay.map((order, i) => (
							<UserOrderTr key={i} order={order} />
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
			) : (
				<></>
			)}
		</>
	);
};

export default UserOrdersTable;
