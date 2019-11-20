import styled from 'styled-components';

export default styled.label`
  ${({ block }) => (block ? '' : 'position: absolute;')}
  color: ${({ theme }) => theme.color.red};
  top: 105%;
  font-size: 12px;
`;
