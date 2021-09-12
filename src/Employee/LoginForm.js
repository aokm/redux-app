import React from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>お名前：</label>
        <Field name="age" component="input" type="text" />
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'sampleReduxForm',
})(LoginForm);

export default LoginForm;
