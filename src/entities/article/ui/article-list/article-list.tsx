import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/text/text';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../article-list-item/article-list-item';
import {
    ArticleListItemSkeleton,
} from '../article-list-item/article-list-item-skeleton';
import cls from './article-list.module.scss';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, view = ArticleView.SMALL, isLoading, target,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.article_list, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Articles not found')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.article_list, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && new Array(view === ArticleView.SMALL ? 9 : 3)
                .fill(0)
                .map((item, index) => (
                    <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
                ))}
        </div>
    );
});
