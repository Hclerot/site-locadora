import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, #root {
    max-width: 100vw;
    max-height: 2000px;

    width: 100%;
    height: 100%;
  }
  
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  :root {
    --primary: #ed3237;
    --secondary: #C41F24;
    --white: #f0f0f0;
    --black: #000000;
    --speed: 500ms;
    --border-radius: .5rem;
    --border: 1px solid #474a4d;
    --bg: #242526;
    --bg-accent: #484a4d;
    --nav-size: 3.75rem;
    --text-color: #dadce1;
  }
`;
