import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Article } from 'entities/article';

export const fetchArticlesList = createAsyncThunk<
    Article[], void, ThunkConfig<string>
    >(
        'articles/fetch-articles-list',
        async (articleId, thunkAPI) => {
            const { extra } = thunkAPI;

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
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
