import { StateScheme } from 'app/providers/store-provider';

export const getUserInited = (state: StateScheme) => state.user._inited;
