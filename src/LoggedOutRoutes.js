import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NoMatchPage from './pages/NoMatchPage';
import EntityCommonView from './views/entityCommonView';

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />;
    <Route exact path="/entity" component={EntityCommonView} />
    <Route component={NoMatchPage} />
  </Switch>
);

export default LoggedOutRoutes;
