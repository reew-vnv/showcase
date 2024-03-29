import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Text } from 'shared/ui/text/text';
import { Skeleton } from 'shared/ui/skeleton/skeleton';
import { AppLink } from 'shared/ui/app-link/app-link';
import { RoutePath } from 'shared/config/route-config/route-config';
import { VStack } from 'shared/ui/stack';
import { CommentInterface } from '../../model/types/comment';
import cls from './comment-card.module.scss';

interface CommentCardProps {
    className?: string,
    comment?: CommentInterface,
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames(cls.comment_card, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack gap="8" max className={classNames(cls.comment_card, {}, [className])}>
            {comment && (
                <AppLink to={`${RoutePath.profile}${comment?.user?.id}`} className={cls.header}>
                    {comment?.user?.avatar ? <Avatar size={30} src={comment?.user?.avatar} /> : null}
                    <Text className={cls.username} title={comment?.user?.username} />
                </AppLink>
            )}
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    );
});
