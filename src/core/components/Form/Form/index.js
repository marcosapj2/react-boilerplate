import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

const CustomForm = ({ children, ...props }) => {
  return (
    <Formik {...props}>
      {formProps => <Form>{children(formProps)}</Form>}
    </Formik>
  );
};

CustomForm.propTypes = {
  children: PropTypes.func.isRequired,
};

export default CustomForm;
