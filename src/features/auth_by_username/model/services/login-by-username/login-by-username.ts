import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/store-provider/config/state-scheme';

interface LoginByUsernameProps {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/login_by_username',
        async (auth, thunkAPI) => {
            const { extra, dispatch } = thunkAPI;
            try {
                const response = await extra.api.post<User>('/login', auth);

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));

                return response.data;
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
                return thunkAPI.rejectWithValue('error');
            }
        },
    );
