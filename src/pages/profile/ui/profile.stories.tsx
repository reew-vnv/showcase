import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/store-decorator';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import avatar from 'shared/assets/tests/storybook_pic.jpeg';
import Profile from './profile';

export default {
    title: 'pages/profile',
    component: Profile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 29,
            firstname: 'Andrei',
            lastname: 'Ivanov',
            country: Country.Russia,
            currency: Currency.USD,
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 29,
            firstname: 'Andrei',
            lastname: 'Ivanov',
            country: Country.Russia,
            currency: Currency.USD,
            avatar,
        },
    },
})];
