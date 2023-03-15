import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { CommentInterface } from 'entities/comment/model/types/comment';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Text } from 'shared/ui/text/text';
import { Skeleton } from 'shared/ui/skeleton/skeleton';
import cls from './comment-card.module.scss';

interface CommentCardProps {
    className?: string,
    comment: CommentInterface,
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.comment_card, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.comment_card, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text className={cls.username} title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
