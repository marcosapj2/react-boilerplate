import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import Label from '../Label';
import LineError from '../LineError';
import { Container } from './styles';

const withFormik = (Component, fitContent) => {
  const FieldGroup = ({ width, label, withoutPadding, ...props }) => {
    const [field, meta] = useField(props);
    const error = meta.touched && meta.error;

    return (
      <Container
        fitContent={fitContent}
        width={width}
        withoutPadding={withoutPadding}
      >
        <Label htmlFor={field.name} show={!!label} hasError={!!error}>
          {label}
        </Label>
        <Component {...field} {...props} />
        <LineError show={!!error}>{error}</LineError>
      </Container>
    );
  };

  FieldGroup.defaultProps = {
    label: '',
    width: '',
    withoutPadding: false,
  };
  FieldGroup.propTypes = {
    label: PropTypes.string,
    withoutPadding: PropTypes.bool,
    width: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

  return FieldGroup;
};

export default withFormik;
