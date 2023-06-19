import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { CommentInterface } from 'entities/comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentInterface[], string | undefined, ThunkConfig<string>
    >(
        'article/fetch-comments-by-article-id',
        async (articleId, thunkAPI) => {
            const { extra } = thunkAPI;

            if (!articleId) {
                return thunkAPI.rejectWithValue('error');
            }

            try {
                const response = await extra.api.get<CommentInterface[]>('/comments', {
                    params: {
                        articleId,
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
