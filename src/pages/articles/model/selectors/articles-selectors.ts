import { StateScheme } from 'app/providers/store-provider';
import { ArticleView } from 'entities/article';

export const getArticlesIsLoading = (state: StateScheme) => state.articles?.isLoading || false;
export const getArticlesError = (state: StateScheme) => state.articles?.error;
export const getArticlesView = (state: StateScheme) => state.articles?.view || ArticleView.SMALL;
export const getArticlesLimit = (state: StateScheme) => state.articles?.limit || 9;
export const getArticlesNum = (state: StateScheme) => state.articles?.page || 1;
export const getArticlesHasMore = (state: StateScheme) => state.articles?.hasMore;
