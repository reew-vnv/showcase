import { StateScheme } from 'app/providers/store-provider';

export const getProfileIsLoading = (state: StateScheme) => state?.profile?.isLoading || false;
