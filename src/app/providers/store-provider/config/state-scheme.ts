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
import { ProfileScheme } from 'entities/profile';
import { AxiosInstance } from 'axios';
import { To } from 'history';
import { NavigateOptions } from 'react-router-dom';
import { ArticleDetailsScheme } from 'entities/article';
import { ArticleDetailsCommentScheme } from 'pages/article-details';
import { AddCommentFormScheme } from 'features/add-comment-form';
import { ArticlesScheme } from 'pages/articles';

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme,

    // Async reducers
    loginForm?: LoginScheme
    profile?: ProfileScheme,
    articleDetails?: ArticleDetailsScheme
    articleDetailsComments?: ArticleDetailsCommentScheme,
    addCommentForm?: AddCommentFormScheme,
    articles?: ArticlesScheme
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

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateScheme,
}
