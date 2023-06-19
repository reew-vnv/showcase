import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { articleDetailsReducer } from 'entities/article/model/slice/article-details-slice';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    fetchArticleById,
} from 'entities/article/model/services/fetch-article-by-id/fetch-article-by-id';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/article/model/selectors/article-details';
import { Text, TextAlign, TextSize } from 'shared/ui/text/text';
import { Skeleton } from 'shared/ui/skeleton/skeleton';
import { Avatar } from 'shared/ui/avatar/avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ColorsEnum, Icon } from 'shared/ui/icon/icon';
import { ArticleBlock, ArticleBlockType } from 'entities/article/model/types/article';
import { CodeBlockComponent } from 'entities/article/ui/code-block-component/code-block-component';
import {
    ImageBlockComponent,
} from 'entities/article/ui/image-block-component/image-block-component';
import { TextBlockComponent } from 'entities/article/ui/text-block-component/text-block-component';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import cls from './article-details-component.module.scss';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string,
    id: string
}

export const ArticleDetailsComponent = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <CodeBlockComponent key={block.id} className={cls.block} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ImageBlockComponent key={block.id} className={cls.block} block={block} />;
        case ArticleBlockType.TEXT:
            return <TextBlockComponent key={block.id} className={cls.block} block={block} />;
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => {
        if (id != null) {
            dispatch(fetchArticleById(id));
        }
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Skeleton className={cls.title} width={300} height={32} border="8px" />
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Skeleton className={cls.skeleton} width={600} height={24} border="8px" />
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Skeleton className={cls.skeleton} width="100%" height={200} border="8px" />
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Skeleton className={cls.skeleton} width="100%" height={200} border="8px" />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Article Details Page Error Title')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatar_wrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                />
                <div className={cls.article_info}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <Icon Svg={EyeIcon} fill={ColorsEnum.PRIMARY} size="24px" />
                    <Text
                        className={cls.info}
                        text={String(article?.views)}
                        size={TextSize.L}
                    />
                </div>
                <div className={cls.article_info}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <Icon Svg={CalendarIcon} fill={ColorsEnum.PRIMARY} size="24px" />
                    <Text
                        className={cls.info}
                        text={article?.createdAt}
                    />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.article_details_component, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
