import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import css from './RegistrationForm.module.css';

const INITIAL_VALUES = {
  username: '',
  useremail: '',
  userpassword: '',
};

const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  userpassword: Yup.string()
    .min(8, 'Too short')
    .max(256, 'Too long')
    .required('Required'),
  useremail: Yup.string().email('Must be a valid email!').required('Required'),
});

const RegistrationForm = () => {
  const handleSubmit = (values, actions) => {
    // Get the required data for the userProfile object
    
    const name = values.username;
    const email = values.useremail;
    const password = values.userpassword;

    const userProfile = {
      name,
      email,
      password,
    };

    console.log(userProfile);

    actions.resetForm();
  };


  return (
    <main>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        <Form className={css.registretionForm}>
          <label className={css.label}>
            <span className={css.labelText}>Name</span>
            <Field
              type="text"
              name="username"
              placeholder="Enter your name"
              className={css.field}
            />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
          </label>
          <label className={css.label}>
            <span className={css.labelText}>Email</span>
            <Field
              type="email"
              name="useremail"
              placeholder="Enter your email"
              className={css.field}
            />
            <ErrorMessage
              name="useremail"
              component="span"
              className={css.error}
            />
          </label>
          <label className={css.label}>
            <span className={css.labelText}>Password</span>
            <Field
              type="password"
              name="userpassword"
              placeholder="Enter your password"
              className={css.field}
            />
            <ErrorMessage
              name="userpassword"
              component="span"
              className={css.error}
            />
          </label>
          <button type="submit" className={css.button}>
            Registration
          </button>
        </Form>
      </Formik>
    </main>
  );
};

export default RegistrationForm;
