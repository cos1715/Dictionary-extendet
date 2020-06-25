import { IProgressStore, progressInitStore } from '../reducers/reducerProgress';
import { ITestsStore, testsInitStore } from '../reducers/reducerTest';
import {
  IAutoInputStore,
  autoInputInitStore
} from '../reducers/reducerAutoInput';

export interface IInitialStore {
  progress: IProgressStore;
  tests: ITestsStore;
  autoInput: IAutoInputStore;
  form?: any;
}

export const initialStore: IInitialStore = {
  progress: progressInitStore,
  tests: testsInitStore,
  autoInput: autoInputInitStore
};
