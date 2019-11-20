import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #d8d8d8;
  justify-content: center;
`;

export const Search = styled.input`
  display: flex;
  width: 100%;
  border: none;
  padding: 20px;

  @media (max-width: 900px) {
    padding: 0;
  }
`;
