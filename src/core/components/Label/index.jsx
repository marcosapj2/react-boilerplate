import React from 'react';
import Label from './styles';

export default function({ children, show, ...props }) {
  return show && <Label {...props}>{children}</Label>;
}
