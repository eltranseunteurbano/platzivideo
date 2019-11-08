import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import Register from '../containers/Register/Register';
import NotFound from '../containers/NotFound/NotFound';

import Layout from '../components/Layout/Layout';
import Player from '../components/Player/Player';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component = { Home } />}
          <Route exact path="/login" component = { Login } />
          <Route exact path="/register" component = { Register } />
          <Route exact path="/player/:id" component = { Player } />
          <Route component = { NotFound } />
        </Switch>
      </Layout>
    </BrowserRouter>
  </React.Fragment>
)

export default App;