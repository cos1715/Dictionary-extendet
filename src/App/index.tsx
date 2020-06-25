import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CONST } from '../const';
import { ROUTES } from '../routes';
import { HomeContainer } from '../containers/home';
import MyVocabulary from '../containers/MyVocabulary';
import Tests from '../containers/Tests';
import NotFound from '../components/NotFound';

import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = () => (
  <>
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
    <ToastContainer
      position="top-right"
      autoClose={CONST.snackbarAutoClose}
      hideProgressBar
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
    />
  </>
);
