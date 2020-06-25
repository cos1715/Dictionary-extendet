export const VALUE_CHANGE = "VALUE_CHANGE";
export const SUGGESTION_FETCH = "SUGGESTION_FETCH";
export const SUGGESTION_CLEAR = "SUGGESTION_CLEAR";
export const SUGGESTION_CHOOSED = "SUGGESTION_CHOOSED";

export const valueChange = value => {
  return {
    type: VALUE_CHANGE,
    payload: value
  };
};

export const onSuggestionsFetchRequested = value => {
  return {
    type: SUGGESTION_FETCH,
    payload: value
  };
};

export const onSuggestionsClear = () => {
  return {
    type: SUGGESTION_CLEAR,
    payload: null
  };
};

export const suggestionsChoosed = value => {
  return {
    type: SUGGESTION_CHOOSED,
    payload: value
  };
};

