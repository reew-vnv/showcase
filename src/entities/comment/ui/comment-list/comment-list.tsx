import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/text/text';
import { VStack } from 'shared/ui/stack';
import { CommentCard } from '../comment-card/comment-card';
import { CommentInterface } from '../../model/types/comment';

interface CommentListProps {
    className?: string,
    comments?: CommentInterface[],
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
                : <Text text={t('Empty Comments')} />}
        </VStack>
    );
});
