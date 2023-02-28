import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/theme-provider';
import ThemeIcon from 'shared/assets/icons/theme-light-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import cls from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <ThemeIcon className={cls.switcher_icon} />
                : <ThemeIcon className={cls.switcher_icon} />}
        </Button>
    );
};
