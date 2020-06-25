import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home";
import MyVocabulary from "../MyVocabulary";
import Tests from "../Tests";
import NotFound from "../../components/NotFound";

import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Switch>
    <Route exact path="/dictionary" component={Home} />
    <Route path="/dictionary/vocabulary" component={MyVocabulary} />
    <Route path="/dictionary/tests" component={Tests} />
    <Route component={NotFound} />
  </Switch>
);

export default App;