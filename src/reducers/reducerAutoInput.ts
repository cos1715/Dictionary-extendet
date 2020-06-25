import {
  VALUE_CHANGE,
  SUGGESTION_FETCH,
  SUGGESTION_CLEAR,
  SUGGESTION_CHOOSED
} from '../actions/actionAutoInput';
import { IAction } from '../models';

export interface IAutoInputStore {
  value: string;
  suggestions: any[];
  suggestionWord: any[];
}

export const autoInputInitStore: IAutoInputStore = {
  value: '',
  suggestions: [],
  suggestionWord: []
};

export const autoInputReducer = (
  state = autoInputInitStore,
  action: IAction
) => {
  switch (action.type) {
    case VALUE_CHANGE:
      return { ...state, value: action.payload };
    case SUGGESTION_FETCH:
      return { ...state, suggestions: action.payload };
    case SUGGESTION_CHOOSED:
      const suggestionWord = [];

      suggestionWord.push(action.payload);
      return { ...state, suggestionWord: suggestionWord };
    case SUGGESTION_CLEAR:
      return autoInputInitStore;
    default:
      return state;
  }
};
