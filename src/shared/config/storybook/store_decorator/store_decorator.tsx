import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/store_provider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateScheme>) => (story: () => Story) => (
    <StoreProvider initialState={state}>
        {story()}
    </StoreProvider>
);
