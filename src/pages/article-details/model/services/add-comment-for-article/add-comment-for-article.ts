import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';
import { ThunkConfig } from 'app/providers/store-provider/config/state-scheme';
import { CommentInterface } from 'entities/comment';
import { getArticleDetailsData } from 'entities/article/model/selectors/article-details';
import {
    fetchCommentsByArticleId,
} from '../fetch-comments-by-article-id/fetch-comments-by-article-id';

export const addCommentForArticle = createAsyncThunk<
    CommentInterface,
    string,
    ThunkConfig<string>
    >(
        'article-details/add-comment-for-article',
        async (text, thunkAPI) => {
            const { extra, dispatch, getState } = thunkAPI;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return thunkAPI.rejectWithValue('error');
            }

            try {
                const response = await extra.api.post<CommentInterface>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article.id));

                return response.data;
            } catch (e) {
            // eslint-disable-next-line no-console
                console.log(e);
                return thunkAPI.rejectWithValue('error');
            }
        },
    );
