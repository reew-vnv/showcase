import { StateScheme } from 'app/providers/store-provider';

export const getArticleCommentsIsLoading = (
    state: StateScheme,
) => state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError = (
    state: StateScheme,
) => state.articleDetailsPage?.comments?.error;
