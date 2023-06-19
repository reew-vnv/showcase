import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentInterface } from 'entities/comment';
import { StateScheme } from 'app/providers/store-provider';
import { ArticleDetailsCommentScheme } from 'pages/article-details';
import {
    fetchCommentsByArticleId,
} from 'pages/article-details/model/services/fetch-comments-by-article-id/fetch-comments-by-article-id';

const commentsAdapter = createEntityAdapter<CommentInterface>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<
    StateScheme
    >((state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState());

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentScheme>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<CommentInterface[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
