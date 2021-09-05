import styled from 'styled-components';

export const Container = styled.div`
  .contato {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    background: var(--primary);
    &__container {
      display: flex;
      justify-content: space-between;

      margin: 0 2rem 0;
      &__left {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 2rem 0;
      }
      &__right {
        margin: 2rem 2rem 0;
        &__endereco {
          margin: 2rem 2rem 0;
        }

        &__orcamento {
          margin: 2rem 2rem 0;
          border-top: solid 1rem var(--primary);
          padding-top: 1rem;
        }
      }
    }
  }
`;
