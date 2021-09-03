import React from 'react';

import { Container } from './styles';

import NavBar from '../NavBar';

const items = [
  {
    name: 'home',
    path: '/home'
  },

  {
    name: 'Assistencia',
    path: '/Assistencia'
  },

  {
    name: 'Linha Completa',
    path: '/LinhaCompleta',
  },

  {
    name: 'Contato',
    path: '/Contato'
  }
]

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar items={items} />
    </Container>
  );
}

export default Home;