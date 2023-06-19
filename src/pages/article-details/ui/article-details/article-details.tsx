import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetailsComponent, ArticleList } from 'entities/article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/text/text';
import { CommentList } from 'entities/comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import {
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
import { Page } from 'widgets/page/page';
import {
    getArticleRecommendations,
} from 'pages/article-details/model/slice/article-details-recommendations-slice';
import {
    getArticleRecommendationsIsLoading,
} from 'pages/article-details/model/selectors/recommendations';
import {
    fetchArticleRecommendations,
} from 'pages/article-details/model/services/fetch-article-recommendations/fetch-article-recommendations';
import { articleDetailsPageReducer } from 'pages/article-details/model/slice';
import {
    ArticleDetailsHeader,
} from 'pages/article-details/ui/article-details-header/article-details-header';
import cls from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
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
                <ArticleDetailsHeader />
                <ArticleDetailsComponent id={id} />
                <Text size={TextSize.L} className={cls.recommendations} title={t('Recommendations')} />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target="_blank"
                />
                <Text size={TextSize.L} className={cls.comment_title} title={t('Comments')} />
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
