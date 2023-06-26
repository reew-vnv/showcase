import { StateScheme } from 'app/providers/store-provider';
import { getProfileIsLoading } from './get-profile-is-loading';

describe('get-profile-is-loading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateScheme)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileIsLoading(state as StateScheme)).toEqual(false);
    });
});
