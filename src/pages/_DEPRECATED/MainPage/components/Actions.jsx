import React, { useState, useEffect } from 'react';

import { WalletService, MessageDialogService } from '../../../services';
import { useWallet } from '../../../hooks';
import * as TymioUI from '../../../components';

const Actions = ({
  formik,
  error: submitError,
  loading: mainDataLoading,
  waitSubmit,
  amountFocused,
  setUnfilledFields
}) => {
  const { error, connected } = useWallet();

  const [loading, setLoading] = useState(mainDataLoading);
  const [waitProcess, setWaitProcess] = useState(waitSubmit);
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    setButtonText(connected ? 'Confirm' : 'Connect Wallet');
  }, [connected]);

  useEffect(() => {
    setLoading(mainDataLoading);
  }, [mainDataLoading]);

  useEffect(() => {
    if (submitError) {
      setWaitProcess(false);
    }
  }, [submitError]);

  useEffect(() => {
    setWaitProcess(formik.isSubmitting);
  }, [formik.isSubmitting]);

  const clickHandler = async () => {
    setWaitProcess(true);
    if (connected && formik.isValid) {
      await formik.handleSubmit(setWaitProcess);
    }
    if (connected && !formik.isValid) {
      const unfilledFields = Object.keys(formik.errors)
      setUnfilledFields(unfilledFields)
      // let errorMessage = '';
      // unfilledFields.forEach(
      //   (key) => (errorMessage += formik.errors[key] + ', ')
      // );
      // errorMessage = errorMessage.substring(0, errorMessage.length - 2);
      // MessageDialogService.showError(errorMessage);
      setWaitProcess(false);
    }
    if (!connected) {
      await WalletService.connect();
      setWaitProcess(false);
    }
  };

  return (
    <>
      {error && <TymioUI.Message message={error} />}

      {!error && (
        <TymioUI.Card background={'inherit'}>
          <TymioUI.Button
            waitProcess={waitProcess}
            type="button"
            disabled={loading || error || amountFocused}
            main
            onClick={clickHandler}
          >
            {waitProcess && (
              <>
                {'Deal pending...'}{' '}
                <TymioUI.LoadingSpinner waitProcess={waitProcess} size={'xs'} />
              </>
            )}
            {!waitProcess && buttonText}
          </TymioUI.Button>
        </TymioUI.Card>
      )}
    </>
  );
};

export default Actions;
