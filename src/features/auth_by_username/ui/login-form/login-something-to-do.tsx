import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './login-something-to-do.module.scss';

interface LoginSomethingToDoProps {
    className?: string,
}

export const LoginSomethingToDo = ({ className }: LoginSomethingToDoProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.login_something_to_do, {}, [className])} />
    );
};
