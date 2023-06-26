import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList } from 'entities/article';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticles } from '../../model/slices/articles-slice';
import {
    getArticlesIsLoading,
    getArticlesView,
} from '../../model/selectors/articles-selectors';
import { initArticles } from '../../model/services/init-articles';

interface ArticlesInfiniteListProps {
    className?: string,
}

export const ArticlesInfiniteList = memo(({ className }: ArticlesInfiniteListProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticles(searchParams));
    });
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={className}
            />
        </div>
    );
});
