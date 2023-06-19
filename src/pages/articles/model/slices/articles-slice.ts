import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/store-provider';
import { Article, ArticleView } from 'entities/article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticleSortField, ArticleType } from 'entities/article/model/types/article';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from '../../model/services/fetch-articles-list';
import { ArticlesScheme } from '../types/articles-scheme';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateScheme>(
    (state) => state.articles || articlesAdapter.getInitialState(),
);

const articlesSlice = createSlice({
    name: 'articlesSlice',
    initialState: articlesAdapter.getInitialState<ArticlesScheme>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initialState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.hasMore = action.payload.length > 0;

                    if (action.meta.arg.replace) {
                        articlesAdapter.setAll(state, action.payload);
                    } else {
                        articlesAdapter.addMany(state, action.payload);
                    }
                },
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { reducer: articlesReducer, actions: articlesActions } = articlesSlice;
