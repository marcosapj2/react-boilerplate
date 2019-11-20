import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoading } from './styles';

const Loading = ({ color, background }) => (
  <StyledLoading color={color} background={background}>
    Carregando
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </StyledLoading>
);

Loading.defaultProps = {
  color: '#fff',
  background: 'transparent',
};

Loading.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
};

export default Loading;
