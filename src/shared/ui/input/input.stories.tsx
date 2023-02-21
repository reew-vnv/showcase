import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';

export default {
    title: 'shared/inpit',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

// @ts-ignore
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type Text',
    value: '123123',
};
