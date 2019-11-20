import React from 'react';
import Error from './styles';

export default function LineError({ children, show, ...props }) {
  return show && <Error {...props}>{children}</Error>;
}
