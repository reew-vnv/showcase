import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page/page';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

interface ArticleEditProps {
    className?: string,
}

const ArticleEdit = ({ className }: ArticleEditProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit
                ? t('Editing current article')
                : t('Creating new article')}
        </Page>
    );
};

export default memo(ArticleEdit);
