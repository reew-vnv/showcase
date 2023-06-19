import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import cls from './flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justify_start,
    center: cls.justify_center,
    end: cls.justify_end,
    between: cls.justify_between,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.align_start,
    center: cls.align_center,
    end: cls.align_end,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.direction_row,
    column: cls.direction_column,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap_4,
    8: cls.gap_8,
    16: cls.gap_16,
    32: cls.gap_32,
};

export interface FlexProps {
    className?: string,
    children?: ReactNode,
    justify?: FlexJustify,
    align?: FlexAlign,
    direction?: FlexDirection,
    gap?: FlexGap,
    max?: boolean
}

export const Flex = memo(({
    className,
    children,
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap,
    max,
}: FlexProps) => {
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.flex, mods, classes)}>
            {children}
        </div>
    );
});
