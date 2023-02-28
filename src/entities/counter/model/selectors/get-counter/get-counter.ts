import { StateScheme } from 'app/providers/store-provider';

export const getCounter = (state: StateScheme) => state.counter;
