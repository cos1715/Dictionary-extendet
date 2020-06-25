import words from '../words';
import { LEARNED_NEW_WORD } from "../actions/actionProgress";

const initState = {
  leftToLearn: words,
  learned: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case LEARNED_NEW_WORD:
      return { ...action.payload };
    default:
      return state;
  }
};