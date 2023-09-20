import React, { useEffect, useState } from 'react';

import { useCurrentPrice, useOrder } from '../hooks';
import * as TymioUI from '../../../components';
import * as Styled from '../styled';

const TERMS = process.env.REACT_APP_TERMS;

const Agreement = ({ formik, unfilledFields, setUnfilledFields }) => {
  const { price, period, amount, tokenSymbol } = formik.values;

  const {
    error: currentPriceError,
    loading: currentPriceLoading,
    currentPrice,
  } = useCurrentPrice();

  const {
    error: agreementError,
    loading: agreementLoading,
    orderAvailable,
    orderData,
  } = useOrder(price, period, amount, currentPrice, tokenSymbol);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(currentPriceError || agreementError);
  }, [currentPriceError, agreementError]);

  useEffect(() => {
    setLoading(currentPriceLoading || agreementLoading);
  }, [currentPriceLoading, agreementLoading]);

  const handleChange = async (e) => {
    await formik.setFieldValue('agreement', e.target.checked);
    setUnfilledFields(
      unfilledFields.filter((unfilled) => unfilled !== 'agreement')
    );
  };

  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  // const getTime = (end_date) => {
  //   const time = Date.parse(end_date) - Date.now();
  //   setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  //   setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
  //   setMinutes(Math.floor((time / 1000 / 60) % 60));
  //   setSeconds(Math.floor((time / 1000) % 60));
  // };

  // useEffect(() => {
  //   if (period) {
  //     const interval = setInterval(() => getTime(new Date(period)), 1000);
  //     return () => clearInterval(interval);
  //   }
  //   return;
  // }, [period]);

  return (
    <TymioUI.Card unfilled={unfilledFields.includes('agreement')}>
      {loading && <TymioUI.LoadingSpinner />}

      {error && (
        <>
          {currentPriceError && <TymioUI.Message message={currentPriceError} />}
          {agreementError && <TymioUI.Message message={agreementError} />}
        </>
      )}

      {!loading && !error && orderAvailable && orderData ? (
        <>
          <TymioUI.Card.Body>
            <Styled.Agreement
              dangerouslySetInnerHTML={{ __html: orderData.contract_html }}
            />
          </TymioUI.Card.Body>
          <TymioUI.Card.Footer>
            <TymioUI.Input
              type="checkbox"
              label="I have read the agreement above and"
              terms={{
                content: 'Terms & Conditions',
                link: TERMS,
              }}
              value={formik.values.agreement}
              onChange={handleChange}
            />
          </TymioUI.Card.Footer>
        </>
      ) : (
        <></>
      )}
    </TymioUI.Card>
  );
};

export default Agreement;
