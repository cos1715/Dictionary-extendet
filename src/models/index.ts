export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IWord {
  eng: string;
  ukr: string;
  definition: string;
}
