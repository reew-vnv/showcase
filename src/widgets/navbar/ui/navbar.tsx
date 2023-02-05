import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/app_link/app_link";
import {ThemeSwitcher} from "widgets/theme_switcher";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.main_link}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};

