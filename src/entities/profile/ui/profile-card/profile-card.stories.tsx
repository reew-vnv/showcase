import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import avatar from 'shared/assets/tests/storybook_pic.jpeg';
import { ProfileCard } from './profile-card';

export default {
    title: 'entities/profile-card',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 29,
        firstname: 'Andrei',
        lastname: 'Ivanov',
        country: Country.Russia,
        currency: Currency.USD,
        avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'error',
};
