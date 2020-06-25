import {
  VALUE_CHANGE,
  SUGGESTION_FETCH,
  SUGGESTION_CLEAR,
  SUGGESTION_CHOOSED
} from "../actions/actionAutoInput";

const initState = {
  value: '',
  suggestions: [],
  suggestionWord: []
};

export default (state = initState, action) => {
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
      return initState;
    default:
      return state;
  }
};