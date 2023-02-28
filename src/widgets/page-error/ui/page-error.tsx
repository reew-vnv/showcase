import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';
import cls from './page-error.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.page_error, {}, [className])}>
            <p>{t('Error Info Message')}</p>
            <Button onClick={reloadPage}>
                {t('Update Page')}
            </Button>
        </div>
    );
};
