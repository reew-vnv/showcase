import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { getArticlesInited } from 'pages/articles/model/selectors/articles-selectors';
import { articlesActions } from 'pages/articles/model/slices/articles-slice';
import { fetchArticlesList } from 'pages/articles/model/services/fetch-articles-list';
import { ArticleSortField, ArticleType } from 'entities/article/model/types/article';
import { SortOrder } from 'shared/types';

export const initArticles = createAsyncThunk<
    void, URLSearchParams, ThunkConfig<string>
    >(
        'articles/init-articles',
        async (searchParams, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const inited = getArticlesInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type') as ArticleType;

                if (orderFromUrl) {
                    dispatch(articlesActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlesActions.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articlesActions.setSearch(searchFromUrl));
                }
                if (typeFromUrl) {
                    dispatch(articlesActions.setType(typeFromUrl));
                }

                dispatch(articlesActions.initialState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
