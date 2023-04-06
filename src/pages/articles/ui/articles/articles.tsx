import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/article/ui/article-list/article-list';
import { ArticleView, ArticleViewSelector } from 'entities/article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import {
    articlesActions,
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

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesActions.setView(view));
    }, [dispatch]);

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
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(Articles);
