import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './select';

export default {
    title: 'shared/select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'test',
    options: [
        { value: '123', content: '1 test' },
        { value: '113', content: '2 test' },
    ],
};
