import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Profile } from 'entities/profile';
import { ValidateProfileError } from '../../types/editable-profile-card-schema';
import { validateProfile } from '../validate-profile/validate-profile';
import { getProfileForm } from '../../selectors/get-profile-form/get-profile-form';

export const updateProfileData = createAsyncThunk<
    Profile, void, ThunkConfig<ValidateProfileError[]>
    >(
        'profile/update-profile-data',
        async (_, thunkAPI) => {
            const { extra, getState } = thunkAPI;

            const formData = getProfileForm(getState());

            const errors = validateProfile(formData);
            if (errors.length) {
                return thunkAPI.rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
                return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
