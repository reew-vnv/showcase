import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './list-box';

const people = [
    {
        id: 1, value: 'Durward Reynolds', content: 'Durward Reynolds', disabled: false,
    },
    {
        id: 2, value: 'Kenton Towne', content: 'Kenton Towne', disabled: false,
    },
    {
        id: 3, value: 'Therese Wunsch', content: 'Therese Wunsch', disabled: false,
    },
    {
        id: 4, value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true,
    },
    {
        id: 5, value: 'Katelyn Rohan', content: 'Katelyn Rohan', disabled: false,
    },
];

export default {
    title: 'shared/list-box',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

// @ts-ignore
const Template: ComponentStory<typeof Input> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: people,
    defaultValue: people[0].value,
};
