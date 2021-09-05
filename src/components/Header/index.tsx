import React from 'react';

import { Container } from './styles';
import Routes from '../../Routes';
import NavBar from '../NavBar';

import logo from '../../images/logo-ideall.png';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} className="header__logo" />
      </div>
      <NavBar items={Routes} />
    </Container>
  );
};

export default Header;
