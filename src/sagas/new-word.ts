import { takeLatest, put, select } from 'redux-saga/effects';
import {
  LEARNED_NEW_WORD,
  SET_LEARNED_NEW_WORD
} from '../actions/action-progress';
import { IInitialStore } from '../store';
import { IWord, IAction } from '../models';

export function* newWordSaga(action: IAction<IWord>) {
  const learned: IWord[] = yield select(
    (store: IInitialStore) => store.progress.learned
  );
  const isLearned = learned.some(word => word.eng === action.payload.eng);
  if (!isLearned) {
    const newLearned = [...learned, action.payload];
    yield put({
      type: SET_LEARNED_NEW_WORD,
      payload: newLearned
    });
  }
}

export function* newWordSagaWatcher() {
  yield takeLatest(LEARNED_NEW_WORD, newWordSaga);
}
