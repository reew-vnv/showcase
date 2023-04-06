import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import {
    getArticlesHasMore, getArticlesIsLoading,
    getArticlesNum,
} from 'pages/articles/model/selectors/articles-selectors';
import { articlesActions } from 'pages/articles/model/slices/articles-slice';
import { fetchArticlesList } from 'pages/articles/model/services/fetch-articles-list';

export const fetchNextArticles = createAsyncThunk<
    void, void, ThunkConfig<string>
    >(
        'articles/fetch-next-articles',
        async (_, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const hasMore = getArticlesHasMore(getState());
            const page = getArticlesNum(getState());
            const isLoading = getArticlesIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
