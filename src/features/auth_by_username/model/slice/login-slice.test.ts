import { DeepPartial } from '@reduxjs/toolkit';
import { LoginScheme } from 'features/auth_by_username';
import { loginActions, loginReducer } from 'features/auth_by_username/model/slice/logic-slice';

describe('login-slice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginScheme> = { username: '123' };
        expect(loginReducer(
            state as LoginScheme,
            loginActions.setUsername('123'),
        )).toEqual({ username: '123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginScheme> = { password: '123' };
        expect(loginReducer(
            state as LoginScheme,
            loginActions.setPassword('123'),
        )).toEqual({ password: '123' });
    });
});
