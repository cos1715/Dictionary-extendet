import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers/index";

const setupStore = () => {
  return createStore(
    allReducers,
    composeWithDevTools()
  );
}

export default setupStore;
