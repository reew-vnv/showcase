import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import cls from './login_form.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.login_form, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                autofocus
                placeholder={t('Type Username')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Type Password')}
            />
            <Button className={cls.login_btn}>
                {t('Sign in')}
            </Button>
        </div>
    );
};
