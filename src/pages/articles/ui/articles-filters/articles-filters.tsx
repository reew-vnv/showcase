import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesOrder, getArticlesSearch,
    getArticlesSort,
    getArticlesView,
} from 'pages/articles/model/selectors/articles-selectors';
import { ArticleView, ArticleViewSelector } from 'entities/article';
import { articlesActions } from 'pages/articles/model/slices/articles-slice';
import { Card } from 'shared/ui/card/card';
import { Input } from 'shared/ui/input/input';
import {
    ArticleSortSelector,
} from 'entities/article/ui/article-sort-selector/article-sort-selector';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/article/model/types/article';
import { fetchArticlesList } from 'pages/articles/model/services/fetch-articles-list';
import cls from './articles-filters.module.scss';

interface ArticlesFiltersProps {
    className?: string,
}

export const ArticlesFilters = memo(({ className }: ArticlesFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);
    const sort = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesActions.setView(view));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesActions.setSort(newSort));
        dispatch(articlesActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesActions.setOrder(newOrder));
        dispatch(articlesActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesActions.setSearch(search));
        dispatch(articlesActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    return (
        <div className={classNames(cls.articles_filters, {}, [className])}>
            <div className={cls.sort_wrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Search')}
                    inputClassName={cls.input}
                />
            </Card>
        </div>
    );
});
