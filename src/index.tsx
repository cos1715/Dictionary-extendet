import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import { configureStore } from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
