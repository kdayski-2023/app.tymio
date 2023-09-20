import React, { useState } from 'react';

import { ModalService } from '../../../services';
import TransactionDetails from './TransactionDetails';
import * as Styled from '../styled';
import * as TymioUI from '../../../components';

const UserOrderTr = ({ order }) => {
  const [active, setActive] = useState(null);

  const clickHandler = (order) => {
    setActive(order.id);
    ModalService.show(<TransactionDetails order={order} />);
  };

  return (
    <TymioUI.Table.Tr
      active={active === order.id}
      onClick={() => clickHandler(order)}
    >
      <TymioUI.Table.Td>
        <Styled.Price>
          <Styled.ETHAmount>
            {order.amount}
            <TymioUI.TokenIcon size={'xs'} token={order.token_symbol} />
          </Styled.ETHAmount>
          {order.price}
        </Styled.Price>
      </TymioUI.Table.Td>
      <TymioUI.Table.Td>
        <Styled.Amount>{Math.floor(Number(order.recieve))}$</Styled.Amount>
      </TymioUI.Table.Td>
      <TymioUI.Table.Td>
        <Styled.Status id="status" active={active === order.id}>
          {order.displayStatus}
        </Styled.Status>
      </TymioUI.Table.Td>
    </TymioUI.Table.Tr>
  );
};

export default UserOrderTr;
