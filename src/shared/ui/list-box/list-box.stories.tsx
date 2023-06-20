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
    decorators: [
        (Story) => <div style={{ padding: '150px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

// @ts-ignore
const Template: ComponentStory<typeof Input> = (args) => <ListBox {...args} />;

export const PrimaryTopRight = Template.bind({});
PrimaryTopRight.args = {
    items: people,
    defaultValue: people[0].value,
    direction: 'top right',
};

export const PrimaryTopLeft = Template.bind({});
PrimaryTopLeft.args = {
    items: people,
    defaultValue: people[0].value,
    direction: 'top left',
};

export const PrimaryBottomRight = Template.bind({});
PrimaryBottomRight.args = {
    items: people,
    defaultValue: people[0].value,
    direction: 'bottom right',
};

export const PrimaryBottomLeft = Template.bind({});
PrimaryBottomLeft.args = {
    items: people,
    defaultValue: people[0].value,
    direction: 'bottom left',
};
