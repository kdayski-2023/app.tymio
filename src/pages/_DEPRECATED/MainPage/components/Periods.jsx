import React, { useEffect, useRef, useState } from 'react';

import { useFocus, useWallet } from '../../../hooks';
import * as Hook from '../hooks';
import * as Styled from '../styled';
import * as TymioUI from '../../../components';

const Periods = ({
  formik,
  arrowDown,
  loading: orderLoading,
  amountFocused,
  unfilledFields,
  setUnfilledFields,
}) => {
  const ref = useRef();
  useFocus(orderLoading, ref);
  const { userAddress } = useWallet();
  const { error, loading, periods } = Hook.usePeriods();
  const [earnPercent, setEarnPercent] = useState(0);

  useEffect(() => {
    setEarnPercent(0);
  }, [formik.values.price]);

  useEffect(() => {
    formik.setFieldValue('period', 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAddress]);

  const chosePeriod = (period) => {
    formik.setFieldValue('period', period.timestamp);
    setUnfilledFields(
      unfilledFields.filter((unfilled) => unfilled !== 'period')
    );
    setEarnPercent(period.earnPercent);
  };

  return (
    <>
      <TymioUI.Card unfilled={unfilledFields.includes('period')}>
        <TymioUI.Card.Header>
          <TymioUI.Grid columns={3} rows={1}>
            <TymioUI.GridElem textAlign={'left'} column={1} inline>
              <Styled.Label>Time:</Styled.Label>
            </TymioUI.GridElem>
            <TymioUI.GridElem textAlign={'center'} column={2} inline>
              <Styled.Label>APR</Styled.Label>
            </TymioUI.GridElem>
            <TymioUI.GridElem textAlign={'right'} column={3} inline>
              <Styled.Label>You earn</Styled.Label>
            </TymioUI.GridElem>
          </TymioUI.Grid>
        </TymioUI.Card.Header>
        {loading && <TymioUI.LoadingSpinner />}

        {error && <TymioUI.Message message={error} />}

        {!loading && !error && (
          <TymioUI.Card.Body>
            {periods.map((period, index) => (
              <React.Fragment key={index}>
                {period.recieve && period.apr ? (
                  <TymioUI.Button
                    disabled={orderLoading || amountFocused}
                    ref={ref}
                    key={index}
                    type="button"
                    active={
                      formik.values.period === period.timestamp
                        ? 'true'
                        : undefined
                    }
                    onClick={() => chosePeriod(period)}
                  >
                    <TymioUI.Grid columns={3} rows={1}>
                      <TymioUI.GridElem textAlign={'left'} column={1} inline>
                        <Styled.PeriodButtonText>
                          {period.title}
                        </Styled.PeriodButtonText>
                      </TymioUI.GridElem>
                      <TymioUI.GridElem textAlign={'center'} column={2}>
                        {period.apr}%
                      </TymioUI.GridElem>
                      <TymioUI.GridElem textAlign={'right'} column={3} inline>
                        <Styled.PeriodButtonText>
                          {Math.floor(parseFloat(period.recieve))}$
                        </Styled.PeriodButtonText>
                      </TymioUI.GridElem>
                    </TymioUI.Grid>
                  </TymioUI.Button>
                ) : (
                  <></>
                )}
              </React.Fragment>
            ))}
            {!periods.filter((period) => period.recieve).length ? (
              <Styled.CautionLabel align={'center'}>
                No dates found
              </Styled.CautionLabel>
            ) : (
              <></>
            )}
          </TymioUI.Card.Body>
        )}
        {earnPercent ? (
          <TymioUI.Card.Footer>
            <Styled.Label>Earn:</Styled.Label>
            <Styled.CautionLabel align={'right'}>
              {earnPercent} %
            </Styled.CautionLabel>
          </TymioUI.Card.Footer>
        ) : null}
      </TymioUI.Card>
      {arrowDown && <TymioUI.TransitionArrow />}
    </>
  );
};

export default Periods;
