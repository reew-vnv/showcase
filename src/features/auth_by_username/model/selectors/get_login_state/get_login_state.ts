import { StateScheme } from 'app/providers/store_provider';

export const getLoginState = (state: StateScheme) => state?.loginForm;
