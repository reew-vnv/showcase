import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { getArticlesInited } from 'pages/articles/model/selectors/articles-selectors';
import { articlesActions } from 'pages/articles/model/slices/articles-slice';
import { fetchArticlesList } from 'pages/articles/model/services/fetch-articles-list';

export const initArticles = createAsyncThunk<
    void, void, ThunkConfig<string>
    >(
        'articles/init-articles',
        async (_, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const inited = getArticlesInited(getState());

            if (!inited) {
                dispatch(articlesActions.initialState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
