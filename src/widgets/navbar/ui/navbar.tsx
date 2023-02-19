import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links} />
    </div>
);
