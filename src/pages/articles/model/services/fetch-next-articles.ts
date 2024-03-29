import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import {
    getArticlesHasMore, getArticlesIsLoading,
    getArticlesNum,
} from '../../model/selectors/articles-selectors';
import { articlesActions } from '../../model/slices/articles-slice';
import { fetchArticlesList } from '../../model/services/fetch-articles-list';

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
