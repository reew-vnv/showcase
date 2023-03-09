import { StateScheme } from 'app/providers/store-provider';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { getProfileData } from 'entities/profile';

describe('get-profile-data.test', () => {
    const data = {
        username: 'admin',
        age: 29,
        firstname: 'Andrei',
        lastname: 'Ivanov',
        country: Country.Russia,
        currency: Currency.USD,
    };
    test('should return data', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateScheme)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});
