import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';
import { ColorsEnum, Icon } from 'shared/ui/icon/icon';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './sidebar-item.module.scss';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) return null;
    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <Icon Svg={item.Icon} fill={ColorsEnum.SECONDARY} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};
