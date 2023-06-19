import { Article } from '../types/article';

export interface ArticleDetailsScheme {
    isLoading: boolean,
    error?: string,
    data?: Article
}
