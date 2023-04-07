import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import {
    getArticlesLimit,
    getArticlesOrder,
    getArticlesPage,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from 'pages/articles/model/selectors/articles-selectors';
import { addQueryParams } from 'shared/lib/url/add-query-params/add-query-params';
import { ArticleType } from 'entities/article/model/types/article';

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
            const type = getArticlesType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
                    },
                });

                console.log({ response });
                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue('error');
            }
        },
    );
