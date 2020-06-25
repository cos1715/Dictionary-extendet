export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const START_AGAIN = "START_AGAIN";

export const correctAnswer = score => {
  return {
    type: CORRECT_ANSWER,
    payload: score
  };
};

export const wrongAnswer = lives => {
  return {
    type: WRONG_ANSWER,
    payload: lives
  };
};

export const startAgain = () => {
  return {
    type: START_AGAIN,
    payload: null
  };
};