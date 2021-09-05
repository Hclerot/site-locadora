import styled from 'styled-components';

export const Container = styled.div`
  .linha {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &__container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      align-content: center;
      &__card {
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: rgb(73, 118, 190);
        &:hover {
          cursor: pointer;
          background-color: rgb(10, 69, 136);
          transition: 0.2s;
        }
      }
    }
  }
`;
