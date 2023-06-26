import { StateScheme } from 'app/providers/store-provider';
import { getProfileError } from './get-profile-error';

describe('get-profile-error.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as StateScheme)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileError(state as StateScheme)).toEqual(undefined);
    });
});
