import * as Hook from '../../../hooks';
import * as LocalHook from '.';

const useMainPage = ({
	setSubmitError,
	loading,
	setLoading,
	setWaitSubmit,
	config,
	setSuccess,
}) => {
	const wallet = Hook.useWallet();
	const orderAvailable = LocalHook.useOrderAvailable();

	LocalHook.useOrderState(setSubmitError);

	const formik = LocalHook.useFormik({
		setSubmitError,
		loading,
		setLoading,
		setWaitSubmit,
		wallet,
		orderAvailable,
		config,
		setSuccess,
	});

	return {
		formik,
		...formik.values,
		walletError: wallet.error,
		userOrderLoading: orderAvailable.loading,
		orderAvailableError: orderAvailable.error,
	};
};

export default useMainPage;
