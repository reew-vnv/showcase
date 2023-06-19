import { StateScheme } from 'app/providers/store-provider';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { getProfileForm } from '../get-profile-form/get-profile-form';

describe('get-profile-form.test', () => {
    const data = {
        username: 'admin',
        age: 29,
        firstname: 'Andrei',
        lastname: 'Ivanov',
        country: Country.Russia,
        currency: Currency.USD,
    };
    test('should return form', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateScheme)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileForm(state as StateScheme)).toEqual(undefined);
    });
});
