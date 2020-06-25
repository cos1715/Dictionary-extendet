import {
  CORRECT_ANSWER,
  WRONG_ANSWER,
  START_AGAIN
} from "../actions/actionTest";
import { IAction } from "../models";

export interface ITestsStore {
  lives: number;
  score: number;
}

export const testsInitStore: ITestsStore = {
  lives: 3,
  score: 0
};

export const testReducer = (state = testsInitStore, action: IAction) => {
  switch (action.type) {
    case CORRECT_ANSWER:
      return { ...state, score: action.payload };
    case WRONG_ANSWER:
      return { ...state, lives: action.payload };
    case START_AGAIN:
      return testsInitStore;
    default:
      return state;
  }
};
