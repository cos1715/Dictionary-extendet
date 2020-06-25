import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { progressReducer } from "./reducerProgress";
import { testReducer } from "./reducerTest";
import { autoInputReducer } from "./reducerAutoInput";

export const rootReducer = combineReducers({
  progressReducer,
  testReducer,
  autoInputReducer,
  form: formReducer
});
