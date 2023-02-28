import { StateScheme } from 'app/providers/store-provider';

export const getUserAuthData = (state: StateScheme) => state.user.authData;
