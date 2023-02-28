import { StateScheme } from 'app/providers/store-provider';

export const getLoginIsLoading = (state: StateScheme) => state?.loginForm?.isLoading || false;
