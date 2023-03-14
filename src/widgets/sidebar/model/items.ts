import React from 'react';
import { RoutePath } from 'shared/config/route-config/route-config';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Articles',
        authOnly: true,
    },
];
