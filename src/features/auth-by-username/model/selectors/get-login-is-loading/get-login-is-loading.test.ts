import { StateScheme } from 'app/providers/store-provider';
import { getLoginIsLoading } from './get-login-is-loading';

describe('get-login-is-loading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateScheme)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
    });
});
