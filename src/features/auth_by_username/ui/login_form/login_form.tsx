import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/auth_by_username/model/slice/logic_slice';
import { TextTheme, Text } from 'shared/ui/text/text';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/dynamic_module_loader/dynamic_module_loader';
import { getLoginError } from '../../model/selectors/get_login_error/get_login_error';
import { getLoginIsLoading } from '../../model/selectors/get_login_is_loading/get_login_is_loading';
import { getLoginUsername } from '../../model/selectors/get_login_username/get_login_username';
import { getLoginPassword } from '../../model/selectors/get_login_password/get_login_password';
import { loginByUsername } from '../../model/services/login_by_username/login_by_username';
import cls from './login_form.module.scss';

export interface LoginFormProps {
    className?: string,
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
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

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({
            username,
            password,
        }));
    }, [dispatch, password, username]);

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
