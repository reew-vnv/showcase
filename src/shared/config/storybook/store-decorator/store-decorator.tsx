import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/store-provider';
import { loginReducer } from 'features/auth_by_username/model/slice/logic-slice';
import { profileReducer } from 'entities/profile';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { articleDetailsReducer } from 'entities/article/model/slice/article-details-slice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
