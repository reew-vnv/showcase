import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from 'entities/article';
import { ArticleListItem } from 'entities/article/ui/article-list-item/article-list-item';
import {
    ArticleListItemSkeleton,
} from 'entities/article/ui/article-list-item/article-list-item-skeleton';
import { Text, TextSize } from 'shared/ui/text/text';
import { useTranslation } from 'react-i18next';
import cls from './article-list.module.scss';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, view = ArticleView.SMALL, isLoading,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
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
