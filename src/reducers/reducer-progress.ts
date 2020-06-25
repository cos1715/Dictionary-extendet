import {
  UPDATED_LEFT_TO_LEARN_WORDS,
  SET_LEARNED_NEW_WORD
} from '../actions/action-progress';
import { words } from '../assets/words';
import { IAction, IWord } from '../models';

export interface IProgressStore {
  leftToLearn: IWord[];
  learned: IWord[];
}

export const progressInitStore: IProgressStore = {
  leftToLearn: words,
  learned: []
};

export const progressReducer = (
  state = progressInitStore,
  action: IAction<any>
) => {
  switch (action.type) {
    case SET_LEARNED_NEW_WORD:
      return {
        ...state,
        learned: action.payload || []
      };
    case UPDATED_LEFT_TO_LEARN_WORDS:
      return {
        ...state,
        leftToLearn: action.payload || []
      };
    default:
      return state;
  }
};
