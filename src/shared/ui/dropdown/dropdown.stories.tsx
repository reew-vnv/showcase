import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../button/button';
import { Dropdown } from './dropdown';

export default {
    title: 'shared/dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
};
