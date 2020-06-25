import {
  LEARNED_NEW_WORD,
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
        learned: action.payload
      };
    default:
      return state;
  }
};
