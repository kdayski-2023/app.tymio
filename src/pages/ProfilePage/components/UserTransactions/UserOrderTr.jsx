import React, { useState } from 'react';

import { ModalService } from '../../../../services';
import TransactionDetails from './TransactionDetails';
import * as Styled from './styled';
import * as TymioUI from '../../../../components';
import { Table, TokenIcon } from '../../../../components/_DEPRECATED';
import { COLORS } from '../../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

const UserOrderTr = ({ order }) => {
	const [active, setActive] = useState(null);

	const clickHandler = (order) => {
		setActive(order.id);
		ModalService.show(<TransactionDetails order={order} />);
	};

	return (
		<Table.Tr active={active === order.id} onClick={() => clickHandler(order)}>
			<Table.Td align={'left'}>{order.amount}</Table.Td>
			<Table.Td>
				<Styled.ETHAmount>
					<TokenIcon size={'xs'} token={order.token_symbol} />
					{order.price}
				</Styled.ETHAmount>
			</Table.Td>
			<Table.Td color={COLORS.LEMON}>
				${Math.floor(Number(order.recieve))}
			</Table.Td>
			<Table.Td align={'right'}>
				<TymioUI.Typography
					size={TYPOGRAPHY_SIZE.SMALL}
					color={COLORS.PURPLE_BRIGHT}>
					Details
				</TymioUI.Typography>
			</Table.Td>
		</Table.Tr>
	);
};

export default UserOrderTr;
