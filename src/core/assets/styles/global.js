import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    background: #ebebeb;
    -webkit-font-smoothing: antialiased !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;

  }

  body, input, button {
    color: #fff;
    font-size: 14px;
    background: black;
    font-family: 'Megante';
  }

  button {
    cursor: pointer;
  }
`;
