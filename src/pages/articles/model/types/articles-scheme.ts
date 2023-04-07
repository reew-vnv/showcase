import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/article';
import { ArticleSortField, ArticleType } from 'entities/article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesScheme extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,
    view: ArticleView,

    // page
    page: number,
    limit?: number,
    hasMore: boolean,

    // filters
    order: SortOrder,
    search: string,
    sort: ArticleSortField,
    type: ArticleType,

    _inited: boolean,
}
