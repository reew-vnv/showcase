import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/store_provider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/auth_by_username/model/slice/logic_slice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>,
) => (story: () => Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        {story()}
    </StoreProvider>
);
