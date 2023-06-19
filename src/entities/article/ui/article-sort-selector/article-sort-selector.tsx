import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/select/select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/types/article';
import cls from './article-sort-selector.module.scss';

interface ArticleSortSelectorProps {
    className?: string,
    sort: ArticleSortField,
    order: SortOrder,
    onChangeOrder: (newOrder: SortOrder) => void,
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('creation date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.article_sort_selector, {}, [className])}>
            <Select
                value={sort}
                options={sortFieldOptions}
                label={t('Sort by')}
                onChange={onChangeSort}
            />
            <Select
                value={order}
                options={orderOptions}
                label={t('By')}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
