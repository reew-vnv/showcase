import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetailsComponent } from 'entities/article';
import { useParams } from 'react-router-dom';
import cls from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string,
}

const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.article_details, {}, [className])}>
                {t('Article Not Found')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.article_details, {}, [className])}>
            <ArticleDetailsComponent id={id} />
        </div>
    );
};

export default memo(ArticleDetails);
