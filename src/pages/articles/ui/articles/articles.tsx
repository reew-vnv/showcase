import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/article/ui/article-list/article-list';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import {
    articlesReducer,
    getArticles,
} from 'pages/articles/model/slices/articles-slice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesIsLoading,
    getArticlesView,
} from 'pages/articles/model/selectors/articles-selectors';
import { Page } from 'widgets/page/page';
import { fetchNextArticles } from 'pages/articles/model/services/fetch-next-articles';
import { initArticles } from 'pages/articles/model/services/init-articles';
import { ArticlesFilters } from 'pages/articles/ui/articles-filters/articles-filters';
import cls from './articles.module.scss';

interface ArticlesProps {
    className?: string,
}

const reducers: ReducersList = {
    articles: articlesReducer,
};

const Articles = ({ className }: ArticlesProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticles());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.articles, {}, [className])}
            >
                <ArticlesFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(Articles);
