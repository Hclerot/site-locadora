import React from 'react';

import { Container } from './styles';

import NavBar from '../NavBar';
import Item from '../Item';
import Routes from '../../Routes';

const items = Routes;

const Home: React.FC = () => {
  return (
    <Container>
      <h1>this home</h1>
      <NavBar items={items} />
    </Container>
  );
}

export default Home;