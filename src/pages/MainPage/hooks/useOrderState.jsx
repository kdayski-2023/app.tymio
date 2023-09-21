// import { useState, useEffect } from 'react';

// import * as Service from '../../../services';

const useOrderState = () =>
  // setSubmitError
  {
    // const [attemptId, setAttemptId] = useState(null);
    // useEffect(() => {
    //   const order$ = Service.OrderService.orderState$.subscribe((state) => {
    //     setAttemptId(state.id);
    //     if (state.error) {
    //       setSubmitError(state.error);
    //       Service.MessageDialogService.showError(state.error);
    //     }
    //   });

    //   return () => {
    //     order$.unsubscribe();
    //   };
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return {
      // attemptId
    };
  };

export default useOrderState;
