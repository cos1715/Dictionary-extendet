import { combineReducers } from "redux";
import reducerProgress from "./reducerProgress";
import reducerTest from "./reducerTest";
import reducerAutoInput from "./reducerAutoInput";

const allReducers = combineReducers({
  progress: reducerProgress,
  tests: reducerTest,
  autoInput: reducerAutoInput
});

export default allReducers;
