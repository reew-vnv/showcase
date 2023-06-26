import { StateScheme } from 'app/providers/store-provider';

export const getProfileData = (state: StateScheme) => state?.profile?.data;
