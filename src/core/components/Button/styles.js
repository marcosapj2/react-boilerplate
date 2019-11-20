import MaterialButton from '@material-ui/core/Button';
import styled from 'styled-components';

export const Button = styled(MaterialButton)`
  background-image: linear-gradient(to bottom, #09a07f, #08e0b1);
  border-radius: 8px;
  border: 0;
  color: white;
  height: 40px;
  padding: 0 20px;
  font-family: 'Comfortaa';
  :hover {
    opacity: 0.8;
  }
  .MuiButton-label {
    text-transform: none;
    font-size: 16px;
  }
`;
