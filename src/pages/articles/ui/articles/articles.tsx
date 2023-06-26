import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'widgets/page/page';
import {
    ArticlesInfiniteList,
} from '../../ui/articles-infinite-list/articles-infinite-list';
import { fetchNextArticles } from '../../model/services/fetch-next-articles';
import { ArticlesFilters } from '../articles-filters/articles-filters';
import { articlesReducer } from '../../model/slices/articles-slice';
import cls from './articles.module.scss';

interface ArticlesProps {
    className?: string,
}

const reducers: ReducersList = {
    articles: articlesReducer,
};

const Articles = ({ className }: ArticlesProps) => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.articles, {}, [className])}
            >
                <ArticlesFilters />
                <ArticlesInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(Articles);
