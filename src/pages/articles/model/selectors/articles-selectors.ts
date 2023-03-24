import { StateScheme } from 'app/providers/store-provider';
import { ArticleView } from 'entities/article';

export const getArticlesIsLoading = (state: StateScheme) => state.articles?.isLoading || false;
export const getArticlesError = (state: StateScheme) => state.articles?.error;
export const getArticlesView = (state: StateScheme) => state.articles?.view || ArticleView.SMALL;
