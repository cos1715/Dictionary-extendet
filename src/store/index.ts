import {
  IProgressStore,
  progressInitStore
} from '../reducers/reducer-progress';
import { ITestsStore, testsInitStore } from '../reducers/reducer-test';
import {
  IAutoInputStore,
  autoInputInitStore
} from '../reducers/reducer-auto-input';

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
