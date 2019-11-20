import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
`;

export const ReactAnimation = styled.div`
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  animation: ${rotate} 8.2s linear infinite;
  div {
    position: absolute;
    border: 0.45rem #fff solid;
    height: 4rem;
    width: 11rem;
    border-radius: 250%;
    :nth-child(1) {
    }
    :nth-child(2) {
      transform: rotate(60deg);
    }
    :nth-child(3) {
      transform: rotate(-60deg);
    }
    :nth-child(4) {
      height: 2.2rem;
      width: 2.2rem;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
    }
  }
`;
