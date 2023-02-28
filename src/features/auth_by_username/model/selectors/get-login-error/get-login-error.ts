import { StateScheme } from 'app/providers/store-provider';

export const getLoginError = (state: StateScheme) => state?.loginForm?.error;
