import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/article';

export interface ArticlesScheme extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,
    view: ArticleView,

    page: number,
    limit?: number,
    hasMore: boolean,

    _inited: boolean
}
