import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './articles.module.scss';

interface ArticlesProps {
    className?: string,
}

const Articles = ({ className }: ArticlesProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.articles, {}, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(Articles);
