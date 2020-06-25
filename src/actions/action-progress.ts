import { IWord } from '../models';

export const LEARNED_NEW_WORD = 'LEARNED_NEW_WORD';
export const SET_LEARNED_NEW_WORD = 'SET_LEARNED_NEW_WORD';

export const learnedNewWord = (word: IWord) => {
  return {
    type: LEARNED_NEW_WORD,
    payload: word
  };
};
