import {classNames} from "shared/lib/classNames/classNames";
import cls from './theme_switcher.module.scss'
import {Theme, useTheme} from "app/providers/theme_provider";
import ThemeIcon from 'shared/assets/icons/theme-light-dark.svg'
import {Button, ThemeButton} from "shared/ui/button/button";

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.theme_switcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <ThemeIcon fill={'#2c3333'} width={36} height={36} />
                : <ThemeIcon fill={'#FFC700'} width={36} height={36} />}
        </Button>
    );
};