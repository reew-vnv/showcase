import { StateScheme } from 'app/providers/store_provider';

export const getLoginPassword = (state: StateScheme) => state?.loginForm?.password;
