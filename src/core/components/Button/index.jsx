import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export default function DefaultButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
};
