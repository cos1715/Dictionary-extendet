export const LEARNED_NEW_WORD = "LEARNED_NEW_WORD";

export const learnedNewWord = item => {
  return {
    type: LEARNED_NEW_WORD,
    payload: item
  };
};
