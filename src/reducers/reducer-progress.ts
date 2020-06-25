import { LEARNED_NEW_WORD } from '../actions/action-progress';
import { words, IWord } from '../assets/words';
import { IAction } from '../models';

export interface IProgressStore {
  leftToLearn: IWord[];
  learned: IWord[];
}

export const progressInitStore: IProgressStore = {
  leftToLearn: words,
  learned: []
};

export const progressReducer = (state = progressInitStore, action: IAction) => {
  switch (action.type) {
    case LEARNED_NEW_WORD:
      return { ...action.payload };
    default:
      return state;
  }
};
