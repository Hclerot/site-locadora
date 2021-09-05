import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Home from './components/Home';
import Assistencia from './components/Assistencia';
import Contato from './components/Contato';
import LinhaCompleta from './components/LinhaCompleta';
import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './Routes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const [home, assistencia, linhaCompleta, contato] = Routes;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <body>
        <Header />
        <Switch>
          <Route exact path={home.path}>
            <Home />
          </Route>
          <Route exact path={assistencia.path}>
            <Assistencia />
          </Route>
          <Route exact path={linhaCompleta.path}>
            <LinhaCompleta />
          </Route>
          <Route exact path={contato.path}>
            <Contato />
          </Route>
        </Switch>
        <Footer />
      </body>
    </Router>
  );
}

export default App;
