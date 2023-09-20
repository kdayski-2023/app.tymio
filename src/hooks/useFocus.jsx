import { useEffect } from 'react';

const useFocus = (loading, ref, toggle = false) => {
  useEffect(() => {
    if (loading && ref.current) {
      if (toggle) ref.current.blur();
      ref.current.disabled = true;
    }
    if (!loading && ref.current) {
      if (toggle) ref.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, ref]);
};

export default useFocus;
