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
      <Item name="home" path="nsei" />
      {
          items.map((item)=>{
            
            return <Item name={item.name} path={item.path} />
            console.log('entrou no map', item.name)
            ;
          })
      }

    </Container>
  )
}

export default NavBar;