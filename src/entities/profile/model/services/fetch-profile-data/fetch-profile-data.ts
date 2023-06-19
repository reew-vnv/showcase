import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store-provider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetch-profile-data',
    async (profileId, thunkAPI) => {
        const { extra } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
