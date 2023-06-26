import { StateScheme } from 'app/providers/store-provider';

export const getProfileValidateErrors = (state: StateScheme) => state?.profile?.validateErrors;
