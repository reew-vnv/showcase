import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetailsComponent } from 'entities/article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/text/text';
import { CommentList } from 'entities/comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from 'pages/article-details/model/slice/article-details-comments-slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/article-details/model/services/fetch-comments-by-article-id/fetch-comments-by-article-id';
import { getArticleCommentsIsLoading } from 'pages/article-details/model/selectors/comments';
import { AddCommentForm } from 'features/add-comment-form';
import {
    addCommentForArticle,
} from 'pages/article-details/model/services/add-comment-for-article/add-comment-for-article';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { RoutePath } from 'shared/config/route-config/route-config';
import { Page } from 'widgets/page/page';
import cls from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const navigate = useNavigate();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        if (id != null) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });

    if (!id) {
        return (
            <Page className={classNames(cls.article_details, {}, [className])}>
                {t('Article Not Found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.article_details, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToArticles}>
                    {t('Back to Articles')}
                </Button>
                <ArticleDetailsComponent id={id} />
                <Text className={cls.comment_title} title={t('Comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetails);
