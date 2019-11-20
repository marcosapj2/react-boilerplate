import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './styles';

const NavItem = ({ to, color, size, icon: Icon }) => {
  return (
    <Item to={{ pathname: to }}>
      <Icon color={color} size={size} />
    </Item>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  icon: PropTypes.func.isRequired,
};
export default NavItem;
