import React, { useEffect } from 'react';

import { OrderService } from '../../../services';
import { useWallet } from '../../../hooks';
import { useUserOrders } from '../hooks';
import * as TymioUI from '../../../components';
import UserOrderTr from './UserOrderTr';

const appType = process.env.REACT_APP_TYPE;

const UserOrder = () => {
  const { error, loading, orders } = useUserOrders();
  const { connected, userAddress } = useWallet();

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
      {loading && <TymioUI.LoadingSpinner />}

      {error && <TymioUI.Message message={error} />}

      {!loading && !error && orders.length && userAddress ? (
        <TymioUI.Card>
          <TymioUI.Table>
            <TymioUI.Table.Head>
              <TymioUI.Table.Head.Tr>
                <TymioUI.Table.Th>{appType}ing</TymioUI.Table.Th>
                <TymioUI.Table.Th>Earn</TymioUI.Table.Th>
                <TymioUI.Table.Th>Status</TymioUI.Table.Th>
              </TymioUI.Table.Head.Tr>
            </TymioUI.Table.Head>
            <TymioUI.Table.Body hr>
              {orders.map((order, i) => (
                <UserOrderTr key={i} order={order} />
              ))}
            </TymioUI.Table.Body>
          </TymioUI.Table>
        </TymioUI.Card>
      ) : (
        ''
      )}
    </>
  );
};

export default UserOrder;
