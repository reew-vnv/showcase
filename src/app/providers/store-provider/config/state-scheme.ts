import { CounterScheme } from 'entities/counter';
import { UserScheme } from 'entities/user';
import { LoginScheme } from 'features/auth_by_username';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme,

    // Async reducers
    loginForm?: LoginScheme
}

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>,
    add: (key: StateSchemeKey, reducer: Reducer) => void,
    remove: (key: StateSchemeKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager
}
