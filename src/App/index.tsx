import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from '../routes';
import { HomeContainer } from '../containers/Home';
import MyVocabulary from '../containers/MyVocabulary';
import Tests from '../containers/Tests';
import NotFound from '../components/NotFound';

import 'react-toastify/dist/ReactToastify.css';

export const App = () => (
  <Switch>
    <Redirect exact from={ROUTES.rootRoute} to={ROUTES.entryRoute} />
    <Route exact path={ROUTES.entryRoute}>
      <HomeContainer />
    </Route>
    {/* <Route
      path={ROUTES.entryRoute + ROUTES.vocabulary}
      component={MyVocabulary}
    />
    <Route path={ROUTES.entryRoute + ROUTES.tests} component={Tests} /> */}
    <Route component={NotFound} />
  </Switch>
);
