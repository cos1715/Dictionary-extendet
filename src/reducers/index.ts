import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { progressReducer } from './reducer-progress';
import { testReducer } from './reducer-test';
import { autoInputReducer } from './reducer-auto-input';

export const rootReducer = combineReducers({
  progressReducer,
  testReducer,
  autoInputReducer,
  form: formReducer
});
