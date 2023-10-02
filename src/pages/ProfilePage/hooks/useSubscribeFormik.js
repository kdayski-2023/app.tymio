import { useFormik } from 'formik';
import * as Yup from 'yup';

const useSubscribeFormik = (subscription, submitForm) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    transaction_notifications: Yup.boolean(),
    news: Yup.boolean(),
  });

  const initialValues = {
    email: subscription.email,
    transaction_notifications: Boolean(subscription.transaction_notifications),
    news: Boolean(subscription.news),
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: submitForm,
  });

  return formik;
};

export default useSubscribeFormik;
