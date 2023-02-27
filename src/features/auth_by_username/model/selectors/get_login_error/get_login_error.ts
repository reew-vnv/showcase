import { StateScheme } from 'app/providers/store_provider';

export const getLoginError = (state: StateScheme) => state?.loginForm?.error;
