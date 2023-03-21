import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/text/text';
import { CommentCard } from 'entities/comment/ui/comment-card/comment-card';
import { CommentInterface } from 'entities/comment/model/types/comment';
import cls from './comment-list.module.scss';

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
            <div className={classNames(cls.comment_list, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }
    return (
        <div className={classNames(cls.comment_list, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text text={t('Empty Comments')} />}
        </div>
    );
});
