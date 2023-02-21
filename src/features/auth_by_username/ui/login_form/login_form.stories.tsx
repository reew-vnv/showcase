import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from './login_form';

export default {
    title: 'features/login_form',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

// @ts-ignore
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
