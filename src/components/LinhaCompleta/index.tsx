import React from 'react';

import { Container } from './styles';

const LinhaCompleta: React.FC = () => {
  return (
    <Container>
      <section className="linha">
        <h1>Linha Completa</h1>
        <div className="linha__container">
          <div className="linha__container__card">Andaimes</div>
          <div className="linha__container__card">Concretagem</div>
          <div className="linha__container__card">Demolicao</div>
          <div className="linha__container__card">Compactacao</div>
          <div className="linha__container__card">Acesso e Elevacao</div>
          <div className="linha__container__card">
            Gerador, Bomba e Compressor
          </div>
          <div className="linha__container__card">
            Ferramentas para Jardinagem
          </div>
          <div className="linha__container__card">Ferramentas para Limpeza</div>
          <div className="linha__container__card">Ferramentas Eletricas</div>
          <div className="linha__container__card">Outros Equipamentos</div>
        </div>
      </section>
    </Container>
  );
};

export default LinhaCompleta;
