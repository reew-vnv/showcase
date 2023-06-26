import { StateScheme } from 'app/providers/store-provider';

export const getProfileForm = (state: StateScheme) => state?.profile?.form;
