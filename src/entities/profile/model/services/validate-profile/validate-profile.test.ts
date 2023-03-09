import { ValidateProfileError } from 'entities/profile';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { validateProfile } from '../validate-profile/validate-profile';

jest.mock('axios');

const data = {
    firstname: 'Andrei',
    lastname: 'Ivanov',
    age: 29,
    currency: Currency.USD,
    country: Country.Hungary,
    city: 'Budapest',
    username: 'admin',
};

describe('validate-profile.test', () => {
    test('success', async () => {
        const result = validateProfile(data);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', async () => {
        const result = validateProfile({ ...data, firstname: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfile({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfile({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfile({ });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });
});
