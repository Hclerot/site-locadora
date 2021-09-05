import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);

  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header {
    padding: 1rem;

    &__logo {
      width: 50%;
    }
  }
`;
