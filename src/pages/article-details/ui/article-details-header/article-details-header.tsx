import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { RoutePath } from 'shared/config/route-config/route-config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/article';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './article-details-header.module.scss';

interface ArticleDetailsHeaderProps {
    className?: string,
}

export const ArticleDetailsHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);
    return (
        <div className={classNames(cls.article_details_header, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToArticles}>
                {t('Back to Articles')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                    className={cls.edit_btn}
                >
                    {t('Edit')}
                </Button>
            )}
        </div>
    );
});
