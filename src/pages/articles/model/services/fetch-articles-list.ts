import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import {
    getArticlesLimit, getArticlesOrder, getArticlesPage, getArticlesSearch,
    getArticlesSort,
} from 'pages/articles/model/selectors/articles-selectors';

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[], FetchArticlesListProps, ThunkConfig<string>
    >(
        'articles/fetch-articles-list',
        async (props, thunkAPI) => {
            const { extra, getState } = thunkAPI;
            const limit = getArticlesLimit(getState());
            const sort = getArticlesSort(getState());
            const order = getArticlesOrder(getState());
            const search = getArticlesSearch(getState());
            const page = getArticlesPage(getState());

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                    },
                });
                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue('error');
            }
        },
    );
