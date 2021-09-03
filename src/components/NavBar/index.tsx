import React from 'react';

import { Container } from './styles';
import Item from '../Item';

interface NavBarItem {
  name: string;
  path: string;
}

interface NavBarProps {
  items: NavBarItem[];
}

const NavBar: React.FC<NavBarProps> = ({items}) => {

  return (
    <Container>
      {items.map(item=>{
        <Item {...item} />
      })}
    </Container>
  )
}

export default NavBar;