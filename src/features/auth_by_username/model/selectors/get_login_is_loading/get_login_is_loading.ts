import { StateScheme } from 'app/providers/store_provider';

export const getLoginIsLoading = (state: StateScheme) => state?.loginForm?.isLoading || false;
