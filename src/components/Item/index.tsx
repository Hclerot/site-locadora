import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

interface ItemType {
  name: string;
  path: string;
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  padding: '2em',
};

const Item: React.FC<ItemType> = ({ name, path }) => {
  console.log('entrou no item');
  console.log(name, path);
  return (
    <Container>
      {/* <li><a href={path}>{name}</a></li> */}
      {console.log('entrou no item')}
      <div className="link">
        <Link to={path} style={linkStyle}>
          {name}
        </Link>
      </div>
    </Container>
  );
};

export default Item;
