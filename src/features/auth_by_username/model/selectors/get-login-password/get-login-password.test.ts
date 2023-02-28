import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/store-provider';
import { getLoginPassword } from './get-login-password';

describe('get-login-password.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '123123',
            },
        };
        expect(getLoginPassword(state as StateScheme)).toEqual('123123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginPassword(state as StateScheme)).toEqual(undefined);
    });
});
