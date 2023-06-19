import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/article/ui/article-list/article-list';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/page/page';
import { useSearchParams } from 'react-router-dom';
import {
    getArticlesIsLoading,
    getArticlesView,
} from '../../model/selectors/articles-selectors';
import { fetchNextArticles } from '../../model/services/fetch-next-articles';
import { initArticles } from '../../model/services/init-articles';
import { ArticlesFilters } from '../articles-filters/articles-filters';
import {
    articlesReducer,
    getArticles,
} from '../../model/slices/articles-slice';
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
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticles(searchParams));
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
