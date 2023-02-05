import {classNames} from "shared/lib/classNames/classNames";
import cls from './lang_switcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/button/button";
import TranslateIcon from 'shared/assets/icons/translate.svg'
import {useTheme} from "app/providers/theme_provider";

interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {theme} = useTheme()
    const {t, i18n} = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            className={classNames(cls.lang_switcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            <TranslateIcon width={36} height={36} fill={theme === 'light' ? '#e7f6f2' : '#e5ba73'} />
             : {`${t('Language')}`}
        </Button>
    );
};