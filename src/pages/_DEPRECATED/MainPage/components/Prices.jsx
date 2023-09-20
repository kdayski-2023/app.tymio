import React, { useRef } from 'react';

import { useFocus } from '../../../hooks';
import * as Hook from '../hooks';
import * as TymioUI from '../../../components';
import * as Styled from '../styled';

const Prices = ({ formik, arrowDown, loading: orderLoading, amountFocused, unfilledFields, setUnfilledFields }) => {
  const ref = useRef();
  const {
    error: priceError,
    loading: priceLoading,
    prices,
    currentPrice,
  } = Hook.usePrices();
  const { loading: periodsLoading } = Hook.usePeriods();
  useFocus(orderLoading || periodsLoading, ref);

  const chosePrice = async (e) => {
    await formik.setFieldValue('period', 0, true);
    await formik.setFieldValue('price', e, true);
    setUnfilledFields(unfilledFields.filter((unfilled) => unfilled !== 'price'))
  };

  return (
    <>
      <TymioUI.Card unfilled={unfilledFields.includes('price')}>
        <TymioUI.Card.Header>Price:</TymioUI.Card.Header>
        <>
          {priceLoading && <TymioUI.LoadingSpinner />}
          {priceError && <TymioUI.Message message={priceError} />}
          {!priceLoading && !priceError && (
            <>
              <TymioUI.Card.Body>
                {prices.map((price, index) => (
                  <TymioUI.Button
                    disabled={orderLoading || periodsLoading || amountFocused}
                    ref={ref}
                    key={index}
                    type="button"
                    active={formik.values.price === price ? 'true' : undefined}
                    onClick={() => chosePrice(price)}
                  >
                    <TymioUI.Grid columns={6} rows={1}>
                      <TymioUI.GridElem
                        offset={1}
                        height={30}
                        column={1}
                        xsColumn={2}
                      >
                        <TymioUI.DollarIcon />
                      </TymioUI.GridElem>
                      <TymioUI.GridElem
                        column={'span 4'}
                        lgTextAlign={'right'}
                        lgColumn={'span 3'}
                      >
                        {price} USDC
                      </TymioUI.GridElem>
                    </TymioUI.Grid>
                  </TymioUI.Button>
                ))}
              </TymioUI.Card.Body>
              <TymioUI.Card.Footer>
                <Styled.Label>Current price:</Styled.Label>
                <Styled.CautionLabel align={'right'}>
                  $ {currentPrice}
                </Styled.CautionLabel>
              </TymioUI.Card.Footer>
            </>
          )}
        </>
      </TymioUI.Card>
      {arrowDown && <TymioUI.TransitionArrow />}
    </>
  );
};

export default Prices;
