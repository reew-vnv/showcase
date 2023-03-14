import { Article } from 'entities/article';

export interface ArticleDetailsScheme {
    isLoading: boolean,
    error?: string,
    data?: Article
}
