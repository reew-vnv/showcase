import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/auth_by_username/model/slice/logic_slice';
import { TextTheme, Text } from 'shared/ui/text/text';
import {
    loginByUsername,
} from '../../model/services/login_by_username/login_by_username';
import {
    getLoginState,
} from '../../model/selectors/get_login_state/get_login_state';
import cls from './login_form.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({
            username,
            password,
        }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.login_form, {}, [className])}>
            <Text title={t('Authorization Form')} />
            {error && <Text text={t('Wrong Credentials')} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                className={cls.input}
                autofocus
                placeholder={t('Type Username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Type Password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.login_btn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Sign in')}
            </Button>
        </div>
    );
});
