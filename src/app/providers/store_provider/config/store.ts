import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { StateScheme } from './state_scheme';

export const createReduxStore = (initialState?: StateScheme) => configureStore<StateScheme>({
    reducer: {
        counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
