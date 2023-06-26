import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Text, TextSize } from 'shared/ui/text/text';
import { AddCommentForm } from 'features/add-comment-form';
import { CommentList } from 'entities/comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { VStack } from 'shared/ui/stack';
import {
    getArticleComments,
} from '../../model/slice/article-details-comments-slice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
    addCommentForArticle,
} from '../../model/services/add-comment-for-article/add-comment-for-article';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetch-comments-by-article-id/fetch-comments-by-article-id';
import cls from './article-details-comments.module.scss';

interface ArticleDetailsCommentsProps {
    id: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (
        <VStack gap="8" max>
            <Text size={TextSize.L} className={cls.comment_title} title={t('Comments')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
