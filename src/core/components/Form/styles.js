import styled, { css } from 'styled-components';
import Column from '../Container/Column';

export const Container = styled(Column)`
  position: relative;
  ${({ fitContent }) =>
    fitContent
      ? css`
          width: fit-content;
          height: fit-content;
        `
      : ''}}
  ${({ withoutPadding }) => (withoutPadding ? '' : 'padding-bottom: 20px;')}
`;
