import { useFormik } from 'formik';
import * as Yup from 'yup';

const useSubscribeFormik = (subscription, submitForm) => {
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Please enter the a valid e-mail address'),
		transaction_notifications: Yup.boolean(),
		news: Yup.boolean(),
		terms: Yup.boolean(),
	});

	const initialValues = {
		email: subscription.email,
		transaction_notifications: Boolean(subscription.transaction_notifications),
		news: Boolean(subscription.news),
		terms: Boolean(subscription.terms),
	};

	const formik = useFormik({
		initialValues,
		validationSchema: validationSchema,
		validateOnMount: false,
		validateOnChange: false,
		onSubmit: submitForm,
	});

	return formik;
};

export default useSubscribeFormik;
