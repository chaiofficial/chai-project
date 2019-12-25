import { Action } from '@ngrx/store';
import { ReducerStateFactory } from '../factories/app.factory';

export const initialState: any = {
  flag: {
    enabled: false,
  },
};

export function reducer(state: any = initialState, action: Action): any {
  return ReducerStateFactory[action.type] ? ReducerStateFactory[action.type](state, action) : state;
}
