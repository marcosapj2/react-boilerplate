import React from 'react';
import { ReactAnimation } from 'components';
import { Container, MainTitle } from './styles';

function Home() {
  return (
    <Container>
      <MainTitle>Hello, World!</MainTitle>
      <ReactAnimation />
    </Container>
  );
}

export default Home;
