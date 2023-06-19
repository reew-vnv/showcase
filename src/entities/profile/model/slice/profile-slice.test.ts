import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import {
    ValidateProfileError,
    ProfileScheme,
} from '../types/profile';
import { profileActions, profileReducer } from '../slice/profile-slice';
import { updateProfileData } from '../services/update-profile-data/update-profile-data';

const data = {
    firstname: 'Andrei',
    lastname: 'Ivanov',
    age: 29,
    currency: Currency.USD,
    country: Country.Hungary,
    city: 'Budapest',
    username: 'admin',
};

describe('profile-slice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileScheme> = { form: { username: 'Andrei' } };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.updateProfile({ username: 'EEE' }),
        )).toEqual({
            form: { username: 'EEE' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
