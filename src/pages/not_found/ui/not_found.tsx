import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './not_found.module.scss';

interface NotFoundProps {
    className?: string,
}

export const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.not_found, {}, [className])}>
            {t('Page Not Found')}
        </div>
    );
};
