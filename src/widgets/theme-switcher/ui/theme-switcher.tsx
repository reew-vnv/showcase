import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/theme-provider';
import ThemeIcon from 'shared/assets/icons/theme-light-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { memo } from 'react';
import { ColorsEnum, Icon } from 'shared/ui/icon/icon';

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                // eslint-disable-next-line i18next/no-literal-string
                ? <Icon Svg={ThemeIcon} size="36px" fill={ColorsEnum.SECONDARY} />
                // eslint-disable-next-line i18next/no-literal-string
                : <Icon Svg={ThemeIcon} size="36px" fill={ColorsEnum.SECONDARY} />}
        </Button>
    );
});
