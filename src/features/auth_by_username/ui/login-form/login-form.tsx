import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/auth_by_username/model/slice/logic-slice';
import { TextTheme, Text } from 'shared/ui/text/text';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginError } from '../../model/selectors/get-login-error/get-login-error';
import { getLoginIsLoading } from '../../model/selectors/get-login-is-loading/get-login-is-loading';
import { getLoginUsername } from '../../model/selectors/get-login-username/get-login-username';
import { getLoginPassword } from '../../model/selectors/get-login-password/get-login-password';
import { loginByUsername } from '../../model/services/login-by-username/login-by-username';
import cls from './login-form.module.scss';

export interface LoginFormProps {
    className?: string,
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({
            username,
            password,
        }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
