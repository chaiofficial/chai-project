import * as fromApp from './app.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState;
  app: any;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  app: fromApp.reducer,
};

export const getAppState = (state: AppState) => state;

export const metaReducers: MetaReducer<AppState>[] = [];
