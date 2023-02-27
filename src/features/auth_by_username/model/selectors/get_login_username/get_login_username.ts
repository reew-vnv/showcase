import { StateScheme } from 'app/providers/store_provider';

export const getLoginUsername = (state: StateScheme) => state?.loginForm?.username;
