import React from 'react';

import { Container } from './styles';
import Mapa from '../Mapa';

const Contato: React.FC = () => {
  return (
    <Container>
      <section className="contato">
        <h1>Fale Conosco</h1>
        <div className="contato__container">
          <form action="#" className="contato__container__left">
            <h4>Fale Conosco</h4>
            <p>
              Para solicitar orçamento, informação ou fazer um comentário, por
              favor preencha o fomulário:
            </p>
            <input type="text" name="nome" id="nome" placeholder="Nome" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="tel" name="fone" id="fone" placeholder="Telefone" />
            <textarea
              name="mensagem"
              id="mensagem"
              cols={30}
              rows={5}
              placeholder="Mensagem"
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
          <div className="contato__container__right">
            <p className="contato__container__right__endereco">
              Nossas unidades em Brasília ASA SUL - 61.3346-4000 CLS 312, Bloco
              B, Loja 04, Asa Sul ​ SAMAMBAIA - 61.3357-1000 QI 616, Cj. G, Lote
              02 - Samambaia Norte
            </p>
            <p className="contato__container__right__orcamento">
              Orçamento rápido e gratuito via WhatsApp (61) 99246-5612 ou clique
              <button>
                <a href="http://bit.ly/2HR4LXp" target="_blank">
                  whatsapp
                </a>
              </button>
            </p>
          </div>
        </div>
      </section>
      <div>
        <Mapa />
      </div>
    </Container>
  );
};

export default Contato;
