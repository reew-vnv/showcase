import { StateScheme } from 'app/providers/store-provider';

export const getLoginPassword = (state: StateScheme) => state?.loginForm?.password || '';
