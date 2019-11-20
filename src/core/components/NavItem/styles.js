import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled(NavLink)`
  padding: 14px 0;
  display: flex;
  justify-content: center;

  &.active {
    background: #03775a;
  }
`;
