import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetailsComponent } from 'entities/article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/text/text';
import { CommentList } from 'entities/comment';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import {
    articleDetailsCommentsReducer, getArticleComments,
} from 'pages/article-details/model/slice/article-details-comments-slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/article-details/model/services/fetch-comments-by-article-id/fetch-comments-by-article-id';
import { getArticleCommentsIsLoading } from 'pages/article-details/model/selectors/comments';
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

    useInitialEffect(() => {
        if (id != null) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });

    if (!id) {
        return (
            <div className={classNames(cls.article_details, {}, [className])}>
                {t('Article Not Found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.article_details, {}, [className])}>
                <ArticleDetailsComponent id={id} />
                <Text className={cls.comment_title} title={t('Comments')} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetails);
