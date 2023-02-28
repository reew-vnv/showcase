import { StoreProvider } from './ui/store-provider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateScheme, ReduxStoreWithManager } from './config/state-scheme';

export {
    StoreProvider,
    createReduxStore,
    StateScheme,
    ReduxStoreWithManager,
    AppDispatch,
};
