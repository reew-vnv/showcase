import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';
import { getArticlesLimit } from 'pages/articles/model/selectors/articles-selectors';

interface FetchArticlesListProps {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<
    Article[], FetchArticlesListProps, ThunkConfig<string>
    >(
        'articles/fetch-articles-list',
        async (props, thunkAPI) => {
            const { extra, getState } = thunkAPI;
            const { page = 1 } = props;
            const limit = getArticlesLimit(getState());

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
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
