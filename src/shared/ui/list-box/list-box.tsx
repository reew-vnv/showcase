import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../stack';
import { ColorsEnum, Icon } from '../../ui/icon/icon';
import { Button } from '../button/button';
import cls from './list-box.module.scss';
import ArrowsIcon from '../../assets/icons/unfold-more-horizontal.svg';

export interface ListBoxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps {
    items: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: <T extends string>(value: T) => void,
    readonly?: boolean,
    direction?: DropdownDirection
    label?: string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.options_bottom,
    top: cls.options_top,
};

export const ListBox = (props: ListBoxProps) => {
    const {
        items, className, value, defaultValue, onChange, readonly, direction = 'bottom', label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4" justify="center">
            {label && (
                <div
                    className={classNames('', { [cls.disabled]: readonly })}
                >
                    {`${label}:`}
                </div>
            )}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.list_box, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    className={classNames(cls.trigger, { [cls.disabled]: readonly })}
                >
                    <Button className={cls.list_box_button} disabled={readonly}>
                        {value ?? defaultValue}
                        <Icon
                            Svg={ArrowsIcon}
                            fill={ColorsEnum.PRIMARY}
                            size="18px"
                            className={cls.arrows}
                        />
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                        [cls.selected]: selected,
                                    },
                                )}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
