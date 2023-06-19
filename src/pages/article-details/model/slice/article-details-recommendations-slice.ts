import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/store-provider';
import {
    ArticleDetailsRecommendationsScheme,
} from 'pages/article-details/model/types/article-details-recommendations-scheme';
import { Article } from 'entities/article';
import {
    fetchArticleRecommendations,
} from 'pages/article-details/model/services/fetch-article-recommendations/fetch-article-recommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<
    StateScheme
    >((state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState());

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsScheme>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
