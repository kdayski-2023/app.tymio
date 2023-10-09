import { useFormik } from 'formik';
import * as Yup from 'yup';

const useAirdropFormik = (airdrop_participant, submitForm) => {
	const validationSchema = Yup.object().shape({
		share_link: Yup.string().url('Invalid URL format').nullable(),
	});

	const initialValues = {
		share_link: airdrop_participant.share_link,
	};

	const formik = useFormik({
		initialValues,
		validationSchema: validationSchema,
		validateOnMount: true,
		onSubmit: submitForm,
	});

	return formik;
};

export default useAirdropFormik;
