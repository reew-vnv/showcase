import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { getProfileForm, Profile } from 'entities/profile';
import { validateProfile } from 'entities/profile/model/services/validate-profile/validate-profile';
import { ValidateProfileError } from 'entities/profile/model/types/profile';

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
                const response = await extra.api.put<Profile>('/profile', formData);
                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
