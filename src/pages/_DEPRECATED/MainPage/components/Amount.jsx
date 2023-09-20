import React, { useState, useEffect, useRef } from 'react';

import { useConfig, useDebounce, useFocus, useWallet } from '../../../hooks';

import * as TymioUI from '../../../components';
import * as Styled from '../styled';
import * as Hook from '../hooks';
import * as Service from '../../../services';
import PairSelector from './PairSelector';

const appType = process.env.REACT_APP_TYPE;

const Amount = ({
  formik,
  arrowDown,
  loading: orderLoading,
  setAmountFocused,
  unfilledFields,
  setUnfilledFields,
}) => {
  const innerRef = useRef();
  const wallet = useWallet();
  const { loading: periodsLoading } = Hook.usePeriods();
  const { config } = useConfig();
  useFocus(orderLoading || periodsLoading, innerRef);
  const [amount, setAmount] = useState('10');
  const debouncedNewValue = useDebounce(amount, 1000);

  useEffect(() => {
    formik.setFieldValue('amount', debouncedNewValue);
    setAmountFocused(false);
    //	eslint-disable-next-line
  }, [debouncedNewValue]);

  useEffect(() => {
    if (formik.values.price && formik.values.period && formik.values.amount) {
      const timeout = setTimeout(() => {
        setAmount(formik.initialValues.amount);
      }, 300000);

      return () => {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.price, formik.values.period, formik.values.amount]);

  useEffect(() => {
    let amount = formik.values.amount || formik.initialValues.amount;
    if (formik.values.tokenSymbol === 'WBTC') amount = '1';
    if (formik.values.tokenSymbol === 'ETH') amount = '10';
    changeAmount(amount);
    setAmountFocused(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.tokenSymbol]);

  const changeAmount = (value) => {
    setAmountFocused(true);
    setUnfilledFields(
      unfilledFields.filter((unfilled) => unfilled !== 'amount')
    );
    if (!value) value = '0';

    value = value.replace(',', '.');

    if (/^0[0-9]+/.test(value)) {
      value = value.substring(1);
    }
    // /^([1-9][0-9]*|0(\.[0-9]{0,2})?|1)$/
    if (String(value).match(/^(0|[1-9][0-9]*)(\.[0-9]{0,2})?$/)) {
      setAmount(value);
    }
  };

  const handleClick = async () => {
    const { connected } = Service.WalletService.state;
    if (!connected) await Service.WalletService.connect();
    await Service.WalletService.changeNetwork(wallet.chainId);
    await Service.WalletService.setBalance(
      config,
      wallet,
      formik.values.tokenSymbol
    );
    const { balance, balanceUSDC } = Service.WalletService.state;
    if (appType === 'sell') {
      let availableAmount = parseFloat(balance);
      availableAmount = Math.floor(availableAmount * 100) / 100;
      changeAmount(String(availableAmount));
    }

    if (appType === 'buy' && !formik.values.price) {
      Service.MessageDialogService.showError('Choose price first');
    }

    if (appType === 'buy' && formik.values.price) {
      let availableAmount =
        parseFloat(balanceUSDC) / parseFloat(formik.values.price);
      availableAmount = Math.floor(availableAmount * 100) / 100;
      changeAmount(String(availableAmount));
    }
  };

  return (
    <>
      <TymioUI.Card unfilled={unfilledFields.includes('amount')}>
        <TymioUI.Card.Header>You {appType}:</TymioUI.Card.Header>
        <TymioUI.Card.Body smallGap>
          <TymioUI.Input
            innerRef={innerRef}
            selector={
              <PairSelector
                formik={formik}
                disabled={orderLoading || periodsLoading}
              />
            }
            value={amount}
            onChange={(e) => changeAmount(e.currentTarget.value)}
            type={'text'}
            placeholder={'0'}
            disabled={orderLoading || periodsLoading}
            error={formik.errors.amount}
          />
          <Styled.Max onClick={handleClick}>MAX</Styled.Max>
        </TymioUI.Card.Body>
      </TymioUI.Card>
      {arrowDown && <TymioUI.TransitionArrow />}
    </>
  );
};

export default Amount;
