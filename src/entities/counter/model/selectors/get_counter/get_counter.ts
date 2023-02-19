import { StateScheme } from 'app/providers/store_provider';

export const getCounter = (state: StateScheme) => state.counter;
