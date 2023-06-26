import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetailsComponent } from 'entities/article';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { Page } from 'widgets/page/page';
import { VStack } from 'shared/ui/stack';
import { ArticleRecommendationsList } from 'features/article-recommendations-list';
import { ArticleDetailsComments } from '../article-details-comments/article-details-comments';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsHeader } from '../article-details-header/article-details-header';
import cls from './article-details.module.scss';

interface ArticleDetailsProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

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
                <VStack gap="16" max>
                    <ArticleDetailsHeader />
                    <ArticleDetailsComponent id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetails);
