import { StateScheme } from 'app/providers/store-provider';
import { ArticleView } from 'entities/article';
import { ArticleSortField, ArticleType } from 'entities/article/model/types/article';

export const getArticlesIsLoading = (state: StateScheme) => state.articles?.isLoading || false;
export const getArticlesError = (state: StateScheme) => state.articles?.error;
export const getArticlesView = (state: StateScheme) => state.articles?.view || ArticleView.SMALL;
export const getArticlesLimit = (state: StateScheme) => state.articles?.limit || 9;
export const getArticlesNum = (state: StateScheme) => state.articles?.page || 1;
export const getArticlesHasMore = (state: StateScheme) => state.articles?.hasMore;
export const getArticlesInited = (state: StateScheme) => state.articles?._inited;
export const getArticlesOrder = (state: StateScheme) => state.articles?.order ?? 'asc';
export const getArticlesSort = (
    state: StateScheme,
) => state.articles?.sort ?? ArticleSortField.CREATED;
export const getArticlesSearch = (state: StateScheme) => state.articles?.search ?? '';
export const getArticlesPage = (state: StateScheme) => state.articles?.page ?? 1;
export const getArticlesType = (state: StateScheme) => state.articles?.type ?? ArticleType.ALL;
