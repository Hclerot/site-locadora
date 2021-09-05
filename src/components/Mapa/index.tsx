import React from 'react';
import Iframe from 'react-iframe';

// import { Container } from './styles';

const Mapa: React.FC = () => {
  return (
    <Iframe
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.4922595496128!2d-48.9608247847116!3d-16.348867588708664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea49db08b05a9%3A0xc976a7336e394281!2sLocadora%20Ideall!5e0!3m2!1spt-BR!2sbr!4v1630810533410!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      styles={{
        border: '0',
        width: '50%',
        marginTop: '4rem',
        maxHeight: '20rem',
      }}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default Mapa;
