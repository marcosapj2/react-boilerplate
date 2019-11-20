import React from 'react';
import { StyledInput } from './styles';
import withFormik from '../withFormik';

const Input = props => {
  return (
    <StyledInput autoComplete="new-password" disableUnderline {...props} />
  );
};

export default withFormik(Input);
