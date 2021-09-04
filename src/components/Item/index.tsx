import React from 'react';

import { Container } from './styles';

interface ItemType {
  name: string;
  path: string;
}

const Item: React.FC<ItemType> = ({ name, path }) => {
  console.log('entrou no item');
  console.log(name, path)
  return (
    <Container>
      {/* <li><a href={path}>{name}</a></li> */}
      {console.log('entrou no item')}
      <div>
        <h1>{name}</h1>
      </div>
      
      
    </Container>
  );
}

export default Item;