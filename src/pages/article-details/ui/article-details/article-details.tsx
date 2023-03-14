import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string,
}

const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.article_details, {}, [className])}>
            ARTICLE DETAILS
        </div>
    );
};

export default memo(ArticleDetails);
