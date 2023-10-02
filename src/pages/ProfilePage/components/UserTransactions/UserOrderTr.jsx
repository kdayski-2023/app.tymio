import React, { useState } from 'react';

import { ModalService } from '../../../../services';
import TransactionDetails from './TransactionDetails';
import * as Styled from './styled';
import { Table, TokenIcon } from '../../../../components/_DEPRECATED';

const UserOrderTr = ({ order }) => {
	const [active, setActive] = useState(null);

	const clickHandler = (order) => {
		setActive(order.id);
		ModalService.show(<TransactionDetails order={order} />);
	};

	return (
		<Table.Tr active={active === order.id} onClick={() => clickHandler(order)}>
			<Table.Td>
				<Styled.Price>
					<Styled.ETHAmount>
						{order.amount}
						<TokenIcon size={'xs'} token={order.token_symbol} />
					</Styled.ETHAmount>
					{order.price}
				</Styled.Price>
			</Table.Td>
			<Table.Td>
				<Styled.Amount>{Math.floor(Number(order.recieve))}$</Styled.Amount>
			</Table.Td>
			<Table.Td>
				<Styled.Status id="status" active={active === order.id}>
					{order.displayStatus}
				</Styled.Status>
			</Table.Td>
		</Table.Tr>
	);
};

export default UserOrderTr;
