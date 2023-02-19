import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store_provider/config/store';
import { StateScheme } from 'app/providers/store_provider/config/state_scheme';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<StateScheme>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as StateScheme);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
