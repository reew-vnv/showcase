import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../app-link/app-link';
import cls from './dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.options_bottom_left,
    'bottom right': cls.options_bottom_right,
    'top left': cls.options_top_left,
    'top right': cls.options_top_right,
};

export const Dropdown = (props: DropdownProps) => {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];
    return (
        <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
            <Menu.Button className={cls.button}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, i) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            key={i}
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={i}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={i}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
