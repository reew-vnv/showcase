import { StateScheme } from 'app/providers/store-provider';
import { ValidateProfileError } from '../../types/editable-profile-card-schema';
import { getProfileValidateErrors } from '../get-profile-validate-errors/get-profile-validate-errors';

describe('get-profile-validate-errors.test', () => {
    test('should return errors', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateScheme)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
    });
});
