import { Formik, Form, Field } from 'formik';
import css from './LoginForm.module.css';

const INITIAL_VALUES = {
  useremail: '',
  userpassword: '',
};

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const LoginForm = () => {
  return (
    <main>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form className={css.loginForm}>
          <label className={css.label}>
            <span className={css.labelText}>Email</span>
            <Field
              type="email"
              name="useremail"
              placeholder="Enter your email"
              className={css.field}
            ></Field>
          </label>
          <label className={css.label}>
            <span className={css.labelText}>Password</span>
            <Field
              type="password"
              name="userpassword"
              placeholder="Enter your password"
              className={css.field}
            ></Field>
          </label>
          <button type="submit" className={css.button}>
            Log In
          </button>
        </Form>
      </Formik>
    </main>
  );
};

export default LoginForm;
