import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/app_link/app_link';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.main_link}>{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About')}</AppLink>
            </div>
        </div>
    );
};
