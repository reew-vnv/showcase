import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/store-provider';
import { getLoginError } from './get-login-error';

describe('get-login-error.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateScheme)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginError(state as StateScheme)).toEqual(undefined);
    });
});
