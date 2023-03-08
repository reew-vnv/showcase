import { StateScheme } from 'app/providers/store-provider';

export const getProfileReadonly = (state: StateScheme) => state?.profile?.readonly || false;
