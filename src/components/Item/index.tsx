import React from 'react';

import { Container } from './styles';

interface ItemType {
  name: string;
  path: string;
}

const Item: React.FC<ItemType> = ({ name, path }) => {
  return (
    <Container>
      <h1>meu cu é meu</h1>
      {/* <li><a href={path}>{name}</a></li> */}
      <div>
        <h1>{name}</h1>
        <h1>{path}</h1>
      </div>
      
    </Container>
  );
}

export default Item;