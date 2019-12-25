import { AppActions } from '@app/store/actions/app.actions';

export const ReducerStateFactory = {
    [AppActions.SET_FLAG]: (state, action) => {
        return {
            ...state,
            flag: {
                ...state.flag,
                enabled: true,
            },
        };
    },
};


