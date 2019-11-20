import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
`;

export const StyledLoading = styled.div`
  color: ${({ color }) => color};
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  align-items: center;
  padding-bottom: 500px;
  justify-content: center;
  top: 0;
  bottom: 0;
  flex: 1;
  background: ${({ background }) => background};

  span {
    animation: ${opacity} 1.4s infinite both;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
