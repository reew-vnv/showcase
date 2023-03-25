import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/page/page';
import cls from './not-found.module.scss';

interface NotFoundProps {
    className?: string,
}

export const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.not_found, {}, [className])}>
            {t('Page Not Found')}
        </Page>
    );
};
