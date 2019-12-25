import { createSelector } from '@ngrx/store';
import { getAppState } from '@app/store/reducers';

export const appState = createSelector(
    getAppState,
    state => state
);
