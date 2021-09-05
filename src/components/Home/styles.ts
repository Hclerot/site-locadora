import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: var(--bg);
  height: 100%;
  color: var(--text-color);
  flex-direction: column;
  section {
    text-align: center;
    margin-top: 4rem;
  }

  .linha {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .produtos {
    margin: 0 20rem 0;
    display: flex;
    justify-content: center;
    &__card {
      margin: 0 2rem 0;
      background: #ccc;
      padding: 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      &__img {
        max-width: 300px;
      }
    }
  }
`;
