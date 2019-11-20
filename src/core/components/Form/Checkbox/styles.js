import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';

export const StyledCheckbox = styled(Checkbox)`
  background-color: transparent !important;
  padding: 0 !important;
  svg.MuiSvgIcon-root {
    color: ${({ theme }) => theme.color.primary};
  }
`;
