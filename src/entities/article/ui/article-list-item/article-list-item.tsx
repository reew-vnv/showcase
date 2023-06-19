import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, ArticleView } from 'entities/article';
import { Text } from 'shared/ui/text/text';
import { ColorsEnum, Icon } from 'shared/ui/icon/icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/card/card';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { ArticleBlockType, ArticleTextBlock } from 'entities/article/model/types/article';
import { RoutePath } from 'shared/config/route-config/route-config';
import { AppLink } from 'shared/ui/app-link/app-link';
import { TextBlockComponent } from '../text-block-component/text-block-component';
import cls from './article-list-item.module.scss';

interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView,
    target?: HTMLAttributeAnchorTarget,
}

export const ArticleListItem = memo(({
    className, article, view, target,
}: ArticleListItemProps) => {
    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} fill={ColorsEnum.SECONDARY} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.article_list_item, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <TextBlockComponent block={textBlock} className={cls.text_block} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={RoutePath.article_details + article.id} target={target}>
                            <Button theme={ButtonTheme.OUTLINE_INVERTED}>
                                {t('Read full article...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={RoutePath.article_details + article.id}
            target={target}
            className={classNames(cls.article_list_item, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.image_wrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.info_wrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
