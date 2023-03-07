import { StateScheme } from 'app/providers/store-provider';

export const getLoginUsername = (state: StateScheme) => state?.loginForm?.username || '';
