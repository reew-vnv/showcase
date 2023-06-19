import { StateScheme } from 'app/providers/store-provider';

export const getArticleRecommendationsIsLoading = (
    state: StateScheme,
) => state.articleDetailsPage?.recommendations?.isLoading;

export const getArticleRecommendationsError = (
    state: StateScheme,
) => state.articleDetailsPage?.recommendations?.error;
