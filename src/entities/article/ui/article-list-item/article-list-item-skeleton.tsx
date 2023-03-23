import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/article';
import { Card } from 'shared/ui/card/card';
import { Skeleton } from 'shared/ui/skeleton/skeleton';
import cls from './article-list-item.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string,
    view: ArticleView
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.article_list_item, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton height={16} width={150} className={cls.username} />
                        <Skeleton height={16} width={150} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.article_list_item, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.image_wrapper}>
                    <Skeleton className={cls.img} width={200} height={200} />
                </div>
                <div className={cls.info_wrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
