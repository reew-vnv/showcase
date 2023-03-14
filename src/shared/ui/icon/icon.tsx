import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { CSSProperties, memo } from 'react';
import cls from './icon.module.scss';

export enum ColorsEnum {
    PRIMARY = 'fill_primary',
    SECONDARY = 'fill_secondary'
}

interface IconProps {
    className?: string,
    fill?: ColorsEnum
    size?: string,
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo((props:IconProps) => {
    const {
        className, Svg, fill = ColorsEnum.PRIMARY, size = '24px',
    } = props;

    const mods: Mods = {
        [cls[fill]]: true,
    };

    const styles: CSSProperties = {
        width: size,
        height: size,
    };
    return (
        <Svg className={classNames(cls.icon, mods, [className])} style={styles} />
    );
});
