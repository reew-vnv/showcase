import { componentRender } from 'shared/lib/tests/component-render/component-render';
import { Profile } from 'entities/profile';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profile-slice';
import { EditableProfileCard } from './editable-profile-card';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
describe('editable-profile-card.test', () => {
    test('Readonly should be turned on', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('editable-profile-card-header.edit-button'));
        expect(screen.getByTestId('editable-profile-card-header.cancel-button')).toBeInTheDocument();
    });

    test('If there are no validation error, should be PUT', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('editable-profile-card-header.edit-button'));

        await userEvent.type(screen.getByTestId('profile-card.firstname'), 'user');

        await userEvent.click(screen.getByTestId('editable-profile-card-header.save-button'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
