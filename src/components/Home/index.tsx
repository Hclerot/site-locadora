import React from 'react';

import { Container } from './styles';
import LinhaCompleta from '../LinhaCompleta';
import Contato from '../Contato';

import cardImg from '../../images/painel-metalico-para-andaime-1-m.jpg';

const Home: React.FC = () => {
  return (
    <Container>
      <section>
        <h1>Produtos e Serviços</h1>
        <div className="produtos">
          <div className="produtos__card">
            <h2>Sapatas</h2>
            <img src={cardImg} className="produtos__card__img" />
            <p>
              Através da montagem de painéis metálicos e acessórios, obtemos os
              andaimes, que são plataformas necessárias para a execução de algum
              trabalho.
            </p>
          </div>
          <div className="produtos__card">
            <h2>Sapatas</h2>
            <img src={cardImg} className="produtos__card__img" />
            <p>
              Através da montagem de painéis metálicos e acessórios, obtemos os
              andaimes, que são plataformas necessárias para a execução de algum
              trabalho.
            </p>
          </div>
          <div className="produtos__card">
            <h2>Sapatas</h2>
            <img src={cardImg} className="produtos__card__img" />
            <p>
              Através da montagem de painéis metálicos e acessórios, obtemos os
              andaimes, que são plataformas necessárias para a execução de algum
              trabalho.
            </p>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="linha">
        <LinhaCompleta />
      </section>
      <hr></hr>
      <section>
        <Contato />
      </section>
    </Container>
  );
};

export default Home;
