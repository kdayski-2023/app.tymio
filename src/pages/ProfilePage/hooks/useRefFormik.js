import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	referral: Yup.string()
		.required('Required')
		.matches(
			/^[A-Za-z0-9]+$/,
			'Referral code must contain only alphabetic characters and numbers',
		)
		.test(
			'length-check',
			'Referral code must be at least 6 characters long',
			(value) => value && value.length >= 6,
		)
		.test(
			'length-check2',
			'Referral code must be at most 15 characters long',
			(value) => value && value.length <= 15,
		),
});

const useRefFormik = () => {
	const formik = useFormik({
		initialValues: {
			referral: '',
		},
		validationSchema,
		validateOnMount: false,
		onSubmit: async (values) => {
			console.log(values);
		},
	});

	return formik;
};

export default useRefFormik;
