import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/test-async-thunk';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { fetchProfileData } from '../fetch-profile-data/fetch-profile-data';

jest.mock('axios');

const data = {
    username: 'admin',
    age: 29,
    firstname: 'Andrei',
    lastname: 'Ivanov',
    country: Country.Russia,
    currency: Currency.USD,
};

describe('fetch-profile-data.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk?.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
