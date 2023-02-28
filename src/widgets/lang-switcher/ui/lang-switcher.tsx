import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import cls from './lang-switcher.module.scss';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames(cls.lang_switcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {`${t(short ? 'Language For Switcher' : 'Language')}`}
        </Button>
    );
};
