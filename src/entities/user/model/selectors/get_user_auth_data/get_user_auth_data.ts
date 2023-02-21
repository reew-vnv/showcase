import { StateScheme } from 'app/providers/store_provider';

export const getUserAuthData = (state: StateScheme) => state.user.authData;
