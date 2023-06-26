import React, {
    memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/auth-by-username';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/text/text';
import { getUserAuthData, userActions } from 'entities/user';
import { RoutePath } from 'shared/config/route-config/route-config';
import { Dropdown } from 'shared/ui/dropdown/dropdown';
import { Avatar } from 'shared/ui/avatar/avatar';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    title={t('Showcase')}
                    theme={TextTheme.INVERTED}
                    className={cls.app_name}
                />
                <AppLink
                    className={cls.create_link}
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.PRIMARY}
                >
                    {t('Create article')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
                    direction="bottom left"
                    items={[
                        {
                            content: t('User Profile'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Sign Out'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData?.avatar} />}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Sign In')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
