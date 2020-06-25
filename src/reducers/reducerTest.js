import { CORRECT_ANSWER, WRONG_ANSWER, START_AGAIN } from "../actions/actionTest";

const initState = {
  lives: 3,
  score: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case CORRECT_ANSWER:
      return { ...state, score: action.payload };
    case WRONG_ANSWER:
      return { ...state, lives: action.payload };
    case START_AGAIN:
      return initState;
    default:
      return state;
  }
};