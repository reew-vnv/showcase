import { StateScheme } from 'app/providers/store-provider';

export const getProfileError = (state: StateScheme) => state?.profile?.error;
