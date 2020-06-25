import { takeLatest, put, select, take } from 'redux-saga/effects';
import {
  LEARNED_NEW_WORD,
  SET_LEARNED_NEW_WORD,
  UPDATE_LEFT_TO_LEARN_WORDS,
  UPDATED_LEFT_TO_LEARN_WORDS
} from '../actions/action-progress';
import { IInitialStore } from '../store';
import { IWord, IAction } from '../models';
import { IProgressStore } from '../reducers/reducer-progress';

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

export function* removeWordSaga(action: IAction<IWord>) {
  const { learned, leftToLearn }: IProgressStore = yield select(
    (store: IInitialStore) => store.progress
  );
  const filteredWords = leftToLearn.filter(word => {
    return !learned.some(learnedWord => learnedWord.eng === word.eng);
  });
  yield put({
    type: UPDATED_LEFT_TO_LEARN_WORDS,
    payload: filteredWords
  });
}

export function* newWordSagaWatcher() {
  yield takeLatest(LEARNED_NEW_WORD, newWordSaga);
  yield takeLatest(UPDATE_LEFT_TO_LEARN_WORDS, removeWordSaga);
}
