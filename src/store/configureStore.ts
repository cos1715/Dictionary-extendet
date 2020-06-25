import { applyMiddleware, compose, createStore, Store, Action } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/index';
import { initialStore } from '../store';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  // const middleware = [sagaMiddleware];
  // const middlewareEnhancer = composeWithDevTools(
  //   applyMiddleware(...middleware)
  // );
  // const enhancers = [middlewareEnhancer];
  // const composedEnhancers = compose(...enhancers);

  // const store = createStore(rootReducer, initialStore, composedEnhancers);

  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
    // composeWithDevTools(
    //   applyMiddleware(sagaMiddleware)
    // )
  );

  return store;
};
