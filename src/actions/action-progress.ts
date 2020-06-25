import { IWord } from '../models';

export const LEARNED_NEW_WORD = 'LEARNED_NEW_WORD';
export const SET_LEARNED_NEW_WORD = 'SET_LEARNED_NEW_WORD';
export const UPDATE_LEFT_TO_LEARN_WORDS = 'UPDATE_LEFT_TO_LEARN_WORDS';
export const UPDATED_LEFT_TO_LEARN_WORDS = 'UPDATED_LEFT_TO_LEARN_WORDS';

export const learnedNewWord = (word: IWord) => {
  return {
    type: LEARNED_NEW_WORD,
    payload: word
  };
};

export const updateLeftToLearn = () => {
  return {
    type: UPDATE_LEFT_TO_LEARN_WORDS,
    payload: null
  };
};
