import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsScheme } from 'entities/article/model/types/article-details-scheme';
import {
    fetchArticleById,
} from 'entities/article/model/services/fetch-article-by-id/fetch-article-by-id';
import { Article } from 'entities/article';

const initialState: ArticleDetailsScheme = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
