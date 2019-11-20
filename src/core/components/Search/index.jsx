import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Container, Search } from './styles';

function SearchInput({ placeholder, onChange, value }) {
  return (
    <Container>
      <Search placeholder={placeholder} onChange={onChange} value={value} />
      <IoIosSearch size={20} />
    </Container>
  );
}

export default SearchInput;
