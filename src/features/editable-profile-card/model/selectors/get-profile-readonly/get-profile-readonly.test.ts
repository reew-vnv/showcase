import { StateScheme } from 'app/providers/store-provider';
import { getProfileReadonly } from './get-profile-readonly';

describe('get-profile-readonly.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateScheme)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileReadonly(state as StateScheme)).toEqual(false);
    });
});
