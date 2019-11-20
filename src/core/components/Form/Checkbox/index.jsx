import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox } from './styles';
import withFormik from '../withFormik';

const Checkbox = ({ value, ...props }) => {
  return <StyledCheckbox checked={value} value={value} {...props} />;
};
Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
};

export default withFormik(Checkbox, true);
