import { CounterScheme } from 'entities/counter';
import { UserScheme } from 'entities/user';
import { LoginScheme } from 'features/auth-by-username';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from 'entities/article';
import { AddCommentFormScheme } from 'features/add-comment-form';
import { ArticlesScheme } from 'pages/articles';
import { ScrollSaveScheme } from 'features/scroll-save';
import { ArticleDetailsPageScheme } from 'pages/article-details/model/types';
import { rtkApi } from 'shared/api/rtk-api';
import { ProfileScheme } from 'features/editable-profile-card';

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme,
    scrollSave: ScrollSaveScheme,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Async reducers
    loginForm?: LoginScheme
    profile?: ProfileScheme,
    articleDetails?: ArticleDetailsScheme
    addCommentForm?: AddCommentFormScheme,
    articles?: ArticlesScheme,
    articleDetailsPage?: ArticleDetailsPageScheme
}

export type StateSchemeKey = keyof StateScheme;

export type MountedReducers = OptionalRecord<StateSchemeKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>,
    add: (key: StateSchemeKey, reducer: Reducer) => void,
    remove: (key: StateSchemeKey) => void,
    // true - mounted, false - unmounted
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateScheme,
}
