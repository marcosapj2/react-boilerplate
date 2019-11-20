import MaterialInput from '@material-ui/core/Input';
import styled from 'styled-components';

export const StyledInput = styled(MaterialInput)`
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  height: 40px;
  padding-left: 10px;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
