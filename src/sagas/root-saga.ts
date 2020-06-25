import { all } from 'redux-saga/effects';
import { newWordSagaWatcher } from '../sagas';

export function* rootSaga() {
  yield all([newWordSagaWatcher()]);
}
